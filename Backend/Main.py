import TemplatesProcessing as tp
# from GenerateText import Describe
import json

# with open(r'A:\AI\Code\Projects\Resume_Builder\Resume-Builder\Backend\resume_data.json') as f:
#     UserData = json.load(f)

# Prompt=f"I am a passionated {UserData['contactInfo']['jobTitle']} Expertised in {UserData['skills']['hardSkills']}. make a short and professional resume desciption for me like this"
# out=Describe(Prompt)
# print ("no output received" if out=="" else out)

with open (r'resume_data.json','r') as jsonDt:
   jsonData=json.load(jsonDt)

desc="""A passionated AI developer with extensive experience in various machine learning models, Primarily i focus on building models from scratch rather than relying heavily on fine-tuning pre-trained models. All my projects, showcasing my skills and contributions, are available on GitHub & Kaggle."""
resume=tp.T3(jsonData,desc)

with open ('Generated_resume_T3.html','w') as f:
   f.write(resume)