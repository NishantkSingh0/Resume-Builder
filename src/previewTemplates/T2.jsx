import React from 'react';
import './T2.css'

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
  );
};

export default T2;