import TemplatesProcessing as tp
import json 

jsonData={}
with open(r'A:\AI\Code\Projects\Resume_Builder\Backend\resume_data.json') as file:
   jsonData=json.load(file)

desc='A passionated AI developer with extensive experience in various machine learning models, Primarily i focus on building models from scratch rather than relying heavily on fine-tuning pre-trained models. All my projects, showcasing my skills and contributions, are available on GitHub & Kaggle.'
processedtemplate=tp.T7(jsonData,desc)

with open(r'A:\AI\Code\Projects\Resume_Builder\Backend\ProcessedTemp7.html','w') as f:
   f.write(processedtemplate)