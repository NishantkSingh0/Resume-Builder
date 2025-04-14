import React from 'react';
import styled from "styled-components";

const StyledWrapper=styled.div`body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #d6cece;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1380px; /* (W/H) Ratio should be 0.7069 */
}

.resume {
  width: 900px; /* (W/H) Ratio should be 0.7069 */
  /* height: 1225px; */
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin-top: 100px;
  padding: 0 30px 0 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.Underline{
  width: 75px;
  border:2px solid black;
  margin-top: 10px;
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
  width: 36.6%;
  display: flex;
  justify-content: center;
  padding: 10px 20px 10px 20px;
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

.mtt-3 {
  margin-top: 0.75rem /* 12px */;
}

.content .left {
  width: 35%;
  padding-right: 10px;
  background-color: #0363b1;
  border-bottom-left-radius: 15px;
  border-right: 4px solid #0363b1;
  /* border-top: 4px solid #0363b1; */
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
  list-style-type: circle;
  padding-left: 20px;
  margin: 5px 0;
}

ul li {
  margin-bottom: 5px;
}

.textLight{
  font-weight: 500;
  color: #626263;
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
}`;


export const T4 = ({ jsonData, desc }) => {
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  const removeSpace = (skill) => {
    return skill.trim();
  };

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

  const skillColumn1 = skills.slice(0, column1);
  const skillColumn2 = skills.slice(column1, column1 + column2);
  const skillColumn3 = skills.slice(column1 + column2, column1 + column2 + column3);
  const skillColumn4 = skills.slice(column1 + column2 + column3, column1 + column2 + column3 + column4);

  return (
    <StyledWrapper>
    <div className="resume" id="capture-content">
      <div className="header">
        <div className="left">
          <img src="https://www.skibalawchicago.com/wp-content/uploads/2024/06/profile-placeholder.jpg" alt="Profile" />
        </div>

        <div className="right">
          <div className="head">
            <h1>{jsonData.contactInfo.fullName}</h1>
            <h2>{jsonData.contactInfo.jobTitle}</h2>
            <div className="Underline"></div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="left">
          <div className="Contact">
            <div className="Lsection-title"><b>Contact</b> <i className="fas fa-address-card"></i></div> <br />
            <div className="Litem"><i className="fa fa-phone"></i> {jsonData.contactInfo.phoneNumber} </div>
            <div className="Litem"><i className="fas fa-envelope"></i>
              <a href={`mailto:${jsonData.contactInfo.emailAddress}`}> {jsonData.contactInfo.emailAddress.split('@')[0]} </a>
            </div>
            <div className="Litem"><i className="fab fa-linkedin"></i>
              <a href={`https://www.linkedin.com/in/${jsonData.contactInfo.linkedin}`} target="_blank" rel="noreferrer"> {jsonData.contactInfo.linkedin}</a>
            </div>
            <div className="Litem"><i className="fas fa-globe"></i>
              <a href={isValidUrl(jsonData.contactInfo.portfolio) ? jsonData.contactInfo.portfolio : `https://github.com/${jsonData.contactInfo.portfolio}`} target="_blank" rel="noreferrer"> {jsonData.contactInfo.portfolio.replace(/^https?:\/\//, '')} </a>
            </div>
            <div className="Litem"><i className="fa fa-map-marker"></i> {jsonData.contactInfo.Location}</div>
          </div>

          <div className="Lsection">
            <div className="Lsection-title"><b>Education </b><i className="fas fa-graduation-cap"></i></div><br />
            <div className="Litem">
              {jsonData.education.map((edu, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <React.Fragment><br /><br /></React.Fragment>}
                  <div className="SubSec-title"><b>{edu.graduationYear}<br />{edu.institutionName}</b></div>
                  {edu.degreeName} <br />
                  SGPA: {edu.currentSGPA}
                </React.Fragment>
              ))}
              <br />
            </div>
          </div>

          <div className="Lsection">
            <div className="Lsection-title"><b>Soft Skills </b><i className="fa fa-book"></i></div><br />
            <ul>
              {jsonData.skills.softSkills.split(',').map(skill => skill.trim()).filter(skill => skill !== '').map((skill, index) => (
                <li key={index}>{removeSpace(skill)}</li>
              ))}
            </ul>
          </div>

          <div className="Lsection">
            <div className="Lsection-title"><b>Languages </b><i className="fa fa-language"></i></div><br />
            <ul>
              {jsonData.contactInfo.Languages.split(',').map(lang => lang.trim()).filter(lang => lang !== '').map((lang, index) => (
                <li key={index}>{removeSpace(lang)}: Fluent</li>
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
                <div key={index} className="Ritem" style={{ marginBottom: index < jsonData.projects.length - 1 ? "15px" : "0px" }}>
                  <li>
                    <div className="item-title textGray">{proj.projectTitle} </div>
                    <div> {proj.toolsTechUsed} </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <br />
          
          <div className="section">
            <div className="section-title"><b>Work Experience</b></div>
            <div className="Ritem">
              <ul>
                {jsonData.workExperience.map((we, index) => (
                  <React.Fragment key={index}>
                    <li>
                      <div className="item-title textGray mtt-3">
                        {we.companyName}
                        <div>{we.WorkDuration}</div>
                      </div>
                      {we.jobTitle}<br />
                      <div dangerouslySetInnerHTML={{ __html: we.keyAchievements }} />
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>

          <div className="section">
            <div className="section-title"><b>Certificates</b></div>
            <div className="Ritem subcont NoneDecoration">
              <div>
                {jsonData.certificates.map((cert, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <br />}
                    {cert.certificateName}
                  </React.Fragment>
                ))}
                <br />
                <a href="#" target="_blank" rel="noreferrer">More Certificates</a>
              </div>
              <div>
                {jsonData.certificates.map((_, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <br />}
                    --
                  </React.Fragment>
                ))}
                <br />
              </div>
              <div>
                {jsonData.certificates.map((cert, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <br />}
                    {cert.providerName}
                  </React.Fragment>
                ))}
                <br />
              </div>
              <div className='textLight'>
                {jsonData.certificates.map((cert, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <br />}
                    ({cert.courseDuration})
                  </React.Fragment>
                ))}
                <br />
              </div>
            </div>
          </div>

          <div className="skills">
            <div className="SkillsSection-title"><b>Technical Skills</b></div><br />
            <div className="Ritem subcont">
              <ul>
                {skillColumn1.map((skill, index) => (
                  <React.Fragment key={index}>
                    <li>{skill}</li>
                    {/* {index < skillColumn1.length - 1 && <br />} */}
                  </React.Fragment>
                ))}
              </ul>
              <ul>
                {skillColumn2.map((skill, index) => (
                  <React.Fragment key={index}>
                    <li>{skill}</li>
                    {/* {index < skillColumn2.length - 1 && <br />} */}
                  </React.Fragment>
                ))}
              </ul>
              <ul>
                {skillColumn3.map((skill, index) => (
                  <React.Fragment key={index}>
                    <li>{skill}</li>
                    {/* {index < skillColumn3.length - 1 && <br />} */}
                  </React.Fragment>
                ))}
              </ul>
              <ul>
                {skillColumn4.map((skill, index) => (
                  <React.Fragment key={index}>
                    <li>{skill}</li>
                    {/* {index < skillColumn4.length - 1 && <br />} */}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </StyledWrapper>
  );
};

export const T4Css=`
@media print {
  body {
     font-family: Arial, sans-serif;
     margin: 0;
     padding: 0;
     background-color: #ffffff !important;
     display: flex;
     justify-content: center;
     align-items: stretch !important;
     height: 100% !important; 
  }
  @page {
   size: auto 1220px; 
   margin: 0;
  }
  .resume {
     width: 900px;
     background: #ffffff;
     border: 1px solid #ffffff !important;
     border-radius: 15px;
     margin-top: 0px !important;
     padding: 0 32px 0 0;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}

body {
   font-family: Arial, sans-serif;
   margin: 0;
   padding: 0;
   background-color: #d6cece;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 1380px; /* (W/H) Ratio should be 0.7069 */
}

.resume {
   width: 900px; /* (W/H) Ratio should be 0.7069 */
   background: #ffffff;
   border: 1px solid #ddd;
   border-radius: 15px;
   margin-top: 100px;
   padding: 0 30px 0 0;
   box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}

.Underline{
   width: 75px;
   border:2px solid black;
   margin-top: 10px;
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

.mtt-3 {
   margin-top: 0.75rem /* 12px */;
}

.content .left {
   width: 35%;
   padding-right: 10px;
   background-color: #0363b1;
   border-bottom-left-radius: 15px;
   border-right: 4px solid #0363b1;
   /* border-top: 4px solid #0363b1; */
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
   list-style-type: circle;
   padding-left: 20px;
   margin: 5px 0;
}

ul li {
   margin-bottom: 5px;
}

.textLight{
   font-weight: 500;
   color: #626263;
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
}`