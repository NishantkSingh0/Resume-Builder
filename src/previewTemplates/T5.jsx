import './T5.css'
import React from 'react';

const T5 = ({ jsonData, desc }) => {
  // Helper function to check if a string contains a dot (.)
  const handlePortfolioLink = (portfolio) => {
   return portfolio.indexOf('.') > -1 ? `https://${portfolio}` : `https://github.com/${portfolio}`;
 };

  return (
    <div className="resume-container">
      <div className="header">
        <h1><b>{jsonData.contactInfo.fullName}</b></h1><br />
        <p>
          <a className="DecorationNone" href={handlePortfolioLink(jsonData.contactInfo.portfolio)} target="_blank" rel="noreferrer">
            {jsonData.contactInfo.portfolio}
          </a> | <a className="DecorationNone" href="#"> 9917760469</a> | <a href={`mailto:${jsonData.contactInfo.emailAddress}`} className="DecorationNone" target="_blank" rel="noreferrer">
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
                ⇒
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
          <strong>Tech Skills: </strong>
          <span style={{ color: "rgb(75, 77, 77)" }}>{jsonData.skills.hardSkills}</span>
        </p>
      </div>
    </div>
  );
};

export default T5;