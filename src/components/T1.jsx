import React from 'react';
import styled from "styled-components";

const removespace = (str) => str.trim();

const StyledWrapper = styled.div`
@media print {
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    line-height: 1.25;
    padding: 0;
    background-color: #f1f1f1 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1280px;
  }
  @page {
   size: 950px 1300px; 
   margin: 0;
  }
  .resume {
    margin-top: 10px;
    width: 900px; 
    border-radius: 15px;
    border: 0px solid #ddd !important;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}


body {
  font-family: Arial, sans-serif;
  margin: 0;
  line-height: 1.25;
  padding: 0;
  background-color: #d6cece;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1280px;
}

.resume {
  margin-top: 10px;
  width: 900px; 
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
  font-weight: bold;
  color: #4e4c4c;
}

.header h2 {
  margin: 5px 0 0;
  font-size: 18px;
  font-weight: bold;
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

.content .left {
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
  padding: 0 10px 0 10px; 
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

.fontLight{
  /* font-weight: bold; */
  color: #5f5f5f;
}

ul {
  list-style: circle;
  padding-left: 20px;
  margin: 5px 0;
}

ul li {
  margin-bottom: 5px;
}`;

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const T1 = ({ jsonData }) => {
  const Education = jsonData.education.map((edu,index) => (
    <div key={`Education-${index}`}>
      <div className="TextLight">
        <b>{edu.graduationYear}<br/>{edu.institutionName}</b>
      </div>
      {edu.degreeName} <br/>
      GPA: {edu.currentSGPA}
      <br/> <br />
    </div>
  ));

  const skills = jsonData.skills.hardSkills.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
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

  const HardSkillsColumn1 = skills.slice(0, column1).map((skill, index) => (
    <li key={`skill1-${index}`}>{skill}</li>
  ));

  const HardSkillsColumn2 = skills.slice(column1, column1 + column2).map((skill, index) => (
    <li key={`skill2-${index}`}>{skill}</li>
  ));

  const HardSkillsColumn3 = skills.slice(column1 + column2, column1 + column2 + column3).map((skill, index) => (
    <li key={`skill3-${index}`}>{skill}</li>
  ));

  const HardSkillsColumn4 = skills.slice(column1 + column2 + column3, column1 + column2 + column3 + column4).map((skill, index) => (
    <li key={`skill4-${index}`}>{skill}</li>
  ));

  const softSkillsList = jsonData.skills.softSkills.split(',').map(skill => skill.trim()).filter(skill => skill !== '').map((skill, index) => (
    <li key={`soft-${index}`}>{removespace(skill)}</li>
  ));

  const languagesList = jsonData.contactInfo.Languages.split(',').map(lang => lang.trim()).filter(lang => lang !== '').map((lang, index) => (
    <li key={`lang-${index}`}>{removespace(lang)}: Fluent</li>
  ));

  const projectsList = jsonData.projects.map((proj, index) => (
    <div className="Ritem" key={`proj-${index}`}>
      <li>
        <div className="item-title TextLight">{proj.projectTitle}</div>
        <div>{proj.toolsTechUsed}</div>
      </li>
    </div>
  ));

  const workExpList = jsonData.workExperience.map((we, index) => (
    <li key={`work-${index}`}>
      <div className="item-title TextLight">
        {we.companyName}
        <div>{we.WorkDuration}</div>
      </div>
      ({we.jobTitle}) <br/>
      {we.keyAchievements} <br />{index < column4 - 1 && <br />}
    </li>
  ));

  const certificateNames = jsonData.certificates.map(cer => cer.certificateName);
  const certificateProviders = jsonData.certificates.map(cer => cer.providerName);
  const certificateDuration = jsonData.certificates.map(cer => cer.courseDuration);
  const certificatePlaceholders = Array(jsonData.certificates.length).fill('--');

  return (
    <StyledWrapper>
    <div className="resume" id="capture-content">
      <div className="header">
        <h1>{jsonData.contactInfo.fullName}</h1>
        <h2>{jsonData.contactInfo.jobTitle}</h2>
      </div>

      <div className="upperContent">
        <div className="Contact">
          <div className="section-title"><b>Contact</b> <i className="fas fa-address-card"></i></div>
          <div className="Litem"><i className="fa fa-phone TextLight"></i> {jsonData.contactInfo.phoneNumber}</div>
          <div className="Litem NoneDecorationBlack">
            <i className="fas fa-envelope TextLight"></i> <a href={`mailto:${jsonData.contactInfo.emailAddress}`}>{jsonData.contactInfo.emailAddress.split('@')[0]}</a>
          </div>
          <div className="Litem NoneDecorationBlack">
            <i className="fab fa-linkedin TextLight"></i> <a href={`https://www.linkedin.com/in/${jsonData.contactInfo.linkedin}`} target="_blank" rel="noreferrer">{jsonData.contactInfo.linkedin}</a>
          </div>
          <div className="Litem NoneDecorationBlack">
            <i className="fas fa-globe TextLight"></i> <a href={isValidUrl(jsonData.contactInfo.portfolio) ? jsonData.contactInfo.portfolio : `https://github.com/${jsonData.contactInfo.portfolio}`} target="_blank" rel="noreferrer"> {jsonData.contactInfo.portfolio.replace(/^https?:\/\//, '')}</a>
          </div>
          <div className="Litem">
            <i className="fa fa-map-marker TextLight"></i> {jsonData.contactInfo.Location}
          </div><br/>
        </div>
        
        <div className="Usection">
          <div className="section-title"><b>Profile Summary</b></div>
          <div className="Litem">
            <p className="Ritem">{jsonData.Description.UserDescription}</p>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="left">
          <div className="SUsection">
            <div className="section-title"><b>Education </b><i className="fas fa-graduation-cap"></i></div>
            {Education}
          </div>

          <div className="section">
            <div className="section-title"><b>Soft Skills </b><i className="fa fa-book"></i></div>
            <ul>
              {softSkillsList}
              <br/>
            </ul>
          </div>

          <div className="LDsection">
            <div className="section-title"><b>Languages </b><i className="fa fa-language"></i></div>
            <ul>
              {languagesList}
            </ul>
          </div>
        </div>

        <div className="right">
          <div className="SUsection">
            <div className="section-title"><b>Projects</b></div>
            <ul>
              {projectsList}
            </ul>
          </div>
          
          <div className="section">
            <div className="section-title"><b>Work Experience</b></div>
            <div className="Ritem">
              <ul>
                {workExpList}
              </ul>
            </div>
          </div>

          <div className="section">
            <div className="section-title"><b>Certificates</b></div>
            <div className="Ritem subcont NoneDecoration">
              <div>
                {certificateNames.map((cert, index) => (
                  <React.Fragment key={`cert-${index}`}>
                    {cert}<br/>
                  </React.Fragment>
                ))}
                <a href="#" target="_blank" rel="noreferrer">More Certificates</a>
              </div>
              <div>
                {certificatePlaceholders.map((placeholder, index) => (
                  <React.Fragment key={`placeholder-${index}`}>
                    {placeholder}<br/>
                  </React.Fragment>
                ))}
              </div>
              <div>
                {certificateProviders.map((provider, index) => (
                  <React.Fragment key={`provider-${index}`}>
                    {provider}<br/>
                  </React.Fragment>
                ))}
              </div>
              <div className='fontLight'>
                {certificateDuration.map((Duration, index) => (
                  <React.Fragment key={`provider-${index}`}>
                    ({Duration})<br/>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="skills">
            <div className="section-title"><b>Technical Skills</b></div>
            <div className="Ritem subcont">
              <ul>
                {HardSkillsColumn1}
              </ul>
              <ul>
                {HardSkillsColumn2}
              </ul>
              <ul>
                {HardSkillsColumn3}
              </ul>
              <ul>
                {HardSkillsColumn4}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledWrapper>
  );
};

export const T1Css=`
    @media print {
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        line-height: 1.25;
        padding: 0;
        background-color: #f1f1f1 !important;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1280px;
      }
      @page {
       size: 950px 1300px; 
       margin: 0;
      }
      .resume {
        margin-top: 10px;
        width: 900px; 
        border-radius: 15px;
        border: 0px solid #ddd !important;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
    }
    
    body {
       font-family: Arial, sans-serif;
       margin: 0;
       line-height: 1.25;
       padding: 0;
       background-color: #d6cece;
       display: flex;
       justify-content: center;
       align-items: center;
       height: 1280px;
    }
    
    .resume {
       margin-top: 10px;
       width: 900px; 
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
       font-weight: bold;
       color: #4e4c4c;
    }
    
    .header h2 {
       margin: 5px 0 0;
       font-size: 18px;
       font-weight: bold;
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
    
    .content .left {
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
       padding: 0 10px 0 10px; 
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
    
    .fontLight{
       /* font-weight: bold; */
       color: #5f5f5f;
    }
    
    ul {
       list-style: circle;
       padding-left: 20px;
       margin: 5px 0;
    }
    
    ul li {
       margin-bottom: 5px;
    }`