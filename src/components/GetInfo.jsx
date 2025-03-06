import React, { useState } from 'react';
import { Check, Plus, ChevronRight, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const GetInfo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    contactInfo: {
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      linkedinUrl: '',
      portfolioUrl: '',
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
    selectedTemplate: 0
  });
  
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [isInvalidMob,setIsInvalidMob]=useState(false);
  const [isInvalidMail,setIsInvalidMail]=useState(false);
  const [isInvalidWDuration,setIsInvalidWDuration]=useState(false);
  const [isInvalidGDuration,setIsInvalidGDuration]=useState(false);
  const [isInvalidSGPA,setIsInvalidSGPA]=useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const AboutTemps=["Simpler & Structured","Linear & Classic","Colourfull & Attractive","Colourful & Highly Designed","Simpler & Linear","Designed & Attractive","Highly Simpler"]
  
  const steps = [
    { title: 'Contact Info', key: 'contactInfo' },
    { title: 'Skills', key: 'skills' },
    { title: 'Work Experience', key: 'workExperience' },
    { title: 'Projects', key: 'projects' },
    { title: 'Education', key: 'education' },
    { title: 'Certificates', key: 'certificates' },
    { title: 'Template', key: 'template' }
  ];

  const handleInputChange = (section, field, value, index = null) => {
    setFormData(prev => {
      const newData = { ...prev };
      if (index !== null) {
        newData[section][index][field] = value;
      } else if (typeof newData[section] === 'object' && !Array.isArray(newData[section])) {
        newData[section][field] = value;
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
        formData.contactInfo.linkedinUrl,
        formData.contactInfo.portfolioUrl,
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
      6: [formData.selectedTemplate],
    };
  
    if (!(currentStep in Fields)) {
      toast.error("Invalid step provided.", {
        duration: 3000, 
        position: "top-right",
      });
      return;
    }
    
    const DataFeildNames=["Contact Info","Skills","Work Experience","Projects","Education","Certificates","Templates"]
    const areFieldsValid = (fields) => fields.every((field) => typeof field === "string" && field.trim() !== "");
  
    for (let step = 0; step <= currentStep; step++) {
      const requiredFields = Fields[step].flat();
      if (requiredFields.length > 0 && !areFieldsValid(requiredFields)) {
        toast.error("Please fill out all required fields From 'Contact Info' before proceeding further.", {
          duration: 3000,
          position: "top-right",
        });
        return;
      }
    }
  
    setCompletedSteps((prev) => new Set(prev.add(currentStep)));
  
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      for (let step = 0; step <= 6; step++) {
        const requiredFields = Fields[step].flat();
        if (requiredFields.length > 0 && !areFieldsValid(requiredFields)) {
          toast.error("Please complete all required fields before submitting.", {
            duration: 3000, 
            position: "top-right",
          });
          return;
        }
      }
  
      navigate('/Result');
      console.log("Form submitted:", formData);
  
      const jsonData = JSON.stringify(formData, null, 2);
      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
  
      const a = document.createElement("a");
      a.href = url;
      a.download = "BRAVERS_resume_builder_data.json";
      document.body.appendChild(a);
      a.click();
  
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };
  

  const renderFormSection = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl mb-4 font-bold border-b-4 border-blue-900 text-blue-800 dark:border-blue-400 dark:text-blue-400">Contact Information</h2>
              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">Full Name</label>
                <input
                  type="text"
                  className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  value={formData.contactInfo.fullName}
                  onChange={(e) => handleInputChange('contactInfo', 'fullName', e.target.value)}
                />  
                <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">Phone Number</label>
                <input
                  type="number"
                  placeholder="Enter 10-digit phone number"
                  className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 
                  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  value={formData.contactInfo.phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,10}$/.test(value)) {  
                      handleInputChange("contactInfo", "phoneNumber", value);
                    }
                  }}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (!/^\d{10}$/.test(value)) {
                      toast.error("Phone number must be exactly 10 digits!", {
                        duration: 3000,
                        position: "top-right",
                      });
                      setIsInvalidMob(true)
                      e.target.focus(); 
                    }else{
                      setIsInvalidMob(false)
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
                  className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  value={formData.contactInfo.emailAddress}
                  onChange={(e) => handleInputChange("contactInfo", "emailAddress", e.target.value)}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (!/^\S+@\S+\.\S+\s*$/.test(value)) {
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
                <label className="block text-sm font-medium dark:text-slate-300">LinkedIn URL</label>
                <input
                  type="text"
                  placeholder="www.linkedin.com/in/xyz231/"
                  className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  value={formData.contactInfo.linkedinUrl}
                  onChange={(e) => handleInputChange("contactInfo", "linkedinUrl", e.target.value)}
                />
                <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">Portfolio URL / Github URL</label>
                <input
                  type="text"
                  placeholder='Portfolio URL if have else add GitHub URL'
                  className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  value={formData.contactInfo.portfolioUrl}
                  onChange={(e) => handleInputChange('contactInfo', 'portfolioUrl', e.target.value)}
                />
                <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">Job Title</label>
                <input
                  type="text"
                  placeholder='Data Scientist'
                  className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  value={formData.contactInfo.jobTitle}
                  onChange={(e) => handleInputChange('contactInfo', 'jobTitle', e.target.value)}
                />
                <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 text-blue-800 dark:border-blue-400 dark:text-blue-400">Skills</h2>

              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">Technical Skills</label>
                <input
                  className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  placeholder='TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face, C/C++, Java, JavaScript, React'
                  value={formData.skills.hardSkills}
                  onChange={(e) => handleInputChange('skills', 'hardSkills', e.target.value)}
                />
                <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">Soft Skills</label>
                <input
                  className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  placeholder='TeamWork, strong Problem-Solving skill, Leadership, Critical thinking, Communication'
                  value={formData.skills.softSkills}
                  onChange={(e) => handleInputChange('skills', 'softSkills', e.target.value)}
                />
                <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">Languages you are familiar with</label>
                <input
                  type="text"
                  placeholder='English, Hindi, French'
                  className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  value={formData.contactInfo.Languages}
                  onChange={(e) => handleInputChange('contactInfo', 'Languages', e.target.value)}
                />
                <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">YourLocation</label>
                <input
                  type="text"
                  placeholder='Haridwar (UTTRAKHAND)'
                  className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  value={formData.contactInfo.Location}
                  onChange={(e) => handleInputChange('contactInfo', 'Location', e.target.value)}
                />
                <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 text-blue-800 dark:border-blue-400 dark:text-blue-400">Work Experience</h2>
            <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add atleast 2 work Experiences from previous companies. as internship or full time job</p>
            {formData.workExperience.map((exp, index) => (
              <div key={index} className="p-4 border-2 rounded space-y-4 dark:border-slate-900">
                <h3 className="font-medium dark:text-slate-200">Experience {index + 1}</h3>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium dark:text-slate-300">Job Title</label>
                    <input
                      type="text"
                      placeholder='Data Scientist'
                      className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600" 
                      value={exp.jobTitle}
                      onChange={(e) => handleInputChange('workExperience', 'jobTitle', e.target.value, index)}
                    />
                    <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium dark:text-slate-300">Company Name</label>
                    <input
                      type="text"
                      placeholder='Onlei Teach'
                      className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                      value={exp.companyName}
                      onChange={(e) => handleInputChange('workExperience', 'companyName', e.target.value, index)}
                    />
                    <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium dark:text-slate-300">Work Duration</label>
                    <input
                      type="text"
                      placeholder="Dec-2023 to Mar-2025"
                      className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
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
                    <label className="block text-sm font-medium dark:text-slate-300">Key Achievements</label>
                    <input
                      type="text"
                      placeholder='Learn to visualize patterns from data using matplotlib and Built several DL models'
                      className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                      value={exp.keyAchievements}
                      onChange={(e) => handleInputChange('workExperience', 'keyAchievements', e.target.value, index)}
                    />
                    <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                  </div>
              </div>
            ))}
            <button
              onClick={() => addNewItem('workExperience')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <Plus size={16} /> Add Experience
            </button>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 text-blue-800 dark:border-blue-400 dark:text-blue-400">Projects</h2>
            <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add atleast 3 projects which you did in your academics</p>
            {formData.projects.map((project, index) => (
              <div key={index} className="p-4 border-2 rounded space-y-4 dark:border-slate-900">
                <h3 className="font-medium dark:text-slate-200">Project {index + 1}</h3>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium dark:text-slate-300">Project Title</label>
                    <input
                      type="text"
                      placeholder='Transformer based translation model from scratch'
                      className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                      value={project.projectTitle}
                      onChange={(e) => handleInputChange('projects', 'projectTitle', e.target.value, index)}
                    />
                    <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium dark:text-slate-300">Tools/Tech Used</label>
                    <input
                      type="text"
                      placeholder='Tensorflow, NumPy, Pandas, Matplotlib, Multi30k Dataset, ModelSubclassing'
                      className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                      value={project.toolsTechUsed}
                      onChange={(e) => handleInputChange('projects', 'toolsTechUsed', e.target.value, index)}
                    />
                    <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                  </div>
              </div>
            ))}
            <button
              onClick={() => addNewItem('projects')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <Plus size={16} /> Add Project
            </button>
          </div>
        );

        case 4:
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 text-blue-800 dark:border-blue-400 dark:text-blue-400">Education</h2>
              <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add your pre/post graduations on different sections (Consider listing your most recent Qualifications first)</p>
              {formData.education.map((edu, index) => (
                <div key={index} className="p-4 border-2 rounded space-y-4 dark:border-slate-900">

                  <div className="space-y-2">
                    <label className="block text-sm font-medium dark:text-slate-300">Institution Name</label>
                    <input
                      type="text"
                      placeholder='Haridwar University'
                      className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                      value={edu.institutionName}
                      onChange={(e) => handleInputChange('education', 'institutionName', e.target.value, index)}
                    />
                    <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                  </div>
        
                  <div className="space-y-2">
                    <label className="block text-sm font-medium dark:text-slate-300">Degree Name</label>
                    <input
                      type="text"
                      placeholder='Batchelor in computer application'
                      className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                      value={edu.degreeName}
                      onChange={(e) => handleInputChange('education', 'degreeName', e.target.value, index)}
                    />
                    <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                  </div>
        
                  <div className="space-y-2">
                    <label className="block text-sm font-medium dark:text-slate-300">Graduation duration</label>
                    <input
                      type="text"
                      placeholder="2023 - 2026"
                      className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
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
                      className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
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
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <Plus size={16} /> Add Education
              </button>
            </div>
          );        

      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 text-blue-800 dark:border-blue-400 dark:text-blue-400">Certificates</h2>
            <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add atleast 5 high rated certificates</p>
            {formData.certificates.map((cert, index) => (
              <div key={index} className="p-4 border-2 rounded space-y-4 dark:border-slate-900">
                <h3 className="font-medium dark:text-slate-200">Certificate {index + 1}</h3>
                <div className="space-y-4">

                  <div className="space-y-2">
                    <label className="block text-sm font-medium dark:text-slate-300">Certificate Name</label>
                    <input
                      type="text"
                      placeholder='Azure AI Engineer Associate'
                      className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
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
                      className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                      value={cert.courseDuration}
                      onChange={(e) => handleInputChange('certificates', 'courseDuration', e.target.value, index)}
                    />
                    <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium dark:text-slate-300">Provider Name</label>
                    <input
                      type="text"
                      placeholder='Microsoft'
                      className="w-full pl-1 sm:p-2 border rounded peer px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                      value={cert.providerName}
                      onChange={(e) => handleInputChange('certificates', 'providerName', e.target.value, index)}
                    />
                    <div class="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => addNewItem('certificates')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <Plus size={16} /> Add Certificate
            </button>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 text-blue-800 dark:border-blue-400 dark:text-blue-400">Choose Template</h2>
            <p className='test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200'>We will frequently add more template designs to provide more resume options.</p>
            <div className="grid grid-cols-2 gap-5">
                {[1,2,3,4,5,6,7].map((template) => (
                  <div
                    key={template}
                    onClick={() => setFormData((prev) => ({ ...prev, selectedTemplate: String(template - 1) }))}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-transform duration-400 shadow-md dark:border-slate-500 hover:scale-95 ${
                      formData.selectedTemplate === String(template - 1) ? 'border-blue-500 bg-blue-50 dark:bg-slate-700 dark:border-blue-400' : ''
                    }`}
                  >
                    <img
                      src={`/resume-builder-web-application/Temp/temp${template}.png`}
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
          className="absolute top-4 left-3 md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-600 dark:text-cyan-300"
        >
          {isOpen ? <X size={20} /> : <Menu size={15} />}
        </button>

        <div className={`${isOpen || "hidden md:block"}`}>
          <h1 className={"text-2xl font-bold pt-14 md:pt-6 text-center text-blue-80 text-blue-800 dark:text-amber-300"}>Resume Builder</h1>
          <div className="w-[65%] h-1 bg-blue-900  mb-6 mx-auto mt-1 rounded dark:bg-amber-300"></div>
          <div className="space-y-4 p-2">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-transform duration-400 hover:scale-105
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
                <span className="text-sm font-medium">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`flex-1 pt-14 pr-3 pl-1 md:p-8 transition-all duration-300 ${isOpen ? "ml-64" : "ml-2"} md:ml-64`}>
        <div className="max-w-2xl mx-auto">
          {renderFormSection()}

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-2 mt-5 bg-blue-600 text-white rounded-full hover:bg-blue-700 "
            >
              {currentStep === steps.length - 1 ? "Submit" : "Next"}
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInfo;