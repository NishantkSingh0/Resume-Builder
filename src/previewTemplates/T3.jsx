import React from 'react';
import './T3.css'

const T3 = ({ jsonData }) => {
  const removespace = (text) => text.trim();

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
    <>
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
    </>
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

export default T3;