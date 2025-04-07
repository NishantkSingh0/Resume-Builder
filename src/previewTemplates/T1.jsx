import React from 'react';
import './T1.css'

const removespace = (str) => str.trim();

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const T1 = ({ jsonData}) => {
  const Education = jsonData.education.map(edu => (
    <div key={edu.institutionName}>
      <div className="TextLight">
        <b>{edu.graduationYear}<br/>{edu.institutionName}</b>
      </div>
      {edu.degreeName} <br/>
      GPA: {edu.currentSGPA}
      <br/> <br />
    </div>
  ));

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
  } else if (skills.length % 4 === 2) {
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
    <li key={`skill3-${index}`}>{skill}</li>
  ));

  const softSkillsList = jsonData.skills.softSkills.split(',').map((skill, index) => (
    <li key={`soft-${index}`}>{removespace(skill)}</li>
  ));

  const languagesList = jsonData.contactInfo.Languages.split(',').map((lang, index) => (
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
      {we.jobTitle} <br/>
      {we.keyAchievements} <br /><br />
    </li>
  ));

  const certificateNames = jsonData.certificates.map(cer => cer.certificateName);
  const certificateProviders = jsonData.certificates.map(cer => cer.providerName);
  const certificateDuration = jsonData.certificates.map(cer => cer.courseDuration);
  const certificatePlaceholders = Array(jsonData.certificates.length).fill('⇒');

  return (
    <div className="resume">
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
            <i className="fas fa-globe TextLight"></i> <a href={isValidUrl(jsonData.contactInfo.portfolio) ? jsonData.contactInfo.portfolio : `https://github.com/${jsonData.contactInfo.portfolio}`} target="_blank" rel="noreferrer"> {jsonData.contactInfo.portfolio}</a>
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
  );
};

export default T1;