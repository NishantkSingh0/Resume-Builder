#  - ResumeBuilder - A cool project for Building high quality and ATS freindly resumes in free...
#  - Copyright (C) 2025 NishantkSingh0.github.io
#  - Licensed under the GNU GPL v3.0 - see LICENSE file for details.

from dotenv import load_dotenv
import os
from groq import Groq

load_dotenv()

def llama_4(prompt):
    client = Groq(api_key=os.getenv("Groq"))
    print("LLM: Received Prompt.. Formating it")
    completion = client.chat.completions.create(
        model="meta-llama/llama-4-scout-17b-16e-instruct",
        messages=[
          {
            "role": "user",
            "content": prompt
          }
        ],
        temperature=1,
        max_completion_tokens=2560,
        top_p=1,
        stream=False,
        stop=None
    )
    print("LLM: Formating done.. returning response")
    # print("LLM response: ",completion.choices[0].message.content)
    return completion.choices[0].message.content