import React from 'react';
import styled from "styled-components";

const T3 = ({jsonData}) => {
  const removespace = (text) => text.trim();

  const skills = jsonData.skills.hardSkills.split(',');
  console.log(skills, 'from T3.jsx')
  const eachColumn = Math.floor(skills.length / 4);
  
  let column1 = eachColumn;
  let column2 = eachColumn;
  let column3 = eachColumn;
  let column4 = eachColumn;
  
  if (skills.length % 4 === 1) {
    column1 += 1;
  } else if (skills.length % 4 === 2) {
    column1 += 1;
    column2 += 1;
  } else if (skills.length % 4 === 3) {
    column1 += 1;
    column2 += 1;
    column3 += 1;
  }

  return (
    <StyledWrapper>
    <div>
      <div className="header">
        <h1>{jsonData.contactInfo.fullName}</h1>
        <h2>{jsonData.contactInfo.jobTitle}</h2>
      </div>
      <div className="resume">
        <div className="content">
          <div className="left">
            <div className="Contact">
              <div className="section-title"><b>Contact</b> <i className="fas fa-address-card"></i></div><br />
              <div className="Litem"><i className="fa fa-phone IconLight"></i> {jsonData.contactInfo.phoneNumber} </div>
              <div className="Litem"><i className="fas fa-envelope IconLight"></i><a href={`mailto:${jsonData.contactInfo.emailAddress}`}> {jsonData.contactInfo.emailAddress.split('@')[0]} </a></div>
              <div className="Litem"><i className="fab fa-linkedin IconLight"></i><a href={`https://www.linkedin.com/in/${jsonData.contactInfo.linkedin}`} target="_blank" rel="noreferrer"> {jsonData.contactInfo.linkedin}</a></div>
              <div className="Litem">
                <i className="fas fa-globe IconLight"></i>
                <a 
                  href={isValidUrl(jsonData.contactInfo.portfolio) ? jsonData.contactInfo.portfolio : `https://github.com/${jsonData.contactInfo.portfolio}`} target="_blank" rel="noreferrer"> {jsonData.contactInfo.portfolio} </a>
              </div>
              <div className="Litem"><i className="fa fa-map-marker IconLight"></i> {jsonData.contactInfo.Location}</div> <br />
            </div>

            <div className="section">
              <div className="section-title"><b>Education </b><i className="fas fa-graduation-cap"></i></div><br />
              <div className="Litem">
                {jsonData.education.map((edu, index) => (
                  <React.Fragment key={index}>
                    <div className="mb-3">
                        <div className="SubSec-title TextLight"><b>{edu.graduationYear}<br />{edu.institutionName}</b></div>
                        {edu.degreeName} <br />
                        GPA: {edu.currentSGPA}
                        {index < jsonData.education.length - 1 && <br />}
                     </div>
                  </React.Fragment>
                ))}
                
              </div>
            </div>

            <div className="section">
              <div className="section-title"><b>Soft Skills </b><i className="fa fa-book"></i></div><br />
              <ul>
                {jsonData.skills.softSkills.split(',').map((skill, index) => (
                  <li key={index}>{removespace(skill)}</li>
                ))}
              </ul>
            </div>

            <div className="section">
              <div className="section-title"><b>Languages </b><i className="fa fa-language"></i></div><br />
              <ul>
                {jsonData.contactInfo.Languages.split(',').map((language, index) => (
                  <li key={index}>{removespace(language)}: Fluent</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="right">
            <div className="section">
              <div className="section-title"><b>Profile Summary</b></div>
              <p>
                {jsonData.Description.UserDescription}
              </p>
            </div>

            <div className="SUsection">
              <div className="section-title"><b>Projects</b></div>
              <ul>
                {jsonData.projects.map((proj, index) => (
                  <div className="Ritem" key={index}>
                    <li>
                      <div className="item-title TextLight">{proj.projectTitle} </div>
                      <div> {proj.toolsTechUsed} </div>
                    </li>
                  </div>
                ))}
              </ul>
            </div>

            <div className="section">
              <div className="section-title"><b>Work Experience</b></div>
              <div className="Ritem">
                <ul>
                  {jsonData.workExperience.map((we, index) => (
                    <li key={index} className='mb-2'>
                      <div className="item-title TextLight">{we.companyName}<div>{we.WorkDuration}</div> </div>
                      {we.jobTitle}<br />
                      {we.keyAchievements}
                      {index < jsonData.workExperience.length - 1 && <br />}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="section">
              <div className="section-title"><b>Certificates</b></div>
              <div className="Ritem subcont NoDecorationBlue">
                <div>
                  {jsonData.certificates.map((cer, index) => (
                    <React.Fragment key={index}>
                      {cer.certificateName}
                      {index < jsonData.certificates.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                  <br /><a href="#" target="_blank" rel="noreferrer">More Certificates</a>
                </div>
                <div>
                  {jsonData.certificates.map((_, index) => (
                    <React.Fragment key={index}>
                      ⇒
                      {index < jsonData.certificates.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                  <br />
                </div>
                <div>
                  {jsonData.certificates.map((cer, index) => (
                    <React.Fragment key={index}>
                      {cer.providerName}
                      {index < jsonData.certificates.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                  <br />
                </div>
                <div className='TextLight'>
                  {jsonData.certificates.map((cer, index) => (
                    <React.Fragment key={index}>
                      ({cer.courseDuration})
                      {index < jsonData.certificates.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                  <br />
                </div>
              </div>
            </div>

            <div className="skills">
              <div className="section-title"><b>Technical Skills</b></div>
              <div className="Ritem subcont">
                <ul>
                  {skills.slice(0, column1).map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <ul>
                  {skills.slice(column1, column1 + column2).map((skill, index) => (
                    <li key={index + column1}>{skill}</li>
                  ))}
                </ul>
                <ul>
                  {skills.slice(column1 + column2, column1 + column2 + column3).map((skill, index) => (
                    <li key={index + column1 + column2}>{skill}</li>
                  ))}
                </ul>
                <ul>
                  {skills.slice(column1 + column2 + column3, column1 + column2 + column3 + column4).map((skill, index) => (
                    <li key={index + column1 + column2 + column4}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </StyledWrapper>
  );
};

const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

const StyledWrapper = styled.div`body {
   font-family: Arial, sans-serif;
   margin: 100px 0 20px 0;
   padding: 0;
   background-color: #d6cece;
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 1231px; /* (W/H) Ratio should be 0.7069 */
}

.resume {
   width: 900px;
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
   width: 900px;
   background: #b6dbf0;
   padding: 90px 0 90px 0; 
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
   margin-bottom: 0; /* Remove bottom margin */
}

.header h1 {
   margin: 0;
   font-size: 40px;
   font-weight: bold;
   color: #333;
}

.header h2 {
   margin: 5px 0 0;
   font-size: 18px;
   font-weight: bold;
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
   width: 35%;
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
   list-style: square;
   padding-left: 20px;
   margin: 5px 0;
}

ul li {
   margin-bottom: 5px;
}

.rotate-90 { 
   transform: rotate(90deg); /* Rotates the icon 90 degrees */ 
}`;

export default T3;