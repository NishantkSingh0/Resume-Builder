import TemplatesProcessing as tp
from GenerateText import Describe
import json

with open(r'A:\AI\Code\Projects\Resume_Builder\Resume-Builder\Backend\resume_data.json') as f:
    UserData = json.load(f)

Prompt=f"I am a passionated {UserData['contactInfo']['jobTitle']} Expertised in {UserData['skills']['hardSkills']}. make a short and professional resume desciption for me like this"
out=Describe(Prompt)
print ("no output received" if out=="" else out)