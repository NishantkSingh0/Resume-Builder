import React, { useState } from 'react';
import { Check, Plus, ChevronRight, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import Suggestions from "./Suggestions";

const GetInfo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [NextError, setNextError] = useState(false);
  const navigate = useNavigate();

  const [ExampleJsonData, setExampleJsonData] = useState({
    contactInfo: {
      fullName: "Nishant kumar",
      phoneNumber: "9217290469",
      emailAddress: "nishantsingh.talk@gmail.com",
      linkedin: "nishantksingh1",
      portfolio: "nishantksingh0.github.io",
      jobTitle: "Data Scientist",
      Languages: "English, Hindi, French",
      Location: "Haridwar (Uttrakhand)"
    },
    skills: {
      hardSkills: "TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face, C/C++, Java, JavaScript, React",
      softSkills: "TeamWork, Problem-Solving, Leadership, Critical thinking, Communication, Creativity"
    },
    workExperience: [
      {
        jobTitle: "Data scientist",
        companyName: "Onlei tech",
        WorkDuration: "Dec-2024 to Mar-2025",
        keyAchievements: "Learn to visualize patterns from data using matplotlib and Built several DL models"
      },
      {
        jobTitle: "Python engineer",
        companyName: "Microsoft",
        WorkDuration: "May-2024 to Jul-2024",
        keyAchievements: "Learn to use python in NLP tasks to take advantages of LLM"
      }
    ],
    projects: [
      {
        projectTitle: "Transformer based translation model",
        toolsTechUsed: "Tensorflow, Trasformer architecture, NumPy, WMT Translation dataset"
      },
      {
        projectTitle: "Exam Proctoring system",
        toolsTechUsed: "React, Flask, OpenCV, NumPy, Mediapipe, Pillow, WebSocket, ThreadPool"
      },
      {
        projectTitle: "Persion bounding box detection",
        toolsTechUsed: "OpenCV, Json, Tensorflow, Pandas, Matplotlib, NumPy"
      }
    ],
    education: [
      {
        institutionName: "Haridwar University",
        degreeName: "Batchelor in Computer application",
        graduationYear: "2023 - 2026",
        currentSGPA: "8"
      },
      {
        institutionName: "Vidya Mandir Sec-5 (Haridwar)",
        degreeName: "Primary/Secondary",
        graduationYear: "2021 - 2023",
        currentSGPA: "8"
      }
    ],
    certificates: [
      {
        certificateName: "Azure AI Engineer association",
        courseDuration: "2 month ",
        providerName: "Microsoft"
      },
      {
        certificateName: "C/C++",
        courseDuration: "2 Month",
        providerName: "Cad Planet"
      },
      {
        certificateName: "DataScientist Internship",
        courseDuration: "2 Month",
        providerName: "Onlei Tech"
      },
      {
        certificateName: "Intro To responsive AI",
        courseDuration: "1 Month",
        providerName: "SimpliLearn"
      },
      {
        certificateName: "Bits & byts of computer",
        courseDuration: "1 Month",
        providerName: "Coursera"
      },
    ],
    Description:"Passionate AI developer & backend specialist with expertise in deep learning, computer vision, NLP, and transformers, focusing on building models from scratch. Proficient in React, frontend design, Flask, and Django, enabling seamless AI integration into real world applications. Developed and deployed 22+ projects, showcased on GitHub & Kaggle. Always eager to solve complex challenges and innovate in AI & software development.",
    selectedTemplateEx: "1" 
  });
  

  const [formData, setFormData] = useState({
    contactInfo: {
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      linkedin: '',
      portfolio: '',
      jobTitle: '',
      Languages: '',
      Location: ''
    },
    skills: {
      hardSkills: '',
      softSkills: '',
    },
    workExperience: [{
      jobTitle: '',
      companyName: '',
      WorkDuration: '',
      keyAchievements: ''
    }],
    projects: [{
      projectTitle: '',
      toolsTechUsed: ''
    }],
    education: [{
      institutionName: '',
      degreeName: '',
      graduationYear: '',
      currentSGPA: ''
    }],
    certificates: [{
      certificateName: '',
      courseDuration: '',
      providerName: ''
    }],
    Description:'',
    selectedTemplate: 0
  });
  
  const ResumeDescriptions=[
    `A passionate ${formData.contactInfo.jobTitle} graduated from ${formData.education[0]?.institutionName}, with expertise in ${formData.skills.hardSkills}honed through 8+ projects. Skilled at leveraging cutting-edge tools to deliver innovative solutions. Proficient in ${formData.contactInfo.Languages}and recognized for exceptional ${formData.skills.softSkills}.`,
    `A results-driven ${formData.contactInfo.jobTitle} Graduated from ${formData.education[0]?.institutionName}, mastered in ${formData.skills.hardSkills}Built over 10+ real-world projects. Adept in ${formData.contactInfo.Languages}and highly valued for strong ${formData.skills.softSkills}& creativity that drive Collaborative team work.`,
    `A dedicated ${formData.contactInfo.jobTitle} graduated from ${formData.education[0]?.institutionName}, specializing in ${formData.skills.hardSkills}with hands-on experience in building 12+ impactful projects. Fluent in ${formData.contactInfo.Languages}with proven strengths in ${formData.skills.softSkills}bringing creativity and precision to every challenge.`,
    `A skilled ${formData.contactInfo.jobTitle} Graduated from ${formData.education[0]?.institutionName}, with expertise in ${formData.skills.hardSkills}built over 22+ practical projects. Familiar with ${formData.contactInfo.Languages}and known for outstanding ${formData.skills.softSkills}that foster innovation and collaboration.`,
    `An innovative ${formData.contactInfo.jobTitle} graduated from ${formData.education[0]?.institutionName}, with proficiency in ${formData.skills.hardSkills}demonstrated through 13+ diverse projects. Well-versed in ${formData.contactInfo.Languages}and appreciated for exceptional ${formData.skills.softSkills}in dynamic work environments.`,
  ]

  const [completedSteps, setCompletedSteps]=useState(new Set());
  const [isInvalidMob,setIsInvalidMob]=useState(false);
  const [isInvalidMail,setIsInvalidMail]=useState(false);
  const [isExampleProcessing,setIsExampleProcessing]=useState(false);
  const [isInvalidWDuration,setIsInvalidWDuration]=useState(false);
  const [isInvalidGDuration,setIsInvalidGDuration]=useState(false);
  const [isInvalidSGPA,setIsInvalidSGPA]=useState(false);
  const [isOpen, setIsOpen]=useState(false);
  const [showInput, setShowInput] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  
  const AboutTemps=["Simpler & Structured","Linear & Classic","Colourfull & Attractive","Colourful & Highly Designed","Simpler & Linear","Designed & Attractive","Highly Simpler & Classic"]
  
  const steps = [
    { title: 'Begin with your contact details', key: 'Contact Info' },
    { title: 'Showcase your skills', key: 'Skills' },
    { title: 'Share your work experience', key: 'Work Experience' },
    { title: 'Highlight your top projects', key: 'Projects' },
    { title: 'Demonstrate your knowledge', key: 'Education' },
    { title: 'Add your achieved certifications', key: 'Certificates' },
    { title: 'Decribe about you', key: 'Description' },
    { title: 'Choose a template that suits you best', key: 'Template' }
  ];
  
  const HandleExampleProcessing = () => {
    setIsExampleProcessing(true);
    const newSet = new Set();
    for (let i = 0; i < 8 - 1; i++) {
      newSet.add(i);
    }
    setCompletedSteps(newSet);
  };

  const handleVerify = (e) => {
    if (e.key === "Enter" || e.key=="Tab") {  
      if (pin === "147895") {
        toast.success("Authorized", {
          duration: 3000,
          position: "top-right",
        });
        setError(false)
        setShowInput(false)
        HandleExampleProcessing(); 
      }else{
        toast.error("Pin is incorrect. Authorization declined!", {
          duration: 3000,
          position: "top-right",
        });
        setError(true);
      }
    }
  };
  
  const handleInputChange = (section, field=null, value, index = null) => {
    setFormData(prev => {
      const newData = { ...prev };
      if (index !== null && field!=null) {
        newData[section][index][field] = value;
      } else if (typeof newData[section] === 'object' && !Array.isArray(newData[section]) && field!=null) {
        newData[section][field] = value;
      } else {
        newData[section]=value;
      }
      return newData;
    });
  };

  const addNewItem = (section) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], section === 'workExperience' ? {
        jobTitle: '',
        companyName: '',
        WorkDuration: '',
        keyAchievements: ''
      } : section === 'projects' ? {
        projectTitle: '',
        toolsTechUsed: ''
      } : section === 'education' ? {
        institutionName: '',
        degreeName: '',
        graduationYear: '',
        currentSGPA: ''
      } : {
        certificateName: '',
        courseDuration: '',
        providerName: ''
      }]
    }));
  };

  const handleNext = () => {
    const Fields = {
      0: [
        formData.contactInfo.fullName,
        formData.contactInfo.phoneNumber,
        formData.contactInfo.emailAddress,
        formData.contactInfo.linkedin,
        formData.contactInfo.portfolio,
        formData.contactInfo.jobTitle,
      ],
      1: [
        formData.skills.hardSkills,
        formData.skills.softSkills,
        formData.contactInfo.Languages,
        formData.contactInfo.Location,
      ],
      2: formData.workExperience.length > 0 ? formData.workExperience.map(exp => [exp.jobTitle, exp.companyName, exp.WorkDuration, exp.keyAchievements]) : [[]],
      3: formData.projects.length > 0 ? formData.projects.map(proj => [proj.projectTitle, proj.toolsTechUsed]) : [[]],
      4: formData.education.length > 0 ? formData.education.map(edu => [edu.institutionName, edu.degreeName, edu.graduationYear, edu.currentSGPA]) : [[]],
      5: formData.certificates.length > 0 ? formData.certificates.map(cert => [cert.certificateName, cert.courseDuration, cert.providerName]) : [[]],
      6: [formData.Description],
      7: [formData.selectedTemplate],
    };
  
    if (!(currentStep in Fields)) {
      toast.error("Invalid step provided.", {
        duration: 3000, 
        position: "top-right",
      });
      return;
    }
    
    const areFieldsValid = (fields) => fields.every((field) => typeof field === "string" && field.trim() !== "");
    setNextError(false);
    for (let step = 0; step <= currentStep; step++) {
      const requiredFields = Fields[step].flat();
      if (requiredFields.length > 0 && !areFieldsValid(requiredFields) && !isExampleProcessing) {
        setNextError(true)
        toast.error("Please fill out all required fields From 'Contact Info' before proceeding further.", {
          duration: 3000,
          position: "top-right",
        });
        setTimeout(() => {
          setNextError(false);
        }, 4000);
        return;
      }
    }
  
    setCompletedSteps((prev) => new Set(prev.add(currentStep)));
  
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {          // its only validate if input current step is previously doned {if future step found to be next without filling  details it though error}
      for (let step = 0; step <= 6; step++) {
        const requiredFields = Fields[step].flat();
        if (requiredFields.length > 0 && !areFieldsValid(requiredFields) && !isExampleProcessing) {
          toast.error("Please complete all required fields before submitting.", {
            duration: 3000, 
            position: "top-right",
          });
          return;
        }
      }
  
      navigate('/Result');
      if (!isExampleProcessing){
        navigate('/Result');
        console.log("Form submitted:", formData);
    
        const jsonData = JSON.stringify(formData, null, 2);
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement("a");
        a.href = url;
        a.download = "resume_data.json";
        document.body.appendChild(a);
        a.click();
    
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }else{
        const jsonData = JSON.stringify(ExampleJsonData, null, 2);
        fetch("http://127.0.0.1:5000/upload", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(ExampleJsonData),
      })
      .then(response => response.json())
      .then(data => console.log("Success:", data))
      .catch(error => console.error("Error:", error));
      }
    }
  };
  

  const renderFormSection = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl mb-4 font-bold border-b-4 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400">Contact Information</h2>
              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">Full Name</label>
                <input
                  type="text"
                  placeholder='Your name'
                  className="w-full sm:p-2 sm:px-6 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  value={isExampleProcessing ? ExampleJsonData.contactInfo.fullName : formData.contactInfo.fullName}
                  onChange={(e) => {
                    if (!isExampleProcessing) { // Prevent changes when true
                      handleInputChange("contactInfo", "fullName", e.target.value);
                    }
                  }}
                />  
                <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">Phone Number</label>
                <input
                  type="number"
                  placeholder="9658XX1459"
                  className={`w-full sm:p-2 sm:px-6 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${isInvalidMob?"focus:ring-red-500":"focus:ring-blue-500"}  dark:bg-gray-800 dark:text-white dark:border-gray-600 
                  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                  value={isExampleProcessing ? ExampleJsonData.contactInfo.phoneNumber : formData.contactInfo.phoneNumber}
                  onChange={(e) => {
                    if (!isExampleProcessing) { 
                      handleInputChange("contactInfo", "phoneNumber", e.target.value)
                    }
                  }}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (!/^\d{10}$/.test(value) && !isExampleProcessing) {
                      toast.error("Phone number must be of 10 digits", { duration: 3000, position: "top-right" });
                      setIsInvalidMob(true);
                      e.target.focus(); 
                    }else{
                      setIsInvalidMob(false);
                    }
                  }}
                />
                <div class={`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${isInvalidMob? "bg-red-500":"bg-blue-500"}`}></div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">Email Address</label>
                <input
                  type="email"
                  placeholder="xyz231@gmail.com"
                  className={`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${isInvalidMail?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`}
                  value={isExampleProcessing ? ExampleJsonData.contactInfo.emailAddress : formData.contactInfo.emailAddress}
                  onChange={(e) => {
                    if (!isExampleProcessing) { 
                      handleInputChange("contactInfo", "emailAddress", e.target.value)
                    }
                  }}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (!/^\S+@\S+\.\S+\s*$/.test(value) && !isExampleProcessing) {
                      toast.error("Invalid email format!", { duration: 3000, position: "top-right" });
                      setIsInvalidMail(true);
                      e.target.focus(); 
                    }else{
                      setIsInvalidMail(false);
                    }
                  }}
                />
                <div className={`ml-4 w-0 h-1 rounded-full transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${isInvalidMail ? "bg-red-500" : "bg-blue-500"}`}>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">LinkedIn UserName</label>
                <input
                  type="text"
                  placeholder="xyz231"
                  className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  value={isExampleProcessing ? ExampleJsonData.contactInfo.linkedin : formData.contactInfo.linkedin}
                  onChange={(e) => {
                    if (!isExampleProcessing) { 
                      handleInputChange("contactInfo", "linkedin", e.target.value)
                    }
                  }}
                />
                <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">Portfolio URL / Github UserName</label>
                <input
                  type="text"
                  placeholder='Personal portfolio URL if have else add GitHub UserName'
                  className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  value={isExampleProcessing ? ExampleJsonData.contactInfo.portfolio : formData.contactInfo.portfolio}
                  onChange={(e) => {
                    if (!isExampleProcessing) { 
                      handleInputChange('contactInfo', 'portfolio', e.target.value)
                    }
                  }}
                />
                <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>

              <div className="space-y-2">
                <div className="peer w-full">
                  <Suggestions
                    label="Job Title"
                    placeholder="Data Scientist"
                    value={isExampleProcessing ? ExampleJsonData.contactInfo.jobTitle : formData.contactInfo.jobTitle}
                    onChange={(val) => {
                      if (!isExampleProcessing) {
                        handleInputChange('contactInfo', 'jobTitle', val)
                      }
                    }}
                    suggestions={["Data Scientist","Machine Learning Engineer","AI Researcher","Data Analyst","Software Engineer","Full Stack Developer","Backend Developer","Frontend Developer","DevOps Engineer","Cloud Architect","Cybersecurity Analyst","Database Administrator","Blockchain Developer","Computer Vision Engineer","NLP Engineer","Data Engineer","Big Data Engineer","Research Scientist","Product Manager","Project Manager","Scrum Master","Program Manager","Technical Program Manager","Operations Manager","IT Manager","Marketing Manager","Digital Marketing Specialist","SEO Specialist","Content Manager","Brand Manager","Sales Executive","Business Development Manager","Social Media Manager","Growth Hacker","UI/UX Designer","Graphic Designer","Product Designer","Visual Designer","Creative Director","Motion Graphics Designer","Financial Analyst","Accountant","Investment Banker","Business Analyst","Management Consultant","HR Manager","Recruiter","Legal Advisor","AI Ethics Researcher","Prompt Engineer","Data Privacy Consultant","Automation Engineer","Robotics Engineer","Sustainability Consultant","Technical Writer"]}
                    isMultiSuggestion={false}
                  />
                </div>
                <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">Skills</h2>

            <div className="space-y-2">
              <div className="peer">
                <Suggestions
                  label="Technical Skills"
                  placeholder="TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face, C/C++, Java, JavaScript, React"
                  value={isExampleProcessing ? ExampleJsonData.skills.hardSkills : formData.skills.hardSkills}
                  onChange={(val) => {
                    if (!isExampleProcessing) {
                      handleInputChange("skills", "hardSkills", val);
                    }
                  }}
                  suggestions={["Python", "C/C++", "LLM's" ,"Matplotlib" , "Java", "JavaScript", "TypeScript", "Golang", "Rust","Kotlin", "Swift", "PHP", "Ruby", "MATLAB","TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Hugging Face", "OpenCV","XGBoost", "LightGBM", "FastAI", "Transformers", "Stable Diffusion", "LangChain","HTML", "CSS", "Tailwind CSS", "React", "Next.js", "Vue.js", "Angular","Node.js", "Express.js", "Django", "Flask","MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Cassandra", "Firebase", "Supabase","Terraform", "Linux", "Bash Scripting","Apache Spark", "Hadoop", "Apache Kafka", "Airflow", "Pandas", "NumPy", "SQL", "ETL Pipelines","Computer Vision", "NLP", "Data Analysis", "Data Visualization", "Tableau","Power BI", "REST API", "GraphQL", "Microservices", "System Design","CI/CD", "Unit Testing", "Design Patterns", "OOP"]}
                />
              </div>
              <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
            </div>

              <div className="space-y-2">
                <div className="peer">
                  <Suggestions
                    label="Soft Skills"
                    placeholder="TeamWork, Problem-Solving, Leadership, Critical thinking, Communication"
                    value={isExampleProcessing ? ExampleJsonData.skills.softSkills : formData.skills.softSkills}
                    onChange={(val) => {
                      if (!isExampleProcessing) {
                        handleInputChange("skills", "softSkills", val);
                      }
                    }}
                    suggestions={["Teamwork","Problem-Solving","Leadership","Critical Thinking","Communication","Adaptability","Creativity","Emotional Intelligence","Time Management","Conflict Resolution","Decision Making","Active Listening","Collaboration","Work Ethic","Empathy","Interpersonal Skills","Stress Management","Responsibility","Negotiation","Patience","Flexibility","Positive Attitude","Self-Motivation","Networking","Constructive Feedback","Attention to Detail","Cultural Awareness","Public Speaking","Persuasion","Growth Mindset","Self-Discipline","Accountability","Open-Mindedness","Conflict Management","Professionalism","Emotional Stability","Respectfulness","Customer Service","Strategic Thinking"]}
                  />
                </div>
                <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>

              <div className="space-y-2">
                <div className="peer">
                  <Suggestions
                    label="Languages you are familiar with"
                    placeholder="English, Hindi, French"
                    value={isExampleProcessing ? ExampleJsonData.contactInfo.Languages : formData.contactInfo.Languages}
                    onChange={(val) => {
                      if (!isExampleProcessing) {
                        handleInputChange("contactInfo", "Languages", val);
                      }
                    }}
                    suggestions={["Hindi","English","Spanish","Bengali","Portuguese","Russian","Japanese","Punjabi","Marathi","Telugu","French","German","Tamil","Urdu"]}
                  />
                </div>
                <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>
              
              <div className="space-y-2">
                <div className="peer">
                  <Suggestions
                    label="YourLocation"
                    placeholder="Haridwar (UTTRAKHAND)"
                    value={isExampleProcessing ? ExampleJsonData.contactInfo.Location : formData.contactInfo.Location}
                    onChange={(val) => {
                      if (!isExampleProcessing) {
                        handleInputChange('contactInfo', 'Location', val);
                      }
                    }}
                    suggestions={["Haridwar (Uttarakhand)","Dehradun (Uttarakhand)","Rishikesh (Uttarakhand)","Nainital (Uttarakhand)","Delhi","New Delhi","Amritsar (Punjab)","Ludhiana (Punjab)","Jalandhar (Punjab)","Patiala (Punjab)","Mohali (Punjab)","Chennai (Tamil Nadu)","Coimbatore (Tamil Nadu)","Madurai (Tamil Nadu)","Tiruchirappalli (Tamil Nadu)","Salem (Tamil Nadu)","Hyderabad (Telangana)","Secunderabad (Telangana)","Warangal (Telangana)","Bengaluru (Karnataka)","Mysuru (Karnataka)","Mangalore (Karnataka)","Hubli (Karnataka)","Pune (Maharashtra)","Mumbai (Maharashtra)","Nagpur (Maharashtra)","Ahmedabad (Gujarat)","Gandhinagar (Gujarat)","Surat (Gujarat)","Noida (Uttar Pradesh)","Lucknow (Uttar Pradesh)","Ghaziabad (Uttar Pradesh)","Gurugram (Haryana)","Faridabad (Haryana)","Panchkula (Haryana)"]}
                    isMultiSuggestion={false}
                  />
                </div>
                <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>
          </div>
        );

      case 2:
        if (!isExampleProcessing){
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400">Work Experience</h2>
              <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add atleast 2 work Experiences from previous companies. as internship or full time job</p>
              {formData.workExperience.map((exp, index) => (
                <div key={index} className="p-4 border-2 rounded space-y-4 dark:border-slate-700">
                  <h3 className="font-medium text-lg dark:text-slate-200">Experience {index + 1}</h3>

                    <div className="space-y-2">
                      <div className='peer'>
                        <Suggestions 
                          label="Job title"
                          placeholder='Data Scientist'
                          value={exp.jobTitle}
		                      onChange={(val) => handleInputChange('workExperience', 'jobTitle', val, index)}
                          suggestions={["Python engineer","Data Scientist","Machine Learning Engineer","AI Researcher","Data Analyst","Software Engineer","Full Stack Developer","Backend Developer","Frontend Developer","DevOps Engineer","Cloud Architect","Cybersecurity Analyst","Database Administrator","Blockchain Developer","Computer Vision Engineer","NLP Engineer","Data Engineer","Big Data Engineer","Research Scientist","Product Manager","Project Manager","Scrum Master","Program Manager","Technical Program Manager","Operations Manager","IT Manager","Marketing Manager","Digital Marketing Specialist","SEO Specialist","Content Manager","Brand Manager","Sales Executive","Business Development Manager","Social Media Manager","Growth Hacker","UI/UX Designer","Graphic Designer","Product Designer","Visual Designer","Creative Director","Motion Graphics Designer","Financial Analyst","Accountant","Investment Banker","Business Analyst","Management Consultant","HR Manager","Recruiter","Legal Advisor","AI Ethics Researcher","Prompt Engineer","Data Privacy Consultant","Automation Engineer","Robotics Engineer","Sustainability Consultant","Technical Writer","Software Intern","Data Science Intern","Marketing Intern","HR Intern","Operations Intern","Sales Intern","Content Writing Intern","UI/UX Design Intern","Graphic Design Intern","Customer Support Executive","Technical Support Executive","Office Assistant","Data Entry Operator","Junior Software Developer","Trainee Engineer","Research Intern","Quality Assurance Intern","Product Intern","Junior Data Analyst","Telecaller","Field Sales Executive","Backend Support Staff","Campus Ambassador","Freelance Content Writer","Part-time Graphic Designer","Online Tutor","Lab Assistant","Clerical Staff","Receptionist","Front Desk Executive"]}
                          isMultiSuggestion={false} 
                        />
                      </div>
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <div className="peer">
                        <Suggestions
                          label="Company Name"
                          placeholder='Onlei Teach'
                          value={exp.companyName}
                          onChange={(val) => handleInputChange('workExperience', 'companyName', val, index)}
                          suggestions={["OnleiTech","Rubico IT","Tata Consultancy Services","Infosys","HCL Technologies","Wipro","Tech Mahindra","Cognizant Technology Solutions","IBM India","Larsen & Toubro Infotech","Mindtree","Mphasis","Oracle Financial Services Software","Redington India","Ingram Micro India","Dell India","SAP India","Capgemini India","Accenture India","Cisco Systems India","Amazon Development Centre India","Google India","Microsoft India","Adobe Systems India","Intel Technology India","HP India","Siemens India","Samsung R&D Institute India","Infosys BPM","Wipro Technologies","HCL Infosystems","Tech Mahindra Business Services","L&T Technology Services","Persistent Systems","Hexaware Technologies","Zensar Technologies","Birlasoft","NIIT Technologies","Cyient","Sonata Software","Mindtree Consulting","Mastek","Sasken Technologies","Polaris Consulting & Services","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge","eClerx Services","Firstsource Solutions","L&T Infotech","Syntel","QuEST Global","KPIT Technologies","Nucleus Software Exports","Oracle India","IBM Daksh","Dell International Services","Concentrix India","Genpact","EXL Service","WNS Global Services","Hinduja Global Solutions","Teleperformance India","Sutherland Global Services","Aegis Limited","Infosys McCamish Systems","TCS e-Serve","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Zoho Corporation","Freshworks","Paytm","Ola Cabs","Zomato","Swiggy","Byju's","Flipkart","Snapdeal","MakeMyTrip","PolicyBazaar","Delhivery","InMobi","Quikr","Hike","Naukri.com","BookMyShow","BigBasket","Lenskart","OYO Rooms","CureFit","Razorpay","PhonePe","Myntra","ShopClues","UrbanClap","Practo","1mg","CarDekho","Housing.com","Pepperfry","Nykaa","Dream11","Udaan","Meesho","ShareChat","Dunzo","BlackBuck","Rivigo","Infra.Market","Moglix","OfBusiness","UpGrad","Unacademy","Vedantu","WhiteHat Jr.","Eruditus","Simplilearn","Toppr","Lido Learning","Classplus","Testbook","Doubtnut","Embibe","Khatabook","OkCredit","BharatPe","CRED","Groww","Zerodha","Smallcase","INDmoney","CoinSwitch Kuber","WazirX","Instamojo","Mswipe","Pine Labs","Chargebee","Capillary Technologies","WebEngage","MoEngage","Netcore Solutions","BrowserStack","Postman","Wingify","FusionCharts","HackerRank","HackerEarth","InterviewBit","Scaler","Coding Ninjas","GeeksforGeeks","Tata Elxsi","Cyient","Persistent Systems","Zensar Technologies","Sonata Software","Mastek","Sasken Technologies","Mindtree","L&T Technology Services","Birlasoft","Hexaware Technologies","NIIT Technologies","Mphasis","QuEST Global","KPIT Technologies","Nucleus Software Exports","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge"]}
                          isMultiSuggestion = {false}
                        />
                      </div>
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Work Duration</label>
                      <input
                        type="text"
                        placeholder="Dec-2023 to Mar-2025"
                        className={`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${isInvalidWDuration?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`}
                        value={exp.WorkDuration}
                        onChange={(e) => handleInputChange("workExperience", "WorkDuration", e.target.value, index)}
                        onBlur={(e) => {
                          const value = e.target.value;
                          if (!/^\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-(\d{2,4})\s*to\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-(\d{2,4})\s*$/.test(value)) {
                            toast.error("Invalid format!\n Use as Dec-2023 to Mar-2025", { duration: 3000, position: "top-right" });
                            e.target.focus();
                            setIsInvalidWDuration(true);
                          }else{
                            setIsInvalidWDuration(false);
                          }
                        }}
                      />
                      <div class={`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${isInvalidWDuration?"bg-red-500":"bg-blue-500"}`}></div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Key Achievements <span className='text-slate-600 ml-1'> (What you learned there)</span></label>
                      <input
                        type="text"
                        placeholder='Learn to visualize patterns from data using matplotlib and Built several DL models'
                        className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        value={exp.keyAchievements}
                        onChange={(e) => handleInputChange('workExperience', 'keyAchievements', e.target.value, index)}
                      />
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>
                </div>
              ))}
              <button
                onClick={() => addNewItem('workExperience')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <Plus size={16} /> Add Experience
              </button>
            </div>
          );
        }else{
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400">Work Experience</h2>
              <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add atleast 2 work Experiences from previous companies. as internship or full time job</p>
              {ExampleJsonData.workExperience.map((exp, index) => (
                <div key={index} className="p-4 border-2 rounded space-y-4 dark:border-slate-700">
                  <h3 className="font-medium text-lg dark:text-slate-200">Experience {index + 1}</h3>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Job Title</label>
                      <input
                        type="text"
                        className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600" 
                        value={exp.jobTitle}
                      />
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Company Name</label>
                      <input
                        type="text"
                        className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        value={exp.companyName}
                      />
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Work Duration</label>
                      <input
                        type="text"
                        className={`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600`}
                        value={exp.WorkDuration}
                      />
                      <div class={`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]`}></div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Key Achievements</label>
                      <input
                        type="text"
                        className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        value={exp.keyAchievements}
                      />
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>
                </div>
              ))}
              <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                title="You can't add Experiences because it is predefined data formate" 
              >
                ❌ Add Experience
              </button>
            </div>
          );
        }

      case 3:
        if (!isExampleProcessing){
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400">Projects</h2>
              <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add atleast 3 projects which you did in your academics</p>
              {formData.projects.map((project, index) => (
                <div key={index} className="p-4 border-2 rounded space-y-4 dark:border-slate-700">
                  <h3 className="font-medium text-lg dark:text-slate-200">Project {index + 1}</h3>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Project Title</label>
                      <input
                        type="text"
                        placeholder='Transformer based translation model from scratch'
                        className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        value={project.projectTitle}
                        onChange={(e) => handleInputChange('projects', 'projectTitle', e.target.value, index)}
                      />
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <div className="peer">
                        <Suggestions
                          label="Tools/Tech Used"
                          placeholder='Tensorflow, NumPy, Pandas, Matplotlib, Multi30k Dataset, ModelSubclassing'
			                    value={project.toolsTechUsed}
                          onChange={(val) => handleInputChange('projects', 'toolsTechUsed', val, index)}
                          suggestions={["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "FastAI","NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Altair", "Statsmodels", "SciPy","NLTK", "SpaCy", "Transformers", "Gensim", "BERT", "GPT", "Word2Vec", "TF-IDF", "Llama","OpenCV", "Pillow", "Albumentations", "MMDetection", "Detectron2", "YOLO", "MediaPipe","MNIST Dataset", "CIFAR-10", "CIFAR-100", "ImageNet", "COCO Dataset", "Multi30k Dataset","Human Parsing Dataset", "HuggingFace Datasets", "UCI Repository","Transfer Learning", "Model Subclassing", "Data Augmentation", "Feature Engineering", "Ensemble Learning", "Hyperparameter Tuning", "Cross Validation", "Grid Search", "Early Stopping","Apache Spark", "Hadoop", "Airflow", "Kafka", "Snowflake", "BigQuery", "ETL Pipelines","AWS", "Azure", "Google Cloud Platform", "IBM Cloud", "Oracle Cloud", "Firebase","Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Prometheus", "Grafana","MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "Elasticsearch", "Cassandra","Django", "Flask", "FastAPI", "Express.js", "Spring Boot", "Node.js","React", "Vue.js", "Angular", "Next.js", "Tailwind CSS", "Bootstrap", "SASS", "Material UI","Python", "Java", "C++", "C", "JavaScript", "TypeScript", "Go", "Rust", "R", "Julia", "SQL","Git", "GitHub", "GitLab", "Bitbucket","Tableau", "Power BI", "Looker", "Google Data Studio","Jupyter Notebook", "Google Colab", "VS Code", "Anaconda", "PyCharm", "Postman","REST API", "GraphQL", "gRPC", "NGINX", "Apache","PyTest", "Selenium", "Cypress", "JUnit", "Postman","BeautifulSoup", "Scrapy", "LangChain", "Streamlit", "Gradio", "Dash", "MLflow","Weights & Biases", "HuggingFace Hub", "OpenAI API", "Google API", "Cloud Functions"]}
                        />
                      </div>
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>
                </div>
              ))}
              <button
                onClick={() => addNewItem('projects')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <Plus size={16} /> Add Project
              </button>
            </div>
          );
        }else{
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400">Projects</h2>
              <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add atleast 3 projects which you did in your academics</p>
              {ExampleJsonData.projects.map((project, index) => (
                <div key={index} className="p-4 border-2 rounded space-y-4 dark:border-slate-700">
                  <h3 className="font-medium text-lg dark:text-slate-200">Project {index + 1}</h3>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Project Title</label>
                      <input
                        type="text"
                        className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        value={project.projectTitle}
                      />
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Tools/Tech Used</label>
                      <input
                        type="text"
                        className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        value={project.toolsTechUsed}
                      />
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>
                </div>
              ))}
              <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                title="You can't add Projects because it is predefined data formate" 
              >
                ❌ Add Project
              </button>
            </div>
          );
        }

        case 4:
          if (!isExampleProcessing){
            return (
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">Education</h2>
                <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add your pre/post graduations on different sections (Consider listing your most recent Qualifications first)</p>
                {formData.education.map((edu, index) => (
                  <div key={index} className="p-4 border-2 rounded space-y-4 dark:border-slate-700">
                    <h3 className="font-medium text-lg dark:text-slate-200">Education {index + 1}</h3>

                    <div className="space-y-2">
                      <div className="peer">
                        <Suggestions
                          label="Institution Name"
                          placeholder="Haridwar University"
                          value={edu.institutionName}
		                      onChange={(val) => handleInputChange('education', 'institutionName', val, index)}
                          suggestions={["Haridwar University (HU)","Vidya Mandir Sector-5 BHEL (Haridwar)","Collage of Engineering roorkee (COER)","Roorkee institute of technology (RIT)","Phonix (Roorkee)","","IIT Gandhinagar","IIT Patna","IIT Bhubaneswar","IIT Mandi","IIT Jodhpur","IIT Ropar","IIT Palakkad","IIT Tirupati","IIT Dhanbad (ISM)","NIT Calicut","NIT Kurukshetra","NIT Silchar","NIT Hamirpur","NIT Jalandhar","NIT Durgapur","NIT Jaipur (MNIT)","NIT Nagpur (VNIT)","NIT Surat (SVNIT)","NIT Meghalaya","IIIT Allahabad","IIIT Pune","IIIT Lucknow","IIIT Bhubaneswar","IIIT Kancheepuram","IIIT Gwalior","IIITDM Jabalpur","IIIT Vadodara","Indian Statistical Institute (ISI)","Indian Institute of Information Technology Design & Manufacturing (IIITDM Kancheepuram)","Homi Bhabha National Institute","Indian Institute of Science Education and Research (IISER Pune)","IISER Mohali","IISER Kolkata","IISER Bhopal","IISER Thiruvananthapuram","IISER Tirupati","IISER Berhampur","Delhi University (DU)","Banaras Hindu University (BHU)","Jawaharlal Nehru University (JNU)","Jamia Millia Islamia","Aligarh Muslim University (AMU)","University of Calcutta","University of Mumbai","University of Hyderabad","Osmania University","Anna University","Visvesvaraya Technological University (VTU)","Panjab University","Kurukshetra University","Gujarat Technological University","Guru Nanak Dev University","Pondicherry University","Bharathiar University","Savitribai Phule Pune University (SPPU)","Rajiv Gandhi University of Health Sciences","Mangalore University","Symbiosis International University","Shiv Nadar University","Ashoka University","OP Jindal Global University","Amity University","Lovely Professional University (LPU)","Chandigarh University","MIT World Peace University","SRM Institute of Science and Technology","VIT Vellore","VIT Chennai","Kalinga Institute of Industrial Technology (KIIT)","Birla Institute of Technology Mesra (BIT Mesra)","Indian Institute of Foreign Trade (IIFT)","Narsee Monjee Institute of Management Studies (NMIMS)","Indian School of Business (ISB)","XLRI Jamshedpur","SP Jain Institute of Management and Research","IIM Ahmedabad","IIM Bangalore","IIM Calcutta","IIM Lucknow"]}
                          isMultiSuggestion={false}
                        />
                      </div>
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>
                
                    <div className="space-y-2">
                      <div className="peer">
                        <Suggestions
                          label="Degree Name"
                          placeholder="Batchelor in computer application (BCA)"
                          value={edu.degreeName}
                          onChange={(val) => handleInputChange('education', 'degreeName', val, index)}
                          suggestions={["Bachelor of Science (B.Sc)","Primary/Secondary","Bachelor of Technology (B.Tech)","Bachelor of Engineering (B.E)","Bachelor of Arts (B.A)","Bachelor of Commerce (B.Com)","Bachelor of Computer Applications (BCA)","Bachelor of Business Administration (BBA)","Bachelor of Fine Arts (BFA)","Bachelor of Design (B.Des)","Bachelor of Architecture (B.Arch)","Bachelor of Pharmacy (B.Pharm)","Bachelor of Laws (LLB)","Bachelor of Hotel Management (BHM)","Bachelor of Social Work (BSW)","Bachelor of Education (B.Ed)","Bachelor of Physical Education (B.P.Ed)","Bachelor of Science in Nursing (B.Sc Nursing)","Master of Science (M.Sc)","Master of Technology (M.Tech)","Master of Engineering (M.E)","Master of Computer Applications (MCA)","Master of Arts (M.A)","Master of Commerce (M.Com)","Master of Business Administration (MBA)","Master of Fine Arts (MFA)","Master of Design (M.Des)","Master of Architecture (M.Arch)","Master of Pharmacy (M.Pharm)","Master of Laws (LLM)","Master of Social Work (MSW)","Master of Education (M.Ed)","Master of Physical Education (M.P.Ed)","Master of Science in Nursing (M.Sc Nursing)","Master of Public Health (MPH)","Master of Data Science (MDS)","Master of Finance (MFin)","Master of Management Studies (MMS)","Master of Computer Science (MCS)"]}
                          isMultiSuggestion={false}
                        />
                      </div>
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>
                
                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Graduation duration</label>
                      <input
                        type="text"
                        placeholder="2023 - 2026"
                        className={`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${isInvalidGDuration?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`}
                        value={edu.graduationYear}
                        onChange={(e) => handleInputChange("education", "graduationYear", e.target.value, index)}
                        onBlur={(e) => {
                          const value = e.target.value;
                          if (!/^\s*(\d{2,4})\s*-\s*(\d{2,4})\s*$/.test(value)) {
                            toast.error("Invalid format! \nUse as 2023 - 2026", { duration: 3000, position: "top-right" });
                            e.target.focus(); 
                            setIsInvalidGDuration(true);
                          }else{
                            setIsInvalidGDuration(false)
                          }
                        }}
                      />
                      <div class={`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${isInvalidGDuration?"bg-red-500":"bg-blue-500"}`}></div>
                    </div>
                      
                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Current SGPA</label>
                      <input
                        type="text"
                        placeholder='?? / 10'
                        className={`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${isInvalidSGPA?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`}
                        value={edu.currentSGPA}
                        onChange={(e) => handleInputChange('education', 'currentSGPA', e.target.value, index)}
                        onBlur={(e) => {
                          const value = e.target.value;
                          if (!/^\s*([0-9](\.\d{1})?|10(\.0)?)\s*$/.test(value)) {
                            toast.error("Invalid format! \nUse as 7 or 8.3 and less then 10", { duration: 3000, position: "top-right" });
                            e.target.focus(); 
                            setIsInvalidSGPA(true);
                          }else{
                            setIsInvalidSGPA(false);
                          }
                        }}
                      />
                      <div class={`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${isInvalidSGPA?"bg-red-500":"bg-blue-500"}`}></div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => addNewItem('education')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <Plus size={16} /> Add Education
                </button>
              </div>
            );
          }else{
            return (
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">Education</h2>
                <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add your pre/post graduations on different sections (Consider listing your most recent Qualifications first)</p>
                {ExampleJsonData.education.map((edu, index) => (
                  <div key={index} className="p-4 border-2 rounded space-y-4 dark:border-slate-700">
                    <h3 className="font-medium text-lg dark:text-slate-200">Education {index + 1}</h3>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Institution Name</label>
                      <input
                        type="text"
                        className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        value={edu.institutionName}
                      />
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>
                
                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Degree Name</label>
                      <input
                        type="text"
                        placeholder='Bachelor in computer application'
                        className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        value={edu.degreeName}
                      />
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>
                
                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Graduation duration</label>
                      <input
                        type="text"
                        className={`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${isInvalidGDuration?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`}
                        value={edu.graduationYear}
                      />
                      <div class={`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${isInvalidGDuration?"bg-red-500":"bg-blue-500"}`}></div>
                    </div>
                      
                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Current SGPA</label>
                      <input
                        type="text"
                        className={`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${isInvalidSGPA?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`}
                        value={edu.currentSGPA}
                      />
                      <div class={`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${isInvalidSGPA?"bg-red-500":"bg-blue-500"}`}></div>
                    </div>
                  </div>
                ))}

                <button
                  className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                  title="You can't add Educations because it is predefined data formate" 
                >
                  ❌ Add Education
                </button>
              </div>
            );
          }

      case 5:
        if (!isExampleProcessing){
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">Certificates</h2>
              <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add atleast 5 high rated certificates</p>
              {formData.certificates.map((cert, index) => (
                <div key={index} className="p-4 border-2 rounded space-y-4 dark:border-slate-700">
                  <h3 className="font-medium text-lg dark:text-slate-200">Certificate {index + 1}</h3>
                  <div className="space-y-4">

                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Certificate Name</label>
                      <input
                        type="text"
                        placeholder='Azure AI Engineer Associate'
                        className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        value={cert.certificateName}
                        onChange={(e) => handleInputChange('certificates', 'certificateName', e.target.value, index)}
                      />
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Course Duration</label>
                      <input
                        type="text"
                        placeholder='2 Month'
                        className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        value={cert.courseDuration}
                        onChange={(e) => handleInputChange('certificates', 'courseDuration', e.target.value, index)}
                      />
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <div className="peer">
                        <Suggestions
                          label="Provider Name"
                          placeholder='Microsoft'
                          value={cert.providerName}
                          onChange={(val) => handleInputChange('certificates', 'providerName', val, index)}
                          suggestions={["OnleiTech","Rubico IT","Tata Consultancy Services","Infosys","HCL Technologies","Wipro","Tech Mahindra","Cognizant Technology Solutions","IBM India","Larsen & Toubro Infotech","Mindtree","Mphasis","Oracle Financial Services Software","Redington India","Ingram Micro India","Dell India","SAP India","Capgemini India","Accenture India","Cisco Systems India","Amazon Development Centre India","Google India","Microsoft India","Adobe Systems India","Intel Technology India","HP India","Siemens India","Samsung R&D Institute India","Infosys BPM","Wipro Technologies","HCL Infosystems","Tech Mahindra Business Services","L&T Technology Services","Persistent Systems","Hexaware Technologies","Zensar Technologies","Birlasoft","NIIT Technologies","Cyient","Sonata Software","Mindtree Consulting","Mastek","Sasken Technologies","Polaris Consulting & Services","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge","eClerx Services","Firstsource Solutions","L&T Infotech","Syntel","QuEST Global","KPIT Technologies","Nucleus Software Exports","Oracle India","IBM Daksh","Dell International Services","Concentrix India","Genpact","EXL Service","WNS Global Services","Hinduja Global Solutions","Teleperformance India","Sutherland Global Services","Aegis Limited","Infosys McCamish Systems","TCS e-Serve","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Zoho Corporation","Freshworks","Paytm","Ola Cabs","Zomato","Swiggy","Byju's","Flipkart","Snapdeal","MakeMyTrip","PolicyBazaar","Delhivery","InMobi","Quikr","Hike","Naukri.com","BookMyShow","BigBasket","Lenskart","OYO Rooms","CureFit","Razorpay","PhonePe","Myntra","ShopClues","UrbanClap","Practo","1mg","CarDekho","Housing.com","Pepperfry","Nykaa","Dream11","Udaan","Meesho","ShareChat","Dunzo","BlackBuck","Rivigo","Infra.Market","Moglix","OfBusiness","UpGrad","Unacademy","Vedantu","WhiteHat Jr.","Eruditus","Simplilearn","Toppr","Lido Learning","Classplus","Testbook","Doubtnut","Embibe","Khatabook","OkCredit","BharatPe","CRED","Groww","Zerodha","Smallcase","INDmoney","CoinSwitch Kuber","WazirX","Instamojo","Mswipe","Pine Labs","Chargebee","Capillary Technologies","WebEngage","MoEngage","Netcore Solutions","BrowserStack","Postman","Wingify","FusionCharts","HackerRank","HackerEarth","InterviewBit","Scaler","Coding Ninjas","GeeksforGeeks","Tata Elxsi","Cyient","Persistent Systems","Zensar Technologies","Sonata Software","Mastek","Sasken Technologies","Mindtree","L&T Technology Services","Birlasoft","Hexaware Technologies","NIIT Technologies","Mphasis","QuEST Global","KPIT Technologies","Nucleus Software Exports","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge"]}
                          isMultiSuggestion = {false}
                        />
                      </div>
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={() => addNewItem('certificates')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <Plus size={16} /> Add Certificate
              </button>
            </div>
          );
        }else{
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">Certificates</h2>
              <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add atleast 5 high rated certificates</p>
              {ExampleJsonData.certificates.map((cert, index) => (
                <div key={index} className="p-4 border-2 rounded space-y-4 dark:border-slate-700">
                  <h3 className="font-medium text-lg dark:text-slate-200">Certificate {index + 1}</h3>
                  <div className="space-y-4">

                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Certificate Name</label>
                      <input
                        type="text"
                        className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        value={cert.certificateName}
                      />
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Course Duration</label>
                      <input
                        type="text"
                        className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        value={cert.courseDuration}
                      />
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Provider Name</label>
                      <input
                        type="text"
                        className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        value={cert.providerName}
                      />
                      <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>
                  </div>
                </div>
              ))}
              <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                title="You can't add Certificates because it is predefined data formate" 
              >
                ❌ Add Certificate
              </button>
            </div>
          );
        }
      case 6:
        if (!isExampleProcessing){
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">
                Description
              </h2>
              <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Consider to edit them more and make professional</p>

          
              <div className="space-y-2 pt-8 pb-16">
                <div className="peer">
                  <Suggestions
                    label="Resume Description"
                    placeholder="Passionate AI Developer & Backend Specialist with expertise in Deep Learning, Computer Vision, NLP, and Transformers. Skilled at building models from scratch and integrating them into real-world applications using React, Flask, and Django. Developed and deployed 22+ projects available on GitHub & Kaggle."
                    value={formData.Description}
                    onChange={(val) => handleInputChange('Description', val)}
                    suggestions={ResumeDescriptions}
                    isTextArea={true}
                    isMultiSuggestion={false}
                  />
                </div>
                <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>
            </div>
          );
          
        }else{
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">
                Description
              </h2>
              <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Consider to edit them more and make professional</p>
              <div className="space-y-2 pt-16 pb-16">
                <textarea
                  placeholder="Passionate AI Developer & Backend Specialist with expertise in Deep Learning, Computer Vision, NLP, and Transformers. Skilled at building models from scratch and integrating them into real-world applications using React, Flask, and Django. Developed and deployed 22+ projects available on GitHub & Kaggle."
                  className="w-full min-h-[145px] px-3 py-2 border rounded resize-none peer focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  value={ExampleJsonData.Description}
                />
                <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>
            </div>
          );
        }

      case 7:
        if(!isExampleProcessing){
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">Choose Template</h2>
              <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>We will frequently add more template designs to provide more resume options.</p>
              <div className="grid grid-cols-2 gap-5">
                  {[1,2,3,4,5,6,7].map((template) => (
                    <div
                      key={template}
                      onClick={() => setFormData((prev) => ({ ...prev, selectedTemplate: String(template) }))}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-transform duration-400 shadow-md hover:scale-95 dark:shadow-gray-600  ${
                        formData.selectedTemplate === String(template) ? 'border-blue-600 bg-blue-50 dark:bg-slate-800' : 'dark:border-gray-700'
                      }`}
                    >
                      <img
                        src={`/Resume-Builder/Temp/temp${template}.png`}
                        alt={`Template ${template}`}
                        className="w-full h-auto rounded-lg dark:filter dark:brightness-90"
                      />
                      {isOpen ? (
                        <p className="text-center mt-2">{template}</p>
                      ) : (
                        <p className="text-center mt-2 dark:text-gray-200">{AboutTemps[template-1]}</p>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          );
        }else{
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">Choose Template</h2>
              <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>We will frequently add more template designs to provide more resume options.</p>
              <div className="grid grid-cols-2 gap-5">
                  {[1,2,3,4,5,6,7].map((template) => (
                    <div
                      key={template}
                      onClick={() => setExampleJsonData((prev) => ({ ...prev, selectedTemplateEx: String(template) }))}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-transform duration-400 shadow-md hover:scale-95 dark:shadow-gray-600  ${
                        ExampleJsonData.selectedTemplateEx === String(template) ? 'border-blue-600 bg-blue-50 dark:bg-slate-800' : 'dark:border-gray-700'
                      }`}
                    >
                      <img
                        src={`/Resume-Builder/Temp/temp${template}.png`}
                        alt={`Template ${template}`}
                        className="w-full h-auto rounded-lg dark:filter dark:brightness-90"
                      />
                      {isOpen ? (
                        <p className="text-center mt-2">{template}</p>
                      ) : (
                        <p className="text-center mt-2 dark:text-gray-200">{AboutTemps[template-1]}</p>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          );
        }

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-slate-900">
      <div
        className={`fixed top-0 left-0 h-full bg-white border-r shadow-md hover:shadow-xl p-0 md:p-4 transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-0"} md:w-64 dark:border-r-slate-800 dark:bg-slate-800`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-6 pl-7 md:hidden p-3 rounded-r-full bg-gray-200 dark:bg-gray-600 dark:text-cyan-300"
        >
          {isOpen ? <X size={20} /> : <Menu size={15} />}
        </button>

        <div className={`${isOpen || "hidden md:block"}`}>
          <h1 className={"text-2xl font-bold pt-20 md:pt-4 text-center text-blue-80 text-blue-800 dark:text-amber-300 cursor-pointer"}>BRAVERS</h1>
          <div className="w-[30%] h-1 bg-blue-900  mb-6 mx-auto mt-1 rounded dark:bg-amber-400"></div>
          <div className="space-y-4 p-2">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setCurrentStep(index)}
                title={step.title}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-transform duration-400 hover:scale-105
                  ${currentStep === index ? "bg-blue-50 text-blue-600 dark:bg-slate-700" : ""}
                  ${completedSteps.has(index) ? "text-green-600 dark:text-amber-200" : "text-gray-600 dark:text-zinc-200"}
                `}
              >
                <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border 
                    ${completedSteps.has(index) ? "bg-white border-green-600 dark:border-amber-300 dark:bg-gray-800" : "border-gray-400 dark:border-gray-400"}
                  `}
                >
                    {completedSteps.has(index) ? <Check size={14} /> : <span className="text-sm">{index + 1}</span>}
                </div>
                <span className="text-sm font-medium">{step.key}</span>
              </div>
            ))}
          </div>
          <div>
            <h2
              className="space-y-3 mx-4 md:mx-0 mt-6 p-2 flex items-center justify-center gap-3 rounded-lg cursor-pointer transition-transform duration-400 bg-blue-50 hover:bg-blue-100 text-blue-600 dark:text-zinc-300 dark:bg-slate-700/50 dark:hover:bg-slate-700/95"
              title="It is only for Test & Present purpose. with authorized access"
              onClick={() => {
                if (showInput){
                  setShowInput(false)
                }else{setShowInput(true)}
              }}
            >
              Example Processing
            </h2>

            {showInput && (
              <div className="mx-4 md:mx-0 dark:bg-gray-800 rounded-lg">
                <input
                  type="password"
                  className={`w-full mt-2 p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-white ${error? "border-red-500 dark:border-red-400 focus:ring-red-500":"border-blue-500 dark:border-blue-400 focus:ring-blue-500"} focus:outline-none focus:ring-2`}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)} 
                  onKeyDown={handleVerify} 
                  placeholder="Enter PIN"
                />
              </div>
            )}
          </div>            
        </div>
      </div>

      <div className={`flex-1 pt-20 pr-3 pl-1 md:p-8 transition-all duration-300 ${isOpen ? "ml-64" : "ml-2"} md:ml-64`}>
        <div className="max-w-2xl mx-auto">
          {renderFormSection()}

          <div className="mt-8 flex justify-end">
          <button
            title={`${NextError ? "Don't cheat! its essential to fill all details for a good resume" : "Fill all details and continue to next page"}`}
            onClick={handleNext}
            className={`flex items-center gap-2 px-6 py-2 mt-5 text-white rounded-full ${
              NextError ? "bg-red-500 hover:bg-red-600 transition-transform scale-105" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {currentStep === steps.length - 1 ? "Submit" : "Next"}  
            {NextError ? <i className="fas fa-times-circle"></i> : <ChevronRight size={16} />}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInfo;