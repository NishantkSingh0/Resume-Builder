import './T4.css'
import React from 'react';

const T4 = ({ jsonData, desc }) => {
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

  const skillColumn1 = skills.slice(0, column1);
  const skillColumn2 = skills.slice(column1, column1 + column2);
  const skillColumn3 = skills.slice(column1 + column2, column1 + column2 + column3);
  const skillColumn4 = skills.slice(column1 + column2 + column3, column1 + column2 + column3 + column4);

  return (
    <div className="resume">
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
              <a href={isValidUrl(jsonData.contactInfo.portfolio) ? jsonData.contactInfo.portfolio : `https://github.com/${jsonData.contactInfo.portfolio}`} target="_blank" rel="noreferrer"> {jsonData.contactInfo.portfolio} </a>
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
              {jsonData.skills.softSkills.split(',').map((skill, index) => (
                <li key={index}>{removeSpace(skill)}</li>
              ))}
            </ul>
          </div>

          <div className="Lsection">
            <div className="Lsection-title"><b>Languages </b><i className="fa fa-language"></i></div><br />
            <ul>
              {jsonData.contactInfo.Languages.split(',').map((skill, index) => (
                <li key={index}>{removeSpace(skill)}: Fluent</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="right">
          <div className="section">
            <div className="section-title"><b>Profile Summary</b></div>
            <p>
              A passionate AI developer with extensive experience in various machine learning models, Primarily I focus on building models from scratch rather than relying heavily on fine-tuning pre-trained models. All my projects, showcasing my skills and contributions, are available on GitHub & Kaggle.
            </p>
          </div>
          
          <div className="SUsection">
            <div className="section-title"><b>Projects</b></div>
            <ul>
              {jsonData.projects.map((proj, index) => (
                <div key={index} className="Ritem">
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
                    {/* {index > 0 && <br />} */}
                    <li>
                      <div className="item-title textGray mt-3">
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
                    ⇒
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
                {skillColumn3.map((skill, index) => (
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
  );
};

export default T4;