import GenerateTemplates as gtps
import GenerateText as gtxt
import os
import weasyprint
from weasyprint import HTML

# with open('resume_data.json', 'r') as f:
#    JsonData = json.load(f)

# JsonData={
#   "contactInfo": {
#     "fullName": "Nishant kumar",
#     "phoneNumber": "9217290469",
#     "emailAddress": "nishantsingh.talk@gmail.com",
#     "linkedin": "nishantksingh1",
#     "portfolio": "nishantksingh0.github.io",
#     "jobTitle": "Data Scientist",
#     "Languages": "English, Hindi, French",
#     "Location": "Haridwar (Uttrakhand)"
#   },
#   "skills": {
#     "hardSkills": "TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face, C/C++, Java, JavaScript, React",
#     "softSkills": "TeamWork, strong Problem-Solving skill, Leadership, Critical thinking, Communication"
#   },
#   "workExperience": [
#     {
#       "jobTitle": "Data scientist",
#       "companyName": "Onlei tech",
#       "WorkDuration": "Dec-2024 to Mar-2025",
#       "keyAchievements": "Learn to visualize patterns from data using matplotlib and Built several DL models"
#     },
#     {
#       "jobTitle": "Python engineer",
#       "companyName": "Microsoft",
#       "WorkDuration": "May-2024 to Jul-2024",
#       "keyAchievements": "Learn to use python in NLP tasks to take advantages of LLM"
#     }
#   ],
#   "projects": [
#     {
#       "projectTitle": "Transformer based translation model",
#       "toolsTechUsed": "Tensorflow, Trasformer architecture, NumPy, WMT Translation dataset"
#     },
#     {
#       "projectTitle": "Exam Proctoring system",
#       "toolsTechUsed": "React, Flask, OpenCV, NumPy, Mediapipe, Pillow, WebSocket, ThreadPool"
#     },
#     {
#       "projectTitle": "Persion bounding box detection",
#       "toolsTechUsed": "OpenCV, Json, Tensorflow, Pandas, Matplotlib, NumPy"
#     }
#   ],
#   "education": [
#     {
#       "institutionName": "Haridwar University",
#       "degreeName": "Batchelor in Computer application",
#       "graduationYear": "2023 - 2026",
#       "currentSGPA": "8"
#     },
#     {
#       "institutionName": "Vidya Mandir Sec-5 (Haridwar)",
#       "degreeName": "Primary/Secondary",
#       "graduationYear": "2021 - 2023",
#       "currentSGPA": "8"
#     }
#   ],
#   "certificates": [
#     {
#       "certificateName": "Azure AI Engineer association",
#       "courseDuration": "2 month ",
#       "providerName": "Microsoft"
#     },
#     {
#       "certificateName": "C/C++",
#       "courseDuration": "2 Month",
#       "providerName": "Cad Planet"
#     },
#     {
#       "certificateName": "DataScientist Internship",
#       "courseDuration": "2 Month",
#       "providerName": "Onlei Tech"
#     },
#     {
#       "certificateName": "Intro To responsive AI",
#       "courseDuration": "1 Month",
#       "providerName": "SimpliLearn"
#     },
#     {
#       "certificateName": "Bits & byts of computer",
#       "courseDuration": "1 Month",
#       "providerName": "Coursera"
#     }
#   ],
#   "selectedTemplateEx": "4" 
# }


def GenerateResume(JsonData):
  ExampleDesc="A passionated AI developer with extensive experience in various machine learning models, Primarily i focus on building models from scratch rather than relying heavily on fine-tuning pre-trained models. All my projects, showcasing my skills and contributions, are available on GitHub & Kaggle."
  GeneratedText=""
  Address=f"Backend/OnWebCall/T{JsonData['selectedTemplateEx']}.html"
  match JsonData['selectedTemplateEx']:
    case "1":
      GeneratedText=gtps.T1(JsonData)
    case "2":
      GeneratedText=gtps.T2(JsonData)
    case "3":
      GeneratedText=gtps.T3(JsonData)
    case "4":
      GeneratedText=gtps.T4(JsonData)
    case "5":
      GeneratedText=gtps.T5(JsonData)
    case "6":
      GeneratedText=gtps.T1(JsonData)
    case "7":
      GeneratedText=gtps.T7(JsonData)
    case _:
      print("Incorrect template number provided!")

  with open(Address+'.html','w') as f:
    f.write(GeneratedText)

  HTML(Address+".html").write_pdf(Address+".pdf")
  
  return Address