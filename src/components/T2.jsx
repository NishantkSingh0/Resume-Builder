import React from 'react';
import styled from 'styled-components';

const T2 = ({ jsonData }) => {
  const skills = jsonData.skills.hardSkills.split(',');
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
    <div className="resume-container">
      <div className="header">
        <h1 className="Name">{jsonData.contactInfo.fullName}</h1>
        <h2 className="fontBold" style={{ fontWeight: 700 }}>{jsonData.contactInfo.jobTitle}</h2>
        <p style={{ color: '#333' }}> 
          <a href="#" className="NoneDecoration">{jsonData.contactInfo.Location}</a> | <a className="NoneDecoration" href={`mailto:${jsonData.contactInfo.emailAddress}`} target="_blank" rel="noreferrer">{jsonData.contactInfo.emailAddress}</a> | <a className="NoneDecoration" href={`https://www.linkedin.com/in/${jsonData.contactInfo.linkedin}`} target="_blank" rel="noreferrer">{jsonData.contactInfo.linkedin}</a>
        </p>
      </div>

      <h3 className="Heading">Summary</h3>
      <div className="summary">
        <p>{jsonData.Description.UserDescription}</p>
        <br />
      </div>

      <h3 className="Heading">Education</h3>
      <div className="education">
        {jsonData.education.map((ed, index) => (
          <div className="education-item" key={index}>
            <ul>
              <li><h4 className="SpaceBetween">{ed.degreeName} <span>{ed.graduationYear}</span></h4></li>
              <p>{ed.institutionName} || SGPA: {ed.currentSGPA}</p>
            </ul>  
          </div>
        ))}
        <br />
      </div>

      <h3 className="Heading">Work Experience</h3>
      <div className="experience">
        {jsonData.workExperience.map((exp, index) => (
          <div className="experience-item" key={index}>
            <ul>
              <li className="SpaceBetween">{exp.companyName} {exp.jobTitle} <span>{exp.WorkDuration}</span></li>
              {exp.keyAchievements}
            </ul>
          </div>
        ))}
        <br />
      </div>
    
      <h3 className="Heading">Projects</h3>
      <div className="education">
        {jsonData.projects.map((proj, index) => (
          <div className="Projects-items" key={index}>
            <ul>
              <li><h4 className="fontlight">{proj.projectTitle}</h4></li>
              <p>{proj.toolsTechUsed}</p>
            </ul>  
          </div>
        ))}
        <br />
      </div>

      <h3 className="Heading">Certifications</h3>
      <div className="justflex Certificats">
        <div className='mar-30'>
          {jsonData.certificates.map((cer, index) => (
            <React.Fragment key={index}>
              {cer.certificateName}
              {index < jsonData.certificates.length - 1 && <br />}
            </React.Fragment>
          ))}
          <br /><a href="#" className="NoneDecoration" target="_blank" rel="noreferrer">More Certificates</a><br /><br />
        </div>
        <div className='mar-30'>
          {jsonData.certificates.map((_, index) => (
            <React.Fragment key={index}>
              ⇒
              {index < jsonData.certificates.length - 1 && <br />}
            </React.Fragment>
          ))}
          <br /><br /> <br />
        </div>
        <div className='mar-30'>
          {jsonData.certificates.map((cer, index) => (
            <React.Fragment key={index}>
              {cer.providerName}
              {index < jsonData.certificates.length - 1 && <br />}
            </React.Fragment>
          ))}
          <br /><br /><br />
        </div>
        <div className='mar-30'>
          {jsonData.certificates.map((cer, index) => (
            <React.Fragment key={index}>
              <span>{`(${cer.courseDuration})`}</span>
              {index < jsonData.certificates.length - 1 && <br />}
            </React.Fragment>
          ))}
          <br /><br /><br />
        </div>
      </div>

      <h3 className="Heading">Technical Skills</h3>
      <div className="skills SpaceBetween">
        <ul>
          {skills.slice(0, column1).map((skill, index) => (
            <React.Fragment key={index}>
              <li>{skill}</li>
              {/* {index < column1 - 1 && <br />} */}
            </React.Fragment>
          ))}
        </ul>
        <ul>
          {skills.slice(column1, column1 + column2).map((skill, index) => (
            <React.Fragment key={index + column1}>
              <li>{skill}</li>
              {/* {index < column2 - 1 && <br />} */}
            </React.Fragment>
          ))}
        </ul>
        <ul>
          {skills.slice(column1 + column2, column1 + column2 + column3).map((skill, index) => (
            <React.Fragment key={index + column1 + column2}>
              <li>{skill}</li>
              {/* {index < column3 - 1 && <br />} */}
            </React.Fragment>
          ))}
        </ul>
        <ul>
          {skills.slice(column1 + column2 + column3, column1 + column2 + column3 + column4).map((skill, index) => (
            <React.Fragment key={index + column1 + column2 + column4}>
              <li>{skill}</li>
              {/* {index < column4 - 1 && <br />} */}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }

 .Name{
   font-family: Verdana;
   font-size: 2rem;
   font-weight: bold;
 }

 body {
   margin-top: 100px;
   font-family: Arial, sans-serif;
   background: #e4e4e4;
   color: #333;
   padding: 20px;
 }

 .resume-container {
   width: 900px;
  //  height: 1300px;
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

 .Certificats span {
   font-size: 0.9rem;
   color: #999;
 }

 .experience-item ul {
   list-style: disc;
   margin-left: 1.2rem;
   margin-top: 0.5rem;
 }

 ul{
  list-style-type: circle;
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
  flex-direction: row;   /* Force row direction */
  justify-content: space-between;
  font-weight: bolder;
  color: #525151;
 }

.mar-30{
  margin: 0 20px 0 20px;
}

 .justflex {
  display: flex;
  flex-direction: row;   /* Force row direction */
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
   font-weight: bold;
   background-color: #c5c3c3;
 }`;

export default T2;