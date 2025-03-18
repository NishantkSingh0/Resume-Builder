import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";
import ExpandButton from './ExpandButton.jsx'

const developers = [
  {
    name: "Nishant Singh",
    //  "Developed and integrated frontend and backend systems, Proposed innovative project ideas with structured workflows, Researched high-rated resumes for optimization, Analyzed ATS algorithms for effective resume selection."
    role: "Handled Frontend and backend processing",
    github: "Nishantksingh0",
    gitLink: "https://github.com/NishantkSingh0",
    linkedin: "Nishantksingh1",
    linLink: "https://www.linkedin.com/in/nishantksingh1",
    portfolio: "Nishantksingh0",
    prtLink: "https://nishantksingh0.github.io",
    email: "nishantsingh.talk",
    emailLink: "mailto:nishantsingh.talk@gmail.com"
  },
  {
    name: "Amisha Pal",
    role: "Handled Designing All Templates",
    github: "Amisha-Pal",
    gitLink: "https://github.com/Amisha-Pal",
    linkedin: "amisha-pal-70",
    linLink: "https://www.linkedin.com/in/amisha-pal-703493328/",
    portfolio: "Amisha.dev",
    prtLink: "",
    email: "amishapal992",
    emailLink: "mailto:amishapal9927@gmail.com"
  },
  // {
  //   name: "Ankush Kumar",
  //   role: "Handled Written Works of project",
  //   github: "Ankush2011",
  //   gitLink: "https://github.com/Ankush201109",
  //   linkedin: "Ankush-kumar-5",
  //   linLink: "https://www.linkedin.com/in/ankush-kumar-505318231",
  //   portfolio: "Ankush.dev",
  //   prtLink: "",
  //   email: "akbahot2004",
  //   emailLink: "mailto:akbahot2004@gmail.com"
  // },
  // {
  //   name: "Nisha Mandal",
  //   role: "Enhanced UI by adding Nightmode's and Other essential components",
  //   github: "NishaKumari92",
  //   gitLink: "https://github.com/NishaKumari9279",
  //   linkedin: "nisha-kumari-59",
  //   linLink: "https://www.linkedin.com/in/nisha-kumari-598611344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   portfolio: "Nisha.dev",
  //   prtLink: "",
  //   email: "nishakumari92",
  //   emailLink: "mailto:nishakumari927979@gmail.com"
  // },
];

function AboutUs() {
  return (
    <div className="min-h-screen text-gray-100 py-12 px-6 flex flex-col items-center dark:bg-slate-900">
      <div>
        <h1 className="text-2xl font-extrabold text-center mb-2 text-gray-500 md:text-3xl dark:text-amber-300"><i className="fas fa-user-alt"/> About Us</h1>
        <div className="w-[80%] h-1 bg-gray-500 mx-auto mb-10 mt-1 rounded dark:bg-amber-300"></div>
      </div>
      <div className="w-full max-w-4xl flex flex-col space-y-6">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="w-full bg-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:bg-slate-800"
            style={{ minWidth: "33%" }} 
          >
            <div className="flex items-center bg-blue-600 text-xl font-bold p-3 rounded-2xl mb-3">
              <div className="flex items-center justify-center flex-1">
                {dev.name}
                {dev.name === "Nishant Singh" && <ExpandButton
                  content="/resume-builder-web-application/BinaryBunch.jpeg"
                  message="Secured 3rd rank in University 24hr Hackathon (TechWizard) on"
                  linkText="Proctoring System"
                  linkUrl="https://github.com/NishantkSingh0/Proctoring-System"
                />}
              </div>
            </div>


            <p className="text-green-700 mb-6 font-semibold dark:text-blue-300">{dev.role} 
              {/* <ExpandButton
                content=" ... "
                message=" 
                      <ul>
                        <li>Developed and integrated frontend and backend systems</li>
                        <li>Proposed innovative project ideas with structured workflows,</li>
                        <li>Researched high-rated resumes for optimization</li>
                        <li>Analyzed ATS algorithms for effective resume selection.</li>
                      <ul>"
              /> */}
            </p>

            <div className="flex flex-col items-center space-y-4 px-4 md:px-32">
              <div className="flex flex-col md:flex-row justify-between w-full max-w-2xl space-y-4 md:space-y-0 md:space-x-10">
                <div className="flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300">
                  <FaGithub className="text-lg" />
                  <a href={dev.gitLink} onClick={(e) => { if (!dev.gitLink) e.preventDefault(); }}  target="_blank" rel="noopener noreferrer" className="hover:underline">{dev.github}</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300">
                  <FaLinkedin className="text-lg" />
                  <a href={dev.linLink} onClick={(e) => { if (!dev.linLink) e.preventDefault(); }}  target="_blank" rel="noopener noreferrer" className="hover:underline">{dev.linkedin}</a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between w-full max-w-2xl space-y-4 md:space-y-0 md:space-x-10">
                <div className="flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300">
                  <FaGlobe className="text-lg" />
                  <a href={dev.prtLink} onClick={(e) => { if (!dev.prtLink) e.preventDefault(); }}  target="_blank" rel="noopener noreferrer" className="hover:underline">{dev.portfolio}</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300">
                  <FaEnvelope className="text-lg" />
                  <a href={dev.emailLink} onClick={(e) => { if (!dev.emailLink) e.preventDefault(); }}  target="_blank" rel="noopener noreferrer" className="hover:underline">{dev.email}</a>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
