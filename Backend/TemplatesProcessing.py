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
   for edu in jsonData['education']))

   softSkills='\n'.join((f"<li>{removespace(skill)}</li>" for skill in jsonData['skills']['softSkills'].split(',')))
   
   languages='\n'.join((f"<li>{removespace(skill)}: Fluet</li>" for skill in jsonData['contactInfo']['Languages'].split(',')))

   Projects='\n'.join((
   f"""
   <div class="Ritem">
         <li> <div class="item-title TextLight">{proj['projectTitle']} </div>
         <div> {proj['toolsTechUsed']} </li>
   </div>\n""" for proj in jsonData['projects']))

   WorkExp='\n'.join((f"""
   <li> <div class="item-title TextLight">{we['companyNameDuration'].split(',')[0]}<div>2020 - PRES</div> </div>
   {we['jobTitle']}<br>
   {we['keyAchievements']}</li>""" for we in jsonData['workExperience']))

   css="""body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #d6cece;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 1131px; 
      }

      .resume {
          width: 800px; 
          background: #e0dfdf;
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
          background-image: url('./Img/Sig.png');
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

      .content {
          display: flex;
          justify-content: center;
          border-bottom: 2px solid #353333;
          margin: 0 40px; 
      }

      .upperContent {
          display: flex;
          justify-content: center;
          margin: 0 40px; 
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
    <link rel="icon" type="image/png" href="bravers.png" />          <!-- Address you fevicon here -->
    <style>
      {css}
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    
</head>
<body>
   <div class="resume">
         <div class="header">
            <h1>{jsonData['contactInfo']['fullName']}</h1>
            <h2>Data Scientist & DL Enthusiast</h2>
         </div>

         <div class="upperContent">
            <div class="Contact"> 
               <div class="section-title"><b>Contact</b> <i class="fas fa-address-card"></i></div>
               <div class="Litem"><i class="fa fa-phone rotate-90 TextLight"></i> {jsonData['contactInfo']['phoneNumber']} </div>
               <div class="Litem NoneDecorationBlack"><i class="fas fa-envelope TextLight"></i><a href="mailto:"+{jsonData['contactInfo']['emailAddress']}> {jsonData['contactInfo']['emailAddress'].split('@')[0]} </a></div>
               <div class="Litem NoneDecorationBlack"><i class="fab fa-linkedin TextLight"></i><a href={jsonData['contactInfo']['linkedinUrl'] if 'https://' in jsonData['contactInfo']['linkedinUrl'] else 'https://'+jsonData['contactInfo']['linkedinUrl']} target="_blank"> {jsonData['contactInfo']['linkedinUrl'].split('/')[2]}</a></div>
               <div class="Litem NoneDecorationBlack"><i class="fas fa-globe TextLight"></i><a href={jsonData['contactInfo']['portfolioUrl'] if 'https://' in jsonData['contactInfo']['portfolioUrl'] else 'https://'+jsonData['contactInfo']['portfolioUrl'] } target="_blank"> Portfolio </a></div>
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
                     <div>{'<br>'.join((cer['certificateName'] for cer in jsonData['certificates']))}<br><a href="#" target="_blank">More Certificates</a></div>
                     <div>{'<br>'.join(('~' for _ in range(len(jsonData['certificates']))))}<br></div>
                     <div>{'<br>'.join((cer['providerName'] for cer in jsonData['certificates']))}<br></div>
                  </div>
               </div>

               <div class="skills">
                  <div class="section-title"><b>Technical Skills</b></div>
                  <div class="Ritem subcont">
                     <ul>
                        <li>1 skills</li>
                        <li>2 skills</li>
                        <li>3 skills</li>
                     </ul>
                     <ul>
                        <li>4 skills</li>
                        <li>5 skills</li>
                        <li>6 skills</li>
                     </ul>
                     <ul>
                        <li>7 skills</li>
                        <li>8 skills</li>
                        <li>9 skills</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
   </div>
</body>
</html>"""
   return updatedTemplate

def T3(jsonData,desc):

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

   WorkExp='\n'.join((f"""
   <li> <div class="item-title TextLight">{we['companyNameDuration'].split(',')[0]}<div>2020 - PRES</div> </div>
   {we['jobTitle']}<br>
   {we['keyAchievements']}</li>""" for we in jsonData['workExperience']))

   css="""
   body {
      font-family: Arial, sans-serif;
      margin: 20px 0 20px 0;
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
      color: #272727;
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
      <link rel="icon" type="image/png" href="./Img/N.png" />
      <style>
        {css}
      </style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

   </head>
   <body>
      <div class="header">
         <h1>{jsonData['contactInfo']['fullName']}</h1>
         <h2>Data Scientist & DL Enthusiast</h2>
      </div>
      <div class="resume">
            <div class="content">
               <div class="left">
                  <div class="Contact"> 
                     <div class="section-title"><b>Contact</b> <i class="fas fa-address-card"></i></div>
                     <div class="Litem"><i class="fa fa-phone rotate-90 IconLight"></i> {jsonData['contactInfo']['phoneNumber']} </div>
                     <div class="Litem"><i class="fas fa-envelope IconLight"></i><a href="mailto:"+{jsonData['contactInfo']['emailAddress']}> {jsonData['contactInfo']['emailAddress'].split('@')[0]} </a></div>
                     <div class="Litem"><i class="fab fa-linkedin IconLight"></i><a href={jsonData['contactInfo']['linkedinUrl'] if 'https://' in jsonData['contactInfo']['linkedinUrl'] else 'https://'+jsonData['contactInfo']['linkedinUrl']} target="_blank"> {jsonData['contactInfo']['linkedinUrl'].split('/')[2]}</a></div>
                     <div class="Litem"><i class="fas fa-globe IconLight"></i><a href={jsonData['contactInfo']['portfolioUrl'] if 'https://' in jsonData['contactInfo']['portfolioUrl'] else 'https://'+jsonData['contactInfo']['portfolioUrl'] } target="_blank"> Portfolio </a></div>
                     <div class="Litem"><i class="fa fa-map-marker IconLight"></i> {jsonData['contactInfo']['Location']}</div> <br>
                  </div>

                  <div class="section">
                     <div class="section-title"><b>Education </b><i class="fas fa-graduation-cap"></i></div>
                     <div class="Litem">
                        {Education}
                     </div>
                  </div>

                  <div class="section">
                     <div class="section-title"><b>Soft Skills </b><i class="fa fa-book"></i></div>
                     <ul>
                        {softSkills}
                     </ul>
                  </div>

                  <div class="section">
                     <div class="section-title"><b>Languages </b><i class="fa fa-language"></i></div>
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
                        <ul>
                           <li>1 skills</li>
                           <li>2 skills</li>
                           <li>3 skills</li>
                        </ul>
                        <ul>
                           <li>4 skills</li>
                           <li>5 skills</li>
                           <li>6 skills</li>
                        </ul>
                        <ul>
                           <li>7 skills</li>
                           <li>8 skills</li>
                           <li>9 skills</li>
                        </ul>
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

   Education='\n <br><br> \n'.join((f"""
      <div class="SubSec-title"><b>{edu['graduationYear']}<br>{edu['institutionName']}</b></div>
      {edu['degreeName']} <br>
      GPA: {edu['currentSGPA']}"""
      for edu in jsonData['education']))
   
   softSkills='\n'.join((f"<li>{removespace(skill)}</li>" for skill in jsonData['skills']['softSkills'].split(',')))

   languages='\n'.join((f"<li>{removespace(skill)}: Fluet</li>" for skill in jsonData['contactInfo']['Languages'].split(',')))

   Projects='\n'.join((
   f"""
   <div class="Ritem">
         <li> <div class="item-title">{proj['projectTitle']} </div>
         <div> {proj['toolsTechUsed']} </li>
   </div>\n""" for proj in jsonData['projects']))

   WorkExp='\n'.join((f"""
   <li> <div class="item-title">{we['companyNameDuration'].split(',')[0]}<div>2020 - PRES</div> </div>
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
      padding: 0 30px 0 0;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   }

   .Underline{
      width: 65px;
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
                  <img src="./Img/Profile.png" alt="Profile">
               </div>

               <div class="right">
                  <div class="head">
                     <h1>{jsonData['contactInfo']['fullName']}</h1>
                     <h2>Data Scientist & DL Enthusiast</h2>
                     <div class="Underline"></div>
                  </div>
               </div>
            </div>

            <div class="content">
               <div class="left">
                  <div class="Contact"> 
                     <div class="Lsection-title"><b>Contact</b> <i class="fas fa-address-card"></i></div>
                     <div class="Litem"><i class="fa fa-phone rotate-90"></i> {jsonData['contactInfo']['phoneNumber']} </div>
                     <div class="Litem"><i class="fas fa-envelope"></i><a href="mailto:"+{jsonData['contactInfo']['emailAddress']}> {jsonData['contactInfo']['emailAddress'].split('@')[0]} </a></div>
                     <div class="Litem"><i class="fab fa-linkedin"></i><a href={jsonData['contactInfo']['linkedinUrl'] if 'https://' in jsonData['contactInfo']['linkedinUrl'] else 'https://'+jsonData['contactInfo']['linkedinUrl']} target="_blank"> {jsonData['contactInfo']['linkedinUrl'].split('/')[2]}</a></div>
                     <div class="Litem"><i class="fas fa-globe"></i><a href={jsonData['contactInfo']['portfolioUrl'] if 'https://' in jsonData['contactInfo']['portfolioUrl'] else 'https://'+jsonData['contactInfo']['portfolioUrl'] } target="_blank"> Portfolio </a></div>
                     <div class="Litem"><i class="fa fa-map-marker"></i> {jsonData['contactInfo']['Location']}</div> <br>
                  </div>

                  <div class="Lsection">
                     <div class="Lsection-title"><b>Education </b><i class="fas fa-graduation-cap"></i></div>
                     <div class="Litem">
                        {Education}
                     </div>
                  </div>

                  <div class="Lsection">
                     <div class="Lsection-title"><b>Soft Skills </b><i class="fa fa-book"></i></div>
                     <ul>
                        {softSkills}
                     </ul>
                  </div>

                  <div class="Lsection">
                     <div class="Lsection-title"><b>Languages </b><i class="fa fa-language"></i></div>
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
                     <div class="section-title"><b>Technical Skills</b></div>
                     <div class="Ritem subcont">
                        <ul>
                           <li>1 skills</li>
                           <li>2 skills</li>
                           <li>3 skills</li>
                        </ul>
                        <ul>
                           <li>4 skills</li>
                           <li>5 skills</li>
                           <li>6 skills</li>
                        </ul>
                        <ul>
                           <li>7 skills</li>
                           <li>8 skills</li>
                           <li>9 skills</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
      </div>
   </body>
   </html>
   """
   return UpdatedTemplate

def T7(jsonData,desc):

   Education='\n'.join(f"""                <div class="subtitle">{ed['degreeName']}</div>
                {ed['institutionName']} | {ed['graduationYear']} | {ed['currentSGPA']}""" for ed in jsonData['education'])
   
   Projects='\n'.join((
   f"""
   <div class="Ritem">
         <li> <div class="item-title">{proj['projectTitle']} </div>
         <div> {proj['toolsTechUsed']} </li>
   </div>\n""" for proj in jsonData['projects']))

   WorkExp='\n'.join(f"""                <div class="internship TextGray SpaceBetween">
                   <div class="left"><b>{exp['companyNameDuration'].split(',')[0]}</b></div>
                   <div class="Right"><b>{exp['companyNameDuration'].split(',')[1]}</b></div>
                </div>
                <ul>
                      <li>{exp['keyAchievements']}</li>
                </ul>""" for exp in jsonData['workExperience'])

   css="""
   body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #d6cece;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1200px;         /* (W/H) Ratio should be 0.7069 */
   }
   .resume {
      width: 800px;           /* (W/H) Ratio should be 0.7069 */
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

   .subcont .left{
      padding-right: 40px;
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
        <link rel="icon" type="image/png" href="./Img/N.png" />
         <style>
           {css}
         </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
       <title>Designed by BRAVERS</title>
    </head>
    <body>
       <div class="resume">
          <div class="contacts">
             <h1>{jsonData['contactInfo']['fullName']}</h1>
             <p>{jsonData['contactInfo']['Location']} <br>{jsonData['contactInfo']['phoneNumber']} | <a href="mailto:"+{jsonData['contactInfo']['emailAddress']} target="_blank">{jsonData['contactInfo']['emailAddress']}</a> | <a href="{jsonData['contactInfo']['portfolioUrl'] if 'https://' in jsonData['contactInfo']['portfolioUrl'] else 'https://'+jsonData['contactInfo']['portfolioUrl']}" target="_blank">{jsonData['contactInfo']['portfolioUrl']}<a></p>
          </div>
          <div class="Conts">
             <div class="title">Objectives:</div>
             {desc}
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