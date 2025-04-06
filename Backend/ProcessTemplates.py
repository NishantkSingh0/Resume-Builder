import GenerateTemplates as gtps
import os
import weasyprint
from weasyprint import HTML

# Desc="A passionated AI developer with extensive experience in various machine learning models, Primarily i focus on building models from scratch rather than relying heavily on fine-tuning pre-trained models. All my projects, showcasing my skills and contributions, are available on GitHub & Kaggle."

# JsonData={
#   "contactInfo": {
#     "fullName": "Shahid malik",
#     "phoneNumber": "9368863048",
#     "emailAddress": "sahidmalik9368@gmail.com",
#     "linkedin": "shahid-malik-765113306",
#     "portfolio": "https://github.com/SHAHID-glitch",
#     "jobTitle": "Data scientist ",
#     "Languages": "Hindi, English ",
#     "Location": "Haridwar (Uttarakhand)"
#   },
#   "skills": {
#     "hardSkills": "Ai, ml, data science, Python, Data Handling ",
#     "softSkills": "Teamwork, problem solving."
#   },
#   "workExperience": [
#     {
#       "jobTitle": "Data scientist ",
#       "companyName": "ONLEI TECHNOLOGIES ",
#       "WorkDuration": "Jan-2025 to feb-2025",
#       "keyAchievements": "Learn to visualise data patterns"
#     },
#     {
#       "jobTitle": "Python Engineer ",
#       "companyName": "Codsoft",
#       "WorkDuration": "Mar-2025 to apr-2025",
#       "keyAchievements": "Learn  python of data science "
#     },
#     {
#       "jobTitle": "Ai analyst ",
#       "companyName": "Open ai",
#       "WorkDuration": "May-2025 to jun-2025",
#       "keyAchievements": "Learning generative ai"
#     }
#   ],
#   "projects": [
#     {
#       "projectTitle": "Resume builder web application ",
#       "toolsTechUsed": "React, tailwind, deepseekR1, weasyprint"
#     },
#     {
#       "projectTitle": "Transformer based translation model",
#       "toolsTechUsed": "Numpy, pandas, matplotlib, scit learn, tensorflow"
#     }
#   ],
#   "education": [
#     {
#       "institutionName": "Haridwar University ",
#       "degreeName": "Bachelor in computer applications ",
#       "graduationYear": "2023 - 2026",
#       "currentSGPA": "7"
#     },
#     {
#       "institutionName": "Vidya Vikassnee intern college",
#       "degreeName": "Primary, secondary",
#       "graduationYear": "2021-2023",
#       "currentSGPA": "7"
#     }
#   ],
#   "certificates": [
#     {
#       "certificateName": "Python ",
#       "courseDuration": "1 month",
#       "providerName": "Hacker rank"
#     },
#     {
#       "certificateName": "Spoken tutorial  ",
#       "courseDuration": "1 month",
#       "providerName": "IIT BOMBAY"
#     },
#     {
#       "certificateName": "The bites and Bytes of computer",
#       "courseDuration": "1 month",
#       "providerName": "Coursera"
#     },
#     {
#       "certificateName": "Technical support fundamental ",
#       "courseDuration": "1 month",
#       "providerName": "Coursera"
#     },
#     {
#       "certificateName": "Power BI data mining",
#       "courseDuration": "1 month",
#       "providerName": "Simplilern"
#     }
#   ],
#   "selectedTemplate": "1"
# }

# GeneratedCode=gtps.T2(JsonData, Desc)
# with open('./GeneratedTemps/T11.html','w') as f:
#    f.write(GeneratedCode)

HTML("./GeneratedTemps/T8.html").write_pdf("./GeneratedTemps/T8.pdf")

# def GenerateResume(JsonData):
#   ExampleDesc="A passionated AI developer with extensive experience in various machine learning models, Primarily i focus on building models from scratch rather than relying heavily on fine-tuning pre-trained models. All my projects, showcasing my skills and contributions, are available on GitHub & Kaggle."
#   GeneratedText=""
#   Address=f"Backend/OnWebCall/T{JsonData['selectedTemplateEx']}.html"
#   match JsonData['selectedTemplateEx']:
#     case "1":
#       GeneratedText=gtps.T1(JsonData)
#     case "2":
#       GeneratedText=gtps.T2(JsonData)
#     case "3":
#       GeneratedText=gtps.T3(JsonData)
#     case "4":
#       GeneratedText=gtps.T4(JsonData)
#     case "5":
#       GeneratedText=gtps.T5(JsonData)
#     case "6":
#       GeneratedText=gtps.T1(JsonData)
#     case "7":
#       GeneratedText=gtps.T7(JsonData)
#     case _:
#       print("Incorrect template number provided!")

#   with open(Address+'.html','w') as f:
#     f.write(GeneratedText)

#   HTML(Address+".html").write_pdf(Address+".pdf")
  
#   return Address