#  - ResumeBuilder - A cool project for Building high quality and ATS freindly resumes in free...
#  - Copyright (C) 2025 NishantkSingh0.github.io
#  - Licensed under the GNU GPL v3.0 - see LICENSE file for details.

import mammoth
import pdfplumber  # PyMuPDF
from llm import llama_4
import json
import re
import ast


Prompt="""
You are an expert resume parser.

Your task is to extract structured information from the resume text below and return ONLY valid JSON in the EXACT structure provided.

Rules you must follow:
- Output ONLY valid JSON
- Do NOT add explanations, markdown, or comments
- Do NOT change any key names or structure
- Do NOT hallucinate or invent information
- If a field is missing, return an empty string ""
- If a list section is missing, return an empty array []
- Normalize spacing and casing, but preserve original meaning
- Keep durations exactly as written in the resume

JSON STRUCTURE (DO NOT MODIFY):

{
  selectedTemplate: "1",     # keep it same
  "contactInfo": {
    "fullName": "",
    "phoneNumber": "",
    "emailAddress": "",
    "linkedin": "",
    "portfolio": "",
    "jobTitle": "",
    "Languages": "",
    "Location": ""
  },
  "skills": {             # Only Top 8 hardskills or Soft skills
    "hardSkills": "",       
    "softSkills": ""
  },
  "workExperience": [
    {
      "jobTitle": "",
      "companyName": "",
      "WorkDuration": "",
      "keyAchievements": ""
    }
  ],
  "projects": [
    {
      "projectTitle": "",
      "toolsTechUsed": ""
    }
  ],
  "education": [
    {
      "institutionName": "",
      "degreeName": "",
      "graduationYear": "",
      "currentSGPA": ""
    }
  ],
  "certificates": [
    {
      "certificateName": "",
      "courseDuration": "",
      "providerName": ""
    }
  ],
  "Description": {
    "UserDescription": ""
  }
}

Important:
- Extract multiple entries where applicable
- Always return arrays even if there is only one item
- Do NOT infer or guess missing values
"""


def extract_json_from_text(text: str) -> dict:
    """
    Extract JSON from an LLM response using simple → advanced attempts.
    Returns dict/list or raises ValueError.
    """
    print("extract_json_from_text: Received Response.. Structuring it")
    if not text or not text.strip():
        raise ValueError("Empty response")

    text = text.strip()

    # 1️⃣ Try direct JSON (best case)
    try:
        return json.loads(text)
    except Exception:
        pass

    # 2️⃣ Try extracting ```json ... ``` or ``` ... ```
    match = re.search(r"```(?:json)?\s*([\s\S]*?)\s*```", text, re.IGNORECASE)
    if match:
        block = match.group(1).strip()
        try:
            return json.loads(block)
        except Exception:
            pass

    # 3️⃣ Try extracting first { ... last }
    start = text.find("{")
    end = text.rfind("}")
    if start != -1 and end != -1 and end > start:
        candidate = text[start:end + 1]

        # remove trailing commas
        candidate = re.sub(r",\s*(?=[}\]])", "", candidate)

        try:
            return json.loads(candidate)
        except Exception:
            pass

        # 4️⃣ Last fallback: Python-style dict (single quotes etc.)
        try:
            return ast.literal_eval(candidate)
        except Exception:
            pass

    raise ValueError("Could not extract valid JSON")


def parse_pdf(file) -> dict:
    print("pdf_parser: Received File.. Parsing it")
    content = ""
    with pdfplumber.open(file) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()
            if page_text:
                content += page_text + "\n"
    global Prompt
    print("pdf_parser: File parsed successfully... Sending it to llm")
    Prompt=Prompt+f"""/n/nRESUME TEXT:
<<<
{content}
>>>"""
    response=llama_4(prompt=Prompt)
    return extract_json_from_text(text=response)


def parse_docx(file):
    result = mammoth.extract_raw_text(file)
    content=result.value
    global Prompt
    Prompt=Prompt+f"""/n/nRESUME TEXT:
<<<
{content}
>>>"""
    response=llama_4(prompt=Prompt)
    return extract_json_from_text(text=response)
