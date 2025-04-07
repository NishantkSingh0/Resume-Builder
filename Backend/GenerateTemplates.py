import validators
# import numpy as np

# signs=['https://www.freepnglogos.com/uploads/signature-png/nguy-ecnh-nguyen-van-binh-signature-png-5.png','https://www.wisestamp.com/wp-content/uploads/2020/08/Serena-Williams-handwritten-signature.png','https://shop.mikael-b.com/wp-content/uploads/2017/02/signature-mp-1400x741.png','https://www.freepnglogos.com/uploads/signature-png/signature-julia-download-png-18.png','https://th.bing.com/th/id/R.f3f90c581a787a59dfefd42918d86937?rik=TqtbH3SCq2XrLQ&riu=http%3a%2f%2fclipart-library.com%2fimages%2fBcgrnXgdi.png&ehk=Ol4L0GSJ7sdEk%2ftk9J8cbzDMHpJ4bA6nhnYRq6H%2fCbk%3d&risl=&pid=ImgRaw&r=0']

def removespace(text):
   """Remove the spaces from a single sentences. Example: " Hello" -> "Hello" """
   sp=text.split(' ')
   longest=''
   long=0
   for _ in sp:
      if len(_)>long:
         long=len(_)
         longest=_

   return longest

def T1(jsonData,desc):
   Education='\n'.join((f"""
      <div class="SubSec-title TextLight"><b>{edu['graduationYear']}<br>{edu['institutionName']}</b></div>
      {edu['degreeName']} <br>
      GPA: {edu['currentSGPA']}"""
   for edu in jsonData['education']))+'<br><br>'

   skills=jsonData['skills']['hardSkills'].split(',')
   eachColumn=len(skills)//3
   column1=eachColumn
   column2=eachColumn
   column3=eachColumn
   if eachColumn%3==1:
      column1+=1
   elif eachColumn%3==2:
      column1+=1
      column2+=1
   HardSkills=f"""<ul>
                        {' <br> '.join(("<li>"+skills[skl]+"</li>" for skl in range(column1)))}
                     </ul>
                     <ul>
                        {' <br> '.join(("<li>"+skills[skl]+"</li>" for skl in range(column1,column2+column1)))}
                     </ul>
                     <ul>
                        {' <br> '.join(("<li>"+skills[skl]+"</li>" for skl in range(column2+column1,column3+column2+column1)))}
                     </ul>"""
   

   softSkills='\n'.join((f"<li>{removespace(skill)}</li>" for skill in jsonData['skills']['softSkills'].split(',')))
   
   languages='\n'.join((f"<li>{removespace(skill)}: Fluet</li>" for skill in jsonData['contactInfo']['Languages'].split(',')))

   Projects='\n'.join((
   f"""
   <div class="Ritem">
         <li> <div class="item-title TextLight">{proj['projectTitle']} </div>
         <div> {proj['toolsTechUsed']} </li>
   </div>\n""" for proj in jsonData['projects']))

   WorkExp='\n <br>'.join((f"""
   <li> <div class="item-title TextLight">{we['companyName']}<div>{we['WorkDuration']}</div> </div>
   {we['jobTitle']} <br> 
   {we['keyAchievements']}</li>""" for we in jsonData['workExperience']))

   css="""body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #d6cece;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 1250px; 
      }

      .resume {
          margin-top: 100px;
          width: 800px; 
          background: #f1f1f1;
          border-radius: 15px;
          border: 1px solid #ddd;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .header {
          text-align: center;
          border-top: 2px solid #353333;
          padding: 80px 0px 80px 0px; 
          margin: 0px 40px 0px 40px; 
          background-repeat: no-repeat;
          background-size: 250px;
          background-position: center;
          margin-top: 10px;
      }

      .header h1 {
          margin: 0;
          font-size: 40px;
          color: #4e4c4c;
      }

      .header h2 {
          margin: 5px 0 0;
          font-size: 18px;
          color: #555;
      }

      .SUsection {
          padding-top: 10px;
          padding-left: 8px;
      }

      .section,.SUsection {
          margin-bottom: 15px;
          border-bottom: 2px solid #000000;
      }

      .content .left .SubSec-title {
          margin-top: 20px; 
      }

      .rotate-90 {
          transform: rotate(90deg); 
      }

      .Contact div {
          margin-bottom: 4px; 
          margin-left: 8px;
      }

      .Contact {
          width: 33%;
      }

      .Contact,.Usection {
          padding-top: 20px;
      }

      .NoneDecorationBlack a {
          text-decoration: none;
          color: #000000;
      }

      .colorBlue{
          color: #277ca3;
      }

      .TextLight{     /* Used for subheadings of the content & contact fasfonts to make it more classic */
          color: #333333;
      }

      .NoneDecoration a {         /* Used in More Certificates to remove text decoration but add blue color to make it Easy to understand */
          text-decoration: none;
          color: #277ca3;
      }

      .subcont,.SkillSubCon {
          display: flex;
          justify-content: space-between;
      }

      .section-title {
          font-size: 18px;
          color: #5e6163;
          padding: 0 10px 5px 10px; 
          margin-bottom: 10px;
      }

      .section{
        padding-left: 8px;
      }
      
      .LDsection{
        padding-left: 8px;
      }

      .content {
          display: flex;
          justify-content: center;
          border-bottom: 2px solid #353333;
          margin: 0 20px 0 20px; 
      }

      .upperContent {
          display: flex;
          justify-content: center;
          margin: 0 20px 0 20px; 
          border-top: 2px solid #353333;
          border-bottom: 2px solid #353333;
      }

      .upperContent .Usection {
          border-left: 4px solid #5e6163;
          width: 67%;
      }

      .content .left {
          width: 33%;
          height: 100%;
          border-radius: 2px;
      }

      .section-title,.content .right .item-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
      }

      .content .right {
          width: 67%;
          height: 100%;
          border-left: 4px solid rgb(109, 106, 106);
      }

      .Litem {
          margin-bottom: 10px;
          padding-right: 20px;
      }

      .Ritem {
          margin-bottom: 10px;
          padding-left: 10px;
      }

      .item-title {
          font-weight: bold;
      }

      ul {
          padding-left: 20px;
          margin: 5px 0;
      }

      ul li {
          margin-bottom: 5px;
      }"""
   
   updatedTemplate=f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Designed by BRAVERS</title>
    <link rel="icon" href="https://raw.githubusercontent.com/NishantkSingh0/Resume-Builder/main/public/N.png">
    <style>
      {css}
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    
</head>
<body>
   <div class="resume">
         <div class="header">
            <h1>{jsonData['contactInfo']['fullName']}</h1>
            <h2>{jsonData['contactInfo']['jobTitle']}</h2>
         </div>

         <div class="upperContent">
            <div class="Contact"> 
               <div class="section-title"><b>Contact</b> <i class="fas fa-address-card"></i></div><br>
               <div class="Litem"><i class="fa fa-phone rotate-90 TextLight"></i> {jsonData['contactInfo']['phoneNumber']} </div>
               <div class="Litem NoneDecorationBlack"><i class="fas fa-envelope TextLight"></i><a href="mailto:{jsonData['contactInfo']['emailAddress']}"> {jsonData['contactInfo']['emailAddress'].split('@')[0]} </a></div>
               <div class="Litem NoneDecorationBlack"><i class="fab fa-linkedin TextLight"></i><a href={'https://www.linkedin.com/in/'+jsonData['contactInfo']['linkedin']} target="_blank"> {jsonData['contactInfo']['linkedin']}</a></div>
               <div class="Litem NoneDecorationBlack"><i class="fas fa-globe TextLight"></i><a href={jsonData['contactInfo']['portfolio'] if validators.url(jsonData['contactInfo']['portfolio']) else 'https://github.com/'+jsonData['contactInfo']['portfolio']} target="_blank"> {jsonData['contactInfo']['portfolio']} </a></div>
               <div class="Litem "><i class="fa fa-map-marker TextLight"></i> {jsonData['contactInfo']['Location']}</div> <br>
            </div>
            <div class="Usection">
               <div class="section-title"><b>Profile Summary</b></div>
               <p class="Ritem">
                  <div class="Litem">
                     <p class="Ritem">
                        {desc}
                     </p>
                  </div>
               </p>
            </div>
         </div>

         <div class="content">
            <div class="left">
               <div class="SUsection">
                  <div class="section-title"><b>Education </b><i class="fas fa-graduation-cap"></i></div>
                  {Education}
               </div>

               <div class="section">
                  <div class="section-title"><b>Soft Skills </b><i class="fa fa-book"></i></div>
                  <ul>
                     {softSkills}
                     <br>
                  </ul>
               </div>

               <div class="LDsection">
                  <div class="section-title"><b>Languages </b><i class="fa fa-language"></i></div>
                  <ul>
                     {languages}
                  </ul>
               </div>
            </div>

            <div class="right">
               <div class="SUsection">
                  <div class="section-title"><b>Projects</b></div>
                  <ul>
                     {Projects}
                  </ul>
               </div>
               
               <div class="section">
                  <div class="section-title"><b>Work Experience</b></div>
                  <div class="Ritem">
                     <ul>
                        {WorkExp}
                     </ul>
                  </div>
               </div>

               <div class="section">
                  <div class="section-title"><b>Certificates</b></div>
                  <div class="Ritem subcont NoneDecoration">
                     <div>{' <br> '.join((cer['certificateName'] for cer in jsonData['certificates']))}<br><a href="#" target="_blank">More Certificates</a></div>
                     <div>{' <br> '.join(('~' for _ in range(len(jsonData['certificates']))))}<br></div>
                     <div>{' <br> '.join((cer['providerName'] for cer in jsonData['certificates']))}<br></div>
                  </div>
               </div>

               <div class="skills">
                  <div class="section-title"><b>Technical Skills</b></div>
                  <div class="Ritem subcont">
                     {HardSkills}
                  </div>
               </div>
            </div>
         </div>
   </div>
</body>
</html>"""
   return updatedTemplate

def T2(jsonData,desc):

   Education='\n'.join((f"""<div class="education-item">
         <ul>
           <li><h4 class="SpaceBetween">{ed['degreeName']} <span>{ed['graduationYear']}</span></h4></li>
           <p>{ed['institutionName']} || SGPA: {ed['currentSGPA']}</p>
         </ul>  
       </div>""" for ed in jsonData['education']))
   
   Experience='\n'.join((f"""<div class="experience-item">
         <ul>
           <li class="SpaceBetween">{exp['companyName']} {exp['jobTitle']} <span>{exp['WorkDuration']}</span></li>
           {exp['keyAchievements']}
         </ul>
       </div>""" for exp in jsonData['workExperience']))
   
   Projects='\n'.join((f"""<div class="Projects-items ">
           <ul>
             <li><h4 class="fontlight">{proj['projectTitle']}</h4></li>
             <p>{proj['toolsTechUsed']}</p>
           </ul>  
         </div>""" for proj in jsonData['projects']))
   
   skills=jsonData['skills']['hardSkills'].split(',')
   eachColumn=len(skills)//3
   column1=eachColumn
   column2=eachColumn
   column3=eachColumn
   if eachColumn%3==1:
      column1+=1
   elif eachColumn%3==2:
      column1+=1
      column2+=1

   HardSkills=f"""<ul>
                     {' <br> '.join(("<li>"+skills[skl]+"</li>" for skl in range(column1)))}
                  </ul>
                  <ul>
                     {' <br> '.join(("<li>"+skills[skl]+"</li>" for skl in range(column1,column2+column1)))}
                  </ul>
                  <ul>
                     {' <br> '.join(("<li>"+skills[skl]+"</li>" for skl in range(column2+column1,column3+column2+column1)))}
                  </ul>"""

   css="""* {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
   }

   .Name{
     font-family: Verdana;
   }

   body {
     margin-top: 100px;
     font-family: Arial, sans-serif;
     background: #e4e4e4;
     color: #333;
     padding: 20px;
   }

   .resume-container {
     max-width: 800px;
     height: 1150px;
     margin: 0 auto;
     background: #fff;
     border-radius: 8px;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
     padding: 2rem;
   }

   .header {
     margin-bottom: 2rem;
   }

   .header h1 {
     font-size: 2rem;
     letter-spacing: 1px;
     margin-bottom: 0.25rem;
     text-transform: uppercase;
   }

   .header h2 {
     font-size: 1.2rem;
     font-weight: normal;
     color: #666;
     margin-bottom: 0.75rem;
   }

   .header p {
     font-size: 0.9rem;
     color: #666;
   }

   .summary p {
     line-height: 1.5;
     margin: 0 20px 0 20px;
     margin-bottom: 0.5rem;
   }

   .skills ul {
     margin-left: 10px;
     padding-left: 0;
   }

   .skills li {
     margin: 0 20px 0 30px;
     margin-bottom: 0.5rem;
   }

   .experience-item {
     margin:0 20px 10px 0;
   }

   .experience-item h4 {
     font-size: 1rem;
     font-weight: bold;
     margin-bottom: 0.25rem;
   }

   .experience-item span {
     font-size: 0.9rem;
     color: #999;
   }

   .experience-item ul {
     list-style: disc;
     margin-left: 1.2rem;
     margin-top: 0.5rem;
   }

   .experience-item li {
     margin-bottom: 0.5rem;
   }

   .education {
     margin-left: 10px;
   }

   .education-item {
     margin: 0 10px 10px 20px;
   }

   .education-item h4 {
     font-size: 1rem;
     font-weight: bold;
     margin-bottom: 0.25rem;
   }

   .education-item span {
     font-size: 0.9rem;
     color: #999;
   }

   .Projects-items {
     margin-bottom: 10px;
     margin-left: 20px;
   }

   .Projects-items h4 {
     font-size: 1rem;
     font-weight: bold;
     margin-bottom: 0.25rem;
   }

   .Projects-items p {
     font-size: medium;
     font-weight: lighter;
   }

   .Certificats {
     margin: 10px 20px;
   }

   .SpaceBetween {
     display: flex;
     justify-content: space-between;
     align-items: center;
     font-weight: bolder;
     color: #525151;
   }

   .fontlight{
     color: #494848;
   }

   .fontBold {
     font-weight: bolder;
     color: #333;
   }

   .NoneDecoration {
     text-decoration: none;
     color: #2d3499;
   }

   .Heading {
     padding: 13px 20px 10px 20px;
     color: #424141;
     border-radius: 20px;
     margin-bottom: 5px;
     background-color: #c5c3c3;
   }
   """
   updatedTemplate=f"""<!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <title>Designed by BRAVERS</title>
     <link rel="icon" href="https://raw.githubusercontent.com/NishantkSingh0/Resume-Builder/main/public/N.png">
     <style>
      {css}
     </style>
   </head>
   <body>

   <div class="resume-container">
     <div class="header">
       <h1 class="Name">{jsonData['contactInfo']['fullName']}</h1>
       <h2 class="fontBold" style="font-weight: 700;">{jsonData['contactInfo']['jobTitle']}</h2>
       <p style="color: #333;"> <a href="#" class="NoneDecoration">{jsonData['contactInfo']['Location']}</a> | <a class="NoneDecoration" href="mailto:{jsonData['contactInfo']['emailAddress']}" target="_blank">{jsonData['contactInfo']['emailAddress']}</a> | <a class="NoneDecoration" href={'https://www.linkedin.com/in/'+jsonData['contactInfo']['linkedin']} target="_blank">{jsonData['contactInfo']['linkedin']}</a></p>
     </div>

     <h3 class="Heading">Summary</h3>
     <div class="summary">
       <p>{desc}</p>
     </div>

     <h3 class="Heading">Education</h3>
     <div class="education">
         {Education}
     </div>

     <h3 class="Heading">Work Experience</h3>
     <div class="experience">
         {Experience}
     </div>
   
     <h3 class="Heading">Projects<h3>
       <div class="education">
         {Projects}
       </div>

     <h3 class="Heading">Certifications</h3>
     <div class="SpaceBetween Certificats">
         <div>{'<br>'.join((cer['certificateName'] for cer in jsonData['certificates']))}<br><a href="#" class="NoneDecoration" target="_blank">More Certificates</a></div>
         <div>{'<br>'.join(('~' for _ in range(len(jsonData['certificates']))))}<br></div>
         <div>{'<br>'.join((cer['providerName'] for cer in jsonData['certificates']))}<br></div>
     </div>

     <h3 class="Heading">Technical Skills</h3>
     <div class="skills SpaceBetween">
         {HardSkills}
     </div>
   </div>
   </body>
   </html>
   """
   return updatedTemplate


def T3(jsonData,desc):
   
   skills=jsonData['skills']['hardSkills'].split(',')
   eachColumn=len(skills)//3
   column1=eachColumn
   column2=eachColumn
   column3=eachColumn
   if eachColumn%3==1:
      column1+=1
   elif eachColumn%3==2:
      column1+=1
      column2+=1
   HardSkills=f"""<ul>
                        {' <br> '.join(("<li>"+skills[skl]+"</li>" for skl in range(column1)))}
                     </ul>
                     <ul>
                        {' <br> '.join(("<li>"+skills[skl]+"</li>" for skl in range(column1,column2+column1)))}
                     </ul>
                     <ul>
                        {' <br> '.join(("<li>"+skills[skl]+"</li>" for skl in range(column2+column1,column3+column2+column1)))}
                     </ul>"""
   

   Education='\n <br><br> \n'.join((f"""
      <div class="SubSec-title TextLight"><b>{edu['graduationYear']}<br>{edu['institutionName']}</b></div>
      {edu['degreeName']} <br>
      GPA: {edu['currentSGPA']}"""
   for edu in jsonData['education']))

   softSkills='\n'.join((f"<li>{removespace(skill)}</li>" for skill in jsonData['skills']['softSkills'].split(',')))
   
   languages='\n'.join((f"<li>{removespace(skill)}: Fluet</li>" for skill in jsonData['contactInfo']['Languages'].split(',')))

   Projects='\n'.join((
   f"""
   <div class="Ritem">
         <li> <div class="item-title TextLight">{proj['projectTitle']} </div>
         <div> {proj['toolsTechUsed']} </li>
   </div>\n""" for proj in jsonData['projects']))

   WorkExp='\n <br>'.join((f"""
   <li> <div class="item-title TextLight">{we['companyName']}<div>{we['WorkDuration']}</div> </div>
   {we['jobTitle']}<br>
   {we['keyAchievements']}</li>""" for we in jsonData['workExperience']))

   css="""
   body {
      font-family: Arial, sans-serif;
      margin: 100px 0 20px 0;
      padding: 0;
      background-color: #d6cece;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 1131px; /* (W/H) Ratio should be 0.7069 */
   }

   .resume {
      width: 800px;
      background: #ffffff;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      margin-top: 0; /* Ensure no space between header and resume */
   }

   .NoDecorationBlue a{
      text-decoration: None;
      color: #0c6291;
   }

   .TextLight{
      color: #424242;;
      font-weight: 500;
   }

   .IconLight{
      color: #4e4e4e;
   }

   .header {
      text-align: center;
      width: 840px;
      background: #b6dbf0;
      padding: 90px 0 90px 0; 
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      margin-bottom: 0; /* Remove bottom margin */
   }

   .header h1 {
      margin: 0;
      font-size: 40px;
      color: #333;
   }

   .header h2 {
      margin: 5px 0 0;
      font-size: 18px;
      color: #555;
   }

   .section, .SUsection {
      margin-bottom: 20px;
   }

   .section-title {
      font-size: 18px;
      color: #0073b1;
      margin-bottom: 10px;
      border-bottom: 1px solid #96a75a;
      padding-bottom: 5px;
   }

   .content {
      display: flex;
      justify-content: center;
   }

   .content .left {
      width: 30%;
      padding-right: 10px;
      border-right: 4px solid rgb(109, 106, 106);
      border-radius: 2px;
   }

   .content .right {
      width: 60%;
      margin-left: 10px;
   }

   .content .left .section-title,.content .right .item-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .content .right .item-title {
      font-weight: bold;
   }

   .Contact div {
      margin-bottom: 5px;
   }

   .content .Contact div a {
      text-decoration: none;
      color: #000000;
   }

   .subcont,.SkillSubCon {
      display: flex;
      justify-content: space-between;
   }

   .item {
      margin-bottom: 10px;
   }

   ul {
      padding-left: 20px;
      margin: 5px 0;
   }

   ul li {
      margin-bottom: 5px;
   }

   .rotate-90 { 
      transform: rotate(90deg); /* Rotates the icon 90 degrees */ 
   }
   """

   updatedTemplate=f"""
   <!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Designed by BRAVERS</title>    
      <link rel="icon" href="https://raw.githubusercontent.com/NishantkSingh0/Resume-Builder/main/public/N.png">

      <link rel="icon" type="image/png" href="./Img/N.png" />
      <style>
        {css}
      </style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

   </head>
   <body>
      <div class="header">
         <h1>{jsonData['contactInfo']['fullName']}</h1>
         <h2>{jsonData['contactInfo']['jobTitle']}</h2>
      </div>
      <div class="resume">
            <div class="content">
               <div class="left">
                  <div class="Contact"> 
                     <div class="section-title"><b>Contact</b> <i class="fas fa-address-card"></i></div><br>
                     <div class="Litem"><i class="fa fa-phone rotate-90 IconLight"></i> {jsonData['contactInfo']['phoneNumber']} </div>
                     <div class="Litem"><i class="fas fa-envelope IconLight"></i><a href="mailto:{jsonData['contactInfo']['emailAddress']}"> {jsonData['contactInfo']['emailAddress'].split('@')[0]} </a></div>
                     <div class="Litem"><i class="fab fa-linkedin IconLight"></i><a href={'https://www.linkedin.com/in/'+jsonData['contactInfo']['linkedin']} target="_blank"> {jsonData['contactInfo']['linkedin']}</a></div>
                     <div class="Litem"><i class="fas fa-globe IconLight"></i><a href={jsonData['contactInfo']['portfolio'] if validators.url(jsonData['contactInfo']['portfolio']) else 'https://github.com/'+jsonData['contactInfo']['portfolio']} target="_blank"> {jsonData['contactInfo']['portfolio']} </a></div>
                     <div class="Litem"><i class="fa fa-map-marker IconLight"></i> {jsonData['contactInfo']['Location']}</div> <br>
                  </div>

                  <div class="section">
                     <div class="section-title"><b>Education </b><i class="fas fa-graduation-cap"></i></div><br>
                     <div class="Litem">
                        {Education}
                        <br>
                     </div>
                  </div>

                  <div class="section">
                     <div class="section-title"><b>Soft Skills </b><i class="fa fa-book"></i></div><br>
                     <ul>
                        {softSkills}
                     </ul>
                  </div>

                  <div class="section">
                     <div class="section-title"><b>Languages </b><i class="fa fa-language"></i></div><br>
                     <ul>
                        {languages}
                     </ul>
                  </div>
               </div>

               <div class="right">
                  <div class="section">
                     <div class="section-title"><b>Profile Summary</b></div>
                     <p>
                        {desc}
                     </p>
                  </div>

                  <div class="SUsection">
                     <div class="section-title"><b>Projects</b></div>
                     <ul>
                        {Projects}
                     </ul>
                  </div>

                  <div class="section">
                     <div class="section-title"><b>Work Experience</b></div>
                     <div class="Ritem">
                        <ul>
                           {WorkExp}
                        </ul>
                     </div>
                  </div>

                  <div class="section">
                     <div class="section-title"><b>Certificates</b></div>
                     <div class="Ritem subcont NoDecorationBlue">
                        <div>{'<br>'.join((cer['certificateName'] for cer in jsonData['certificates']))}<br><a href="#" target="_blank">More Certificates</a></div>
                        <div>{'<br>'.join(('~' for _ in range(len(jsonData['certificates']))))}<br></div>
                        <div>{'<br>'.join((cer['providerName'] for cer in jsonData['certificates']))}<br></div>
                     </div>
                  </div>

                  <div class="skills">
                     <div class="section-title"><b>Technical Skills</b></div>
                     <div class="Ritem subcont">
                        {HardSkills}
                     </div>
                  </div>
               </div>
            </div>
      </div>
   </body>
   </html>
   """
   return updatedTemplate

def T4(jsonData,desc):

   skills=jsonData['skills']['hardSkills'].split(',')
   eachColumn=len(skills)//3
   column1=eachColumn
   column2=eachColumn
   column3=eachColumn
   if eachColumn%3==1:
      column1+=1
   elif eachColumn%3==2:
      column1+=1
      column2+=1
   HardSkills=f"""<ul>
                     {' <br> '.join(("<li>"+skills[skl]+"</li>" for skl in range(column1)))}
                  </ul>
                  <ul>
                     {' <br> '.join(("<li>"+skills[skl]+"</li>" for skl in range(column1,column2+column1)))}
                  </ul>
                  <ul>
                     {' <br> '.join(("<li>"+skills[skl]+"</li>" for skl in range(column2+column1,column3+column2+column1)))}
                  </ul>"""
   

   Education='\n <br> \n<br> \n'.join((f"""                     
      <div class="SubSec-title"><b>{edu['graduationYear']}<br>{edu['institutionName']}</b></div>
      {edu['degreeName']} <br>
      SGPA: {edu['currentSGPA']}"""
      for edu in jsonData['education']))
   
   softSkills='\n'.join((f"<li>{removespace(skill)}</li>" for skill in jsonData['skills']['softSkills'].split(',')))

   languages='\n'.join((f"<li>{removespace(skill)}: Fluet</li>" for skill in jsonData['contactInfo']['Languages'].split(',')))

   Projects='\n'.join((
   f"""
   <div class="Ritem">
         <li> <div class="item-title textGray">{proj['projectTitle']} </div>
         <div> {proj['toolsTechUsed']} </li>
   </div>\n""" for proj in jsonData['projects']))

   WorkExp='\n <br>'.join((f"""
   <li> <div class="item-title textGray">{we['companyName']}<div>{we['WorkDuration']}</div> </div>
   {we['jobTitle']}<br>
   {we['keyAchievements']}</li>""" for we in jsonData['workExperience']))

   
   css="""
      body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #d6cece;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1131px; /* (W/H) Ratio should be 0.7069 */
   }

   .resume {
      width: 800px; /* (W/H) Ratio should be 0.7069 */
      background: #ffffff;
      border: 1px solid #ddd;
      border-radius: 15px;
      margin-top: 100px;
      padding: 0 30px 0 0;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   }

   .Underline{
      width: 100px;
      border:2px solid black;
      border-radius: 20px;
   }

   .NoneDecoration a{
      text-decoration: none;
      color:#0363b1;
   }

   .header {
      display: flex; 
      align-items: center;
   }

   .header .left {
      width: 35%;
      display: flex;
      justify-content: center;
      padding: 10px 13px 10px 13px;
      background-color: #0363b1;
      border-top-left-radius: 15px;
      border-right: 4px solid #0363b1;
   }

   .left img{
      width: 200px;
      height: 200px;
      background-color: #4c4fda;
      border-radius: 50%;
      object-fit: cover;
   }

   .header .right {
      width: 65%;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin-right: 40px;
   }

   .header .right .head {
      padding-left: 40px;
   }

   .textGray{
      color: #4e4e53;
   }

   .right h1 {
      font-size: 40px;
      margin-bottom: 5px;
   }

   .right h2 {
      font-size: 16px;
      color: #4d4b4b;
   }

   .section-title {
      font-size: 18px;
      color: #3e3e3f;
      margin-bottom: 10px;
      border-bottom: 1px solid #96a75a;
      padding-bottom: 5px;
   }

   .SkillsSection-title {
      font-size: 18px;
      color: #3e3e3f;
      border-bottom: 1px solid #96a75a;
   }

   .Lsection-title {
      font-size: 18px;
      color: #f5f5f5;
      margin-bottom: 10px;
      border-bottom: 1px solid #d4d4d2;
      padding-bottom: 5px;
   }

   .content {
      display: flex;
      justify-content: center;
   }

   .content .left {
      width: 35%;
      padding-right: 10px;
      background-color: #0363b1;
      border-bottom-left-radius: 15px;
      border-right: 4px solid #0363b1;
   }

   .content .right {
      width: 65%;
      margin-left: 10px;
   }

   .Lsection,.Contact {
      margin-bottom: 20px;
      padding-left: 20px;
      color: #e1ebf3;
   }

   .Contact div {
      margin-bottom: 5px;
   }

   .content .Contact div a {
      text-decoration: none;
      color: #e1ebf3;
   }

   .subcont,.SkillSubCon {
       display: flex;
       justify-content: space-between;
   }  

   .section,.SUsection {
      margin-bottom: 20px;
      color: #141414;
   }

   .item {
      margin-bottom: 10px;
   }

   .item-title {
      font-weight: bold;
   }

   .content .right .item-title,
   .content .left .section-title,
   .Lsection-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   ul {
      padding-left: 20px;
      margin: 5px 0;
   }

   ul li {
      margin-bottom: 5px;
   }

   .rotate-90 {
      transform: rotate(90deg);
   }

   .content .right .section .Cont {
      border-left: 2px solid #53677a;
      margin-left: 5px;
   }

   .content .right .section .Cont .item {
      margin-left: 10px;
   }
   """
   UpdatedTemplate=f"""
   <!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Designed by BRAVERS</title>    
      <link rel="icon" href="https://raw.githubusercontent.com/NishantkSingh0/Resume-Builder/main/public/N.png">
      <link rel="icon" type="image/png" href="./Img/N.png" />
      <style>
        {css}
      </style>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

   </head>
   <body>
      <div class="resume">
            <div class="header">
               <div class="left">
                  <img src="Profile.jpg" alt="Profile">
               </div>

               <div class="right">
                  <div class="head">
                     <h1>{jsonData['contactInfo']['fullName']}</h1>
                     <h2>{jsonData['contactInfo']['jobTitle']}</h2>
                     <div class="Underline"></div>
                  </div>
               </div>
            </div>

            <div class="content">
               <div class="left">
                  <div class="Contact"> 
                     <div class="Lsection-title"><b>Contact</b> <i class="fas fa-address-card"></i></div> <br>
                     <div class="Litem"><i class="fa fa-phone rotate-90"></i> {jsonData['contactInfo']['phoneNumber']} </div>
                     <div class="Litem"><i class="fas fa-envelope"></i><a href="mailto:{jsonData['contactInfo']['emailAddress']}"> {jsonData['contactInfo']['emailAddress'].split('@')[0]} </a></div>
                     <div class="Litem"><i class="fab fa-linkedin"></i><a href={'https://www.linkedin.com/in/'+jsonData['contactInfo']['linkedin']} target="_blank"> {jsonData['contactInfo']['linkedin']}</a></div>
                     <div class="Litem"><i class="fas fa-globe"></i><a href={jsonData['contactInfo']['portfolio'] if validators.url(jsonData['contactInfo']['portfolio']) else 'https://github.com/'+jsonData['contactInfo']['portfolio']} target="_blank"> {jsonData['contactInfo']['portfolio']} </a></div>
                     <div class="Litem"><i class="fa fa-map-marker"></i> {jsonData['contactInfo']['Location']}</div> 
                  </div>

                  <div class="Lsection">
                     <div class="Lsection-title"><b>Education </b><i class="fas fa-graduation-cap"></i></div><br>
                     <div class="Litem">
                        {Education}
                        <br>
                     </div>
                  </div>

                  <div class="Lsection">
                     <div class="Lsection-title"><b>Soft Skills </b><i class="fa fa-book"></i></div><br>
                     <ul>
                        {softSkills}
                     </ul>
                  </div>

                  <div class="Lsection">
                     <div class="Lsection-title"><b>Languages </b><i class="fa fa-language"></i></div><br>
                     <ul>
                        {languages}
                     </ul>
                  </div>
               </div>

               <div class="right">
                  <div class="section">
                     <div class="section-title"><b>Profile Summary</b></div>
                     <p>
                        A passionated AI developer with extensive experience in various machine learning models, Primarily i focus on building models from scratch rather than relying heavily on fine-tuning pre-trained models. All my projects, showcasing my skills and contributions, are available on GitHub & Kaggle.
                     </p>
                  </div>
                  <div class="SUsection">
                     <div class="section-title"><b>Projects</b></div>
                     <ul>
                        {Projects}
                     </ul>
                  </div>
                  <br>
                  <div class="section">
                     <div class="section-title"><b>Work Experience</b></div>
                     <div class="Ritem">
                        <ul>
                           {WorkExp}
                        </ul>
                     </div>
                  </div>

                  <div class="section">
                     <div class="section-title"><b>Certificates</b></div>
                     <div class="Ritem subcont NoneDecoration">
                        <div>{'<br>'.join((cer['certificateName'] for cer in jsonData['certificates']))}<br><a href="#" target="_blank">More Certificates</a></div>
                        <div>{'<br>'.join(('~' for _ in range(len(jsonData['certificates']))))}<br></div>
                        <div>{'<br>'.join((cer['providerName'] for cer in jsonData['certificates']))}<br></div>
                     </div>
                  </div>

                  <div class="skills">
                     <div class="SkillsSection-title"><b>Technical Skills</b></div><br>
                     <div class="Ritem subcont">
                        {HardSkills}
                     </div>
                  </div>
               </div>
            </div>
      </div>
   </body>
   </html>
   """
   return UpdatedTemplate

def T5(jsonData,desc):

   Experience='\n'.join((f"""<div class="experience-item">
         <ul class="circle-list">
           <li><h4 class="spacebetween">{exp['companyName']} | {exp['jobTitle']} <span>{exp['WorkDuration']}</span></h4></li>
           {exp['keyAchievements']}
         </ul>
       </div>""" for exp in jsonData['workExperience']))
   
   Education='\n'.join((f"""<div class="education-item">
         <ul class="square-list">
           <li><h4 class="spacebetween">{edu['degreeName']}<span>{edu['graduationYear']}</span></h4></li>
           <p>{edu['institutionName']} | SGPA: {edu['currentSGPA']}</p>
         </ul>
       </div>""" for edu in jsonData['education']))
   
   Projects='\n'.join((f"""<div class="project-item">
         <ul>
           <li><h4 class="spacebetween">{proj['projectTitle']}</h4></li>
           <p>{proj['toolsTechUsed']}</p>
         </ul>
       </div>""" for proj in jsonData['projects']))

   css="""* {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
   }

   body {
     font-family: Arial, sans-serif;
     background: #c9c9c9;
     margin-top: 80px;
     color: #333;
     padding: 20px;
   }

   .resume-container {
     max-width: 800px;
     max-height: 1200px;
     margin: 0 auto;
     background: #fff;
     border-radius: 15px;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
     padding: 2rem;
   }

   .header {
     text-align: center;
     margin-bottom: 1.5rem;
   }

   .header h1 {
     font-size: 2rem;
     letter-spacing: 1px;
     margin-bottom: 0.25rem;
     color: #7d3c98; 
     text-transform: uppercase;
   }

   .header h2 {
     font-size: 1.2rem;
     font-weight: normal;
     color: #555;
     margin-bottom: 0.75rem;
   }

   .header p {
     font-size: 0.9rem;
     color: #666;
   }

   h3 {
     font-size: 1rem;
     text-transform: uppercase;
     color: #7d3c98;
     margin-top: 1.5rem;
     margin-bottom: 0.75rem;
     letter-spacing: 1px;
   }

   .spacebetween {
     display: flex;
     justify-content: space-between;
   }

   .summary, .projects, .experience, .education-section, .Certifications, .skills {
     border-top: 2px solid #333;
     margin-bottom: 25px;
   }

   .summary p {
     line-height: 1.5;
     margin-bottom: 0.5rem;
     margin-left: 10px;
     margin-right: 10px;
   }

   .project-item {
     margin: 0 25px 10px 25px;
   }

   .experience-item {
     margin-bottom: 1rem;
     margin-right: 20px;
   }

   .experience-item h4 {
     font-size: 1rem;
     margin-bottom: 0.25rem;
     font-weight: bold;
   }

   .experience-item span {
     font-size: 0.9rem;
     color: #757474;
   }

   .experience-item ul {
     list-style: circle;
     margin-left: 1.2rem;
     margin-top: 0.5rem;
   }

   .experience-item li {
     margin-bottom: 0.5rem;
   }

   .education-item {
     margin: 0 20px 10px 20px;
   }

   .education-item h4 {
     font-size: 1rem;
     margin-bottom: 0.25rem;
     font-weight: bold;
   }

   .education-item span {
     font-size: 0.9rem;
     color: #757474;
   }

   .Certificate-item {
     margin: 0 10px 0 10px;
   }

   .skills-item {
     margin-bottom: 5px;
     margin-left: 10px;
   }

   .DecorationNone {
     text-decoration: none;
     color: #1d4780;
   }

   .square-list {
     list-style-type: square; 
   }"""

   UpdatedTemplate=f"""<!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <title>Designed by BRAVERS</title>
     <link rel="icon" href="https://raw.githubusercontent.com/NishantkSingh0/Resume-Builder/main/public/N.png">

     <style>
        {css}
     </style>
   </head>
   <body>

   <div class="resume-container">
     <div class="header">
       <h1>{jsonData['contactInfo']['fullName']}</h1><br>
       <p><a class="DecorationNone" href={'https://'+jsonData['contactInfo']['portfolio'] if '.' in jsonData['contactInfo']['portfolio'] else 'https://github.com/'+jsonData['contactInfo']['portfolio']} target="_blank">{jsonData['contactInfo']['portfolio']}</a> | <a class="DecorationNone" href="#"> 9917760469</a> | <a href={'mailto:'+jsonData['contactInfo']['emailAddress']} class="DecorationNone" target="_blank">{jsonData['contactInfo']['emailAddress']}</a> <br> <div style="margin-top: 6px;">{jsonData['contactInfo']['Location']}</div> </p>
     </div>

     <div class="summary">
       <h3>Summary</h3>
       <p>{desc}</p>
     </div>

     <div class="experience">
       <h3>Work Experience</h3>
         {Experience}
     </div>

     <div class="education-section">
       <h3>Education</h3>
         {Education}
     </div>

     <div class="projects">
       <h3>Projects</h3>
         {Projects}
     </div>

     <div class="Certifications">
       <h3>Certifications</h3>
       <div class="spacebetween Certificate-item">
         <div>{'<br>'.join((cer['certificateName'] for cer in jsonData['certificates']))}<br><a class="DecorationNone" href="#" target="_blank">More Certificates</a></div>
         <div>{'<br>'.join(('~' for _ in range(len(jsonData['certificates']))))}<br></div>
         <div>{'<br>'.join((cer['providerName'] for cer in jsonData['certificates']))}<br></div>
       </div>
     </div>

     <div class="skills">
       <h3>Skills</h3>
       <p class="skills-item"><strong style="color: rgb(75, 77, 77);">Soft Skills: </strong>{jsonData['skills']['softSkills']}</p>
       <p class="skills-item"><strong>Tech Skills: </strong style="color: rgb(75, 77, 77);">{jsonData['skills']['hardSkills']}</p>
     </div>
   </div>
   </body>
   </html>
   """
   return UpdatedTemplate

def T7(jsonData):

   Education='\n'.join(f"""<div class="subtitle">{ed['degreeName']}</div>
                {ed['institutionName']} | {ed['graduationYear']} | SGPA: {ed['currentSGPA']}""" for ed in jsonData['education'])
   
   Projects='\n'.join((
   f"""
   <div class="Ritem">
         <li> <div class="item-title">{proj['projectTitle']} </div>
         <div> {proj['toolsTechUsed']} </li>
   </div>\n""" for proj in jsonData['projects']))

   WorkExp='\n'.join(f"""<div class="internship TextGray SpaceBetween">
                   <div class="left"><b>{exp['companyName']}</b></div>
                   <div class="Right"><b>{exp['WorkDuration']}</b></div>
                </div>
                <ul>
                      <li>{exp['keyAchievements']}</li>
                </ul>""" for exp in jsonData['workExperience'])

   css="""
   @page {
     size: 1000px 1340px; 
     margin: 0;
   }
   
   body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #d6cece;
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;         /* (W/H) Ratio should be 0.7069 */
   }
   .resume {
      width: 900px;           /* (W/H) Ratio should be 0.7069 */
      /* height: 1131px; */
      background: #ffffff;
      border: 1px solid #ddd;
      border-radius: 15px;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   }

   .title{
      font-size: 24px;
      font-weight: bold;
      color: #474646;
      margin-bottom: 10px;
      border-bottom: 1px solid #535351;
      padding-bottom: 5px;
   }

   .contacts h1{
      margin: 0%;
   }

   .NoneDecoration{
      text-decoration: none;
      color: rgb(1, 82, 187);
      padding-left: 20px;
   }

   .TextGray{
      color:#363636;
      font-weight: bold;
   }

   .subtitle,.item-title{
      font-size: 18px;
      font-weight: bold;
      color: #474646;
      margin-bottom: 5px;
      margin-top: 15px;
   }

   .Conts{
      margin-top: 25px;
   }

   .subcont{
      display: flex;
      /* justify-content: space-between; */
   }

   .subcont .mid{
      padding-right: 40px;
   }

   .contacts a{
      text-decoration: none;
      color: black;
   }

   .signature{
      font-family: 'Dancing Script', cursive;
      font-size: 18px;
      font-weight:500;
      display: flex;
      justify-content: end;
      margin-right: 50px;
   }

   .SpaceBetween{
      display: flex;
      margin-bottom: 2px;
      justify-content: space-between;
      padding: 0 20px 0 20px;
   }
    """
   UpdatedTemplate=f"""
    <DOCTYPE html>
    <html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <style>
           {css}
         </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
       <title>Designed by BRAVERS</title>
       <link rel="icon" href="https://raw.githubusercontent.com/NishantkSingh0/Resume-Builder/main/public/N.png">

    </head>
    <body>
       <div class="resume">
          <div class="contacts">
             <h1>{jsonData['contactInfo']['fullName']}</h1>
             <p>{jsonData['contactInfo']['Location']} <br>{jsonData['contactInfo']['phoneNumber']} | <a href="mailto:{jsonData['contactInfo']['emailAddress']}" target="_blank">{jsonData['contactInfo']['emailAddress']}</a> | <a href={jsonData['contactInfo']['portfolio'] if validators.url(jsonData['contactInfo']['portfolio']) else 'https://github.com/'+jsonData['contactInfo']['portfolio']} target="_blank"> {jsonData['contactInfo']['portfolio']} <a></p>
          </div>
          <div class="Conts">
             <div class="title">Objectives:</div>
             {jsonData['Description']['UserDescription']}
          </div>
          <div class="Conts">
             <div class="title">Education:</div>
                {Education}
          </div>
          <div class="Conts">
             <div class="title">Technical skills:</div>
             <div class="subcont SpaceBetween">
                <div class="left">Hard Skills <br>Soft Skills </div>
                <div class="mid">~ <br>~ <br></div>
                <div class="right">{jsonData['skills']['hardSkills']}<br>{jsonData['skills']['softSkills']} <br></div>
             </div>
          </div>
          <div class="Conts">
             <div class="title">Academic Projects:</div>
             <ul>
                {Projects}
             </ul>
          </div>
          <div class="Conts">
             <div class="title">Work Experience:</div>
             {WorkExp}
          </div>
          <div class="Conts">
             <div class="title">Certifications:</div>
             <div class="subcont SpaceBetween">
                <div class="left">{'<br>'.join((cer['certificateName'] for cer in jsonData['certificates']))}</div>
                <div class="mid">{'<br>'.join(('~' for _ in range(len(jsonData['certificates']))))}<br></div>
                <div class="right">{'<br>'.join((cer['providerName'] for cer in jsonData['certificates']))}<br></div>
             </div>
             <a class="NoneDecoration" href="#" target="_blank">More Certificates</a>
          </div>
          <div class="Conts">
             <div class="title">Declaration:</div>
             I hereby declare that the above information is true to the best of my knowledge.
          </div>
          <p class="signature">{jsonData['contactInfo']['fullName']}</p>
       </div>   
    </body>
    </html>
    """
   return UpdatedTemplate