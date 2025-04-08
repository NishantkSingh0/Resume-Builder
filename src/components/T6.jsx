import styled from "styled-components";
import React from 'react';

const T6 = ({ jsonData }) => {
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <StyledWrapper>
    <div className="resume">
      <div className="contacts">
        <h1>{jsonData.contactInfo.fullName}</h1>
        <p>
          {jsonData.contactInfo.Location} <br />
          {jsonData.contactInfo.phoneNumber} | <a href={`mailto:${jsonData.contactInfo.emailAddress}`} target="_blank" rel="noreferrer">{jsonData.contactInfo.emailAddress}</a> | <a href={isValidUrl(jsonData.contactInfo.portfolio) ? jsonData.contactInfo.portfolio : `https://github.com/${jsonData.contactInfo.portfolio}`} target="_blank" rel="noreferrer"> {jsonData.contactInfo.portfolio}</a>
        </p>
      </div>

      <div className="Conts">
        <div className="title">Objectives:</div>
        {jsonData.Description.UserDescription}
      </div>

      <div className="Conts">
        <div className="title">Education:</div>
        {jsonData.education.map((ed, index) => (
          <div key={index}>
            <div className="subtitle">{ed.degreeName}</div>
            {ed.institutionName} | {ed.graduationYear} | SGPA: {ed.currentSGPA}
          </div>
        ))}
      </div>

      <div className="Conts">
        <div className="title">Technical skills:</div>
        <div className="subcont SpaceBetween">
          <div className="left">Hard Skills <br />Soft Skills </div>
          <div className="mid">~ <br />~ <br /></div>
          <div className="right">{jsonData.skills.hardSkills}<br />{jsonData.skills.softSkills} <br /></div>
        </div>
      </div>

      <div className="Conts">
        <div className="title">Academic Projects:</div>
        <ul>
          {jsonData.projects.map((proj, index) => (
            <div key={index} className="Ritem">
              <li>
                <div className="item-title">{proj.projectTitle}</div>
                <div>{proj.toolsTechUsed}</div>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="Conts">
        <div className="title">Work Experience:</div>
        {jsonData.workExperience.map((exp, index) => (
          <div key={index}>
            
            <div className="internship TextGray SpaceBetween">
              <div className="left ">{exp.companyName}</div>
              <div className="Right">{exp.WorkDuration}</div>
            </div>
            <ul>
              <li>{exp.keyAchievements}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="Conts">
        <div className="title">Certifications:</div>
        <div className="flexConts subcont">
          <div className="mar-30">
            {jsonData.certificates.map((cert, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />}
                {cert.certificateName}
              </React.Fragment>
            ))}
          </div>
          <div className="mar-30">
            {jsonData.certificates.map((_, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />}
                ⇒
              </React.Fragment>
            ))}
            <br />
          </div>
          <div className="mar-30">
            {jsonData.certificates.map((cert, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />}
                {cert.providerName}
              </React.Fragment>
            ))}
            <br />
          </div>
          <div className="mar-30 TextLight">
            {jsonData.certificates.map((cert, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />}
                ({cert.courseDuration})
              </React.Fragment>
            ))}
            <br />
          </div>
        </div>
        <a className="NoneDecoration ml-3" href="#" target="_blank" rel="noreferrer">More Certificates</a>
      </div>

      <div className="Conts">
        <div className="title">Declaration:</div>
        I hereby declare that the above information is true to the best of my knowledge.
      </div>
      
      <p className="signature">{jsonData.contactInfo.fullName}</p>
    </div>
    </StyledWrapper>
  );
};

const StyledWrapper=styled.div`body {
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
ul {
   list-style-type: circle;
   padding-left: 20px;
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
   font-size: 32px;  /* or whatever you like */
   font-weight: bold;
   color: #333;
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

.TextLight{
   color:#4e4e4e;
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

.flexConts{
   display: flex;
}

.mar-30{
   margin: 0 30px 0 30px;
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
}`;

export default T6;