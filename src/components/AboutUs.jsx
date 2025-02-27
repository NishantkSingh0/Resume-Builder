import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

const developers = [
  {
    name: "Nishant Singh",
    role: "Handled Frontend and backend processing",
    github: "Nishantksingh0",
    gitLink: "https://github.com/NishantkSingh0",
    linkedin: "Nishantksingh1",
    linLink: "https://www.linkedin.com/in/nishantksingh1",
    portfolio: "nishantksingh0.github.io/Portfolio",
    prtLink: "https://nishantksingh0.github.io/Portfolio/",
    email: "nishantsingh.talk@gmail.com",
  },
  {
    name: "Amisha Pal",
    role: "Handled Designing All Templates",
    github: "Amisha",
    gitLink: "#",
    linkedin: "Amisha",
    linLink: "#",
    portfolio: "Amisha.dev",
    prtLink: "#",
    email: "Amisha@gmail.com",
  },
  {
    name: "Ankush Kumar",
    role: "Handled Written Works of project",
    github: "Ankush201109",
    gitLink: "https://github.com/Ankush201109",
    linkedin: "Ankush-kumar-505318231",
    linLink: "https://www.linkedin.com/in/ankush-kumar-505318231",
    portfolio: "Ankush.dev",
    prtLink: "#",
    email: "akbahot2004@gmail.com",
  },
  {
    name: "Nisha Mandal",
    role: "Enhanced UI by adding Nightmode's and Other essential components",
    github: "Nisha",
    gitLink: "#",
    linkedin: "Nisha",
    linLink: "#",
    portfolio: "Nisha.dev",
    prtLink: "#",
    email: "Nisha@gmail.com",
  },
];

function AboutUs() {
  return (
    <div className="min-h-screen text-gray-100 py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-500"><i className="fas fa-user-alt"/> About Us</h1>

      <div className="w-full max-w-4xl flex flex-col space-y-6">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="w-full bg-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{ minWidth: "33%" }} 
          >
            <div className="bg-blue-600 text-xl font-bold p-3 rounded-2xl mb-3">
              {dev.name}
            </div>

            <p className="text-green-700 mb-6 font-semibold">{dev.role}</p>

            <div className="flex flex-col space-y-4">
              <div className="flex justify-center items-center space-x-10 ml-32">
                <div className="flex items-center space-x-2 text-gray-700 font-semibold w-1/2 justify-start">
                  <FaGithub className="text-lg" />
                  <a href={dev.gitLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{dev.github}</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 font-semibold w-1/2 justify-start">
                  <FaLinkedin className="text-lg" />
                  <a href={dev.linLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{dev.linkedin}</a>
                </div>
              </div>

              {/* Row 2: Portfolio & Email */}
              <div className="flex justify-center items-center space-x-10 mt-2 ml-32">
                <div className="flex items-center space-x-2 text-gray-700 font-semibold w-1/2 justify-start">
                  <FaGlobe className="text-lg" />
                  <a href={dev.portfolio} target="_blank" rel="noopener noreferrer" className="hover:underline">{dev.portfolio}</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 font-semibold w-1/2 justify-start">
                  <FaEnvelope className="text-lg" />
                  <a href={`mailto:${dev.email}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{dev.email}</a>
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
