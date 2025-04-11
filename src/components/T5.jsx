import React from 'react';
import styled from "styled-components";

const StyledWrapper=styled.div`* {
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
  width: 900px;
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
  font-size: 32px;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
  color: #7d3c98; 
  text-transform: uppercase;
}

.header h2 {
  font-size: 24px;
  font-weight: normal;
  color: #555;
  margin-bottom: 0.75rem;
}

.header p {
  font-size: 0.9rem;
  color: #666;
}

h3 {
  font-size: 19px;
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

.flexConts{
 display: flex;
}

.mar-30{
 margin: 0 30px 0 30px;
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
  font-size: 16px;
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

.fontLight{
 color: #5e5d5d;
}

.square-list {
  list-style-type: square; 
}`;



export const T5 = ({ jsonData, desc }) => {
  const handlePortfolioLink = (portfolio) => {
   return portfolio.indexOf('.') > -1 ? `https://${portfolio}` : `https://github.com/${portfolio}`;
 };

  return (
    <StyledWrapper>
    <div className="resume-container" id="capture-content">
      <div className="header">
        <h1><b>{jsonData.contactInfo.fullName}</b></h1><br />
        <p>
          <a className="DecorationNone" href={handlePortfolioLink(jsonData.contactInfo.portfolio)} target="_blank" rel="noreferrer">
            {jsonData.contactInfo.portfolio.replace(/^https?:\/\//, '')}
          </a> | <a className="DecorationNone" href="#"> {jsonData.contactInfo.phoneNumber}</a> | <a href={`mailto:${jsonData.contactInfo.emailAddress}`} className="DecorationNone" target="_blank" rel="noreferrer">
            {jsonData.contactInfo.emailAddress}
          </a> <br /> 
          <div style={{ marginTop: "6px" }}>{jsonData.contactInfo.Location}</div>
        </p>
      </div>

      <div className="summary">
        <h3><b>Summary</b></h3>
        <p>{jsonData.Description.UserDescription}</p>
      </div>

      <div className="experience">
        <h3><b>Work Experience</b></h3>
        {jsonData.workExperience.map((exp, index) => (
          <div key={index} className="experience-item">
            <ul className="circle-list">
              <li>
                <h4 className="spacebetween">
                  {exp.companyName} | {exp.jobTitle} <span>{exp.WorkDuration}</span>
                </h4>
              </li>
              {/* Assuming keyAchievements is a string of HTML that needs to be rendered */}
              <div dangerouslySetInnerHTML={{ __html: exp.keyAchievements }} />
            </ul>
          </div>
        ))}
      </div>

      <div className="education-section">
        <h3><b>Education</b></h3>
        {jsonData.education.map((edu, index) => (
          <div key={index} className="education-item">
            <ul className="square-list">
              <li>
                <h4 className="spacebetween">
                  {edu.degreeName}<span>{edu.graduationYear}</span>
                </h4>
              </li>
              <p>{edu.institutionName} | SGPA: {edu.currentSGPA}</p>
            </ul>
          </div>
        ))}
      </div>

      <div className="projects">
        <h3><b>Projects</b></h3>
        {jsonData.projects.map((proj, index) => (
          <div key={index} className="project-item">
            <ul>
              <li>
                <h4 className="spacebetween">{proj.projectTitle}</h4>
              </li>
              <p>{proj.toolsTechUsed}</p>
            </ul>
          </div>
        ))}
      </div>

      <div className="Certifications">
        <h3><b>Certifications</b></h3>
        <div className="flexConts Certificate-item">
          <div className='mar-30'>
            {jsonData.certificates.map((cert, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />}
                {cert.certificateName}
              </React.Fragment>
            ))}
            <br />
            <a className="DecorationNone" href="#" target="_blank" rel="noreferrer">More Certificates</a>
          </div>
          <div className='mar-30'>
            {jsonData.certificates.map((_, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />}
                --
              </React.Fragment>
            ))}
            <br />
          </div>
          <div className='mar-30'>
            {jsonData.certificates.map((cert, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />}
                {cert.providerName}
              </React.Fragment>
            ))}
            <br />
          </div>
          <div className='mar-30 fontLight'>
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
        <h3><b>Skills</b></h3>
        <p className="skills-item">
          <strong style={{ color: "rgb(75, 77, 77)" }}>Soft Skills: </strong>
          {jsonData.skills.softSkills}
        </p>
        <p className="skills-item">
          <strong style={{ color: "rgb(75, 77, 77)" }}>Tech Skills: </strong>
          <span>{jsonData.skills.hardSkills}</span>
        </p>
      </div>
    </div>
    </StyledWrapper>
  );
};

export const T5Css=`
@media print {
  body {
    font-family: Arial, sans-serif;
    background: #fff !important;
    margin-top: 0 !important;
    color: #333;
    padding: 5px !important;
  }
  @page {
   size: 960px 1300px; 
   margin: 0;
  }
 .resume-container {
   width: 900px;
   margin: 10px auto;
   background: #fff;
   border-radius: 15px;
   box-shadow: 0 0 0 rgba(0, 0, 0, 0.05);
   padding: 1rem !important;
 }
}

* {
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
   width: 900px;
   margin: 0 auto;
   background: #fff;
   border-radius: 15px;
   box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
   padding: 2rem;
 }

 .header {
   text-align: center;
   margin-bottom: 1.5rem;
 }

 .header h1 {
   font-size: 32px;
   letter-spacing: 1px;
   margin-bottom: 0.25rem;
   color: #7d3c98; 
   text-transform: uppercase;
 }

 .header h2 {
   font-size: 24px;
   font-weight: normal;
   color: #555;
   margin-bottom: 0.75rem;
 }

 .header p {
   font-size: 0.9rem;
   color: #666;
 }

 h3 {
   font-size: 19px;
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

 .flexConts{
  display: flex;
 }

 .mar-30{
  margin: 0 30px 0 30px;
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
   font-size: 16px;
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

 .fontLight{
  color: #5e5d5d;
 }

 .square-list {
   list-style-type: square; 
 }`