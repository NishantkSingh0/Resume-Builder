import React, { useState } from 'react';
import { Check, Plus, ChevronRight, Menu, X } from 'lucide-react';

const GetInfo = () => {
  const [currentStep, setCurrentStep] = useState(0);
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
      companyNameDuration: '',
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

  const [isOpen, setIsOpen] = useState(false);

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
        companyNameDuration: '',
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
      2: formData.workExperience.length > 0 ? formData.workExperience.map(exp => [exp.jobTitle, exp.companyNameDuration, exp.keyAchievements]) : [[]],
      3: formData.projects.length > 0 ? formData.projects.map(proj => [proj.projectTitle, proj.toolsTechUsed]) : [[]],
      4: formData.education.length > 0 ? formData.education.map(edu => [edu.institutionName, edu.degreeName, edu.graduationYear, edu.currentSGPA]) : [[]],
      5: formData.certificates.length > 0 ? formData.certificates.map(cert => [cert.certificateName, cert.courseDuration, cert.providerName]) : [[]],
      6: [formData.selectedTemplate],
    };
  
    if (!(currentStep in Fields)) {
      alert("Invalid step provided.");
      return;
    }
  
    const requiredFields = Fields[currentStep].flat(); 
  
    const areFieldsValid = (fields) => fields.every((field) => typeof field === "string" && field.trim() !== "");
  
    if (requiredFields.length > 0 && !areFieldsValid(requiredFields)) {
      alert("Please fill out all required fields before proceeding.");
      return;
    }
  
    setCompletedSteps((prev) => new Set(prev.add(currentStep)));
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
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
    }
  };  

  const renderFormSection = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl mb-4 font-bold border-b-4 border-gray-500 text-gray-700">Contact Information</h2>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full pl-1 sm:p-2 border rounded"
                  value={formData.contactInfo.fullName}
                  onChange={(e) => handleInputChange('contactInfo', 'fullName', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  placeholder='746X8XX716'
                  className="w-full pl-1 sm:p-2 border rounded"
                  value={formData.contactInfo.phoneNumber}
                  onChange={(e) => handleInputChange('contactInfo', 'phoneNumber', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder='xyz231@gmail.com'
                  className="w-full pl-1 sm:p-2 border rounded"
                  value={formData.contactInfo.emailAddress}
                  onChange={(e) => handleInputChange('contactInfo', 'emailAddress', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">LinkedIn URL</label>
                <input
                  type="text"u
                  placeholder='www.linkedin.com/in/xyz231/'
                  className="w-full pl-1 sm:p-2 border rounded"
                  value={formData.contactInfo.linkedinUrl}
                  onChange={(e) => handleInputChange('contactInfo', 'linkedinUrl', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Portfolio URL / Github URL</label>
                <input
                  type="text"
                  placeholder='if have else add GitHub URL'
                  className="w-full pl-1 sm:p-2 border rounded"
                  value={formData.contactInfo.portfolioUrl}
                  onChange={(e) => handleInputChange('contactInfo', 'portfolioUrl', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Job Title</label>
                <input
                  type="text"
                  placeholder='Data Scientist'
                  className="w-full pl-1 sm:p-2 border rounded"
                  value={formData.contactInfo.jobTitle}
                  onChange={(e) => handleInputChange('contactInfo', 'jobTitle', e.target.value)}
                />
              </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-gray-500 mb-4">Skills</h2>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Technical Skills</label>
                <input
                  className="w-full pl-1 sm:p-2 border rounded"
                  placeholder='TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face, C/C++, Java, JavaScript, React'
                  value={formData.skills.hardSkills}
                  onChange={(e) => handleInputChange('skills', 'hardSkills', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Soft Skills</label>
                <input
                  className="w-full pl-1 sm:p-2 border rounded"
                  placeholder='TeamWork, strong Problem-Solving skill, Leadership, Critical thinking, Communication'
                  value={formData.skills.softSkills}
                  onChange={(e) => handleInputChange('skills', 'softSkills', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Languages you are familiar with</label>
                <input
                  type="text"
                  placeholder='English, Hindi, French'
                  className="w-full pl-1 sm:p-2 border rounded"
                  value={formData.contactInfo.Languages}
                  onChange={(e) => handleInputChange('contactInfo', 'Languages', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">YourLocation</label>
                <input
                  type="text"
                  placeholder='Haridwar (UTTRAKHAND)'
                  className="w-full pl-1 sm:p-2 border rounded"
                  value={formData.contactInfo.Location}
                  onChange={(e) => handleInputChange('contactInfo', 'Location', e.target.value)}
                />
              </div>

          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-gray-500 ">Work Experience</h2>
            <p className='test-xl font-semibold mb-6 text-gray-600'>Hint: Add atleast 2 work Experiences from previous companies. as internship or full time job</p>
            {formData.workExperience.map((exp, index) => (
              <div key={index} className="p-4 border rounded space-y-4">
                <h3 className="font-medium">Experience {index + 1}</h3>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Job Title</label>
                    <input
                      type="text"
                      placeholder='Data Scientist'
                      className="w-full pl-1 sm:p-2 border rounded" 
                      value={exp.jobTitle}
                      onChange={(e) => handleInputChange('workExperience', 'jobTitle', e.target.value, index)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Company Name and Duration</label>
                    <input
                      type="text"
                      placeholder='Onlei Teach, 1 Month'
                      className="w-full pl-1 sm:p-2 border rounded"
                      value={exp.companyNameDuration}
                      onChange={(e) => handleInputChange('workExperience', 'companyNameDuration', e.target.value, index)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Key Achievements</label>
                    <input
                      type="text"
                      placeholder='Learn to visualize patterns from data using matplotlib and Built several DL models'
                      className="w-full pl-1 sm:p-2 border rounded"
                      value={exp.keyAchievements}
                      onChange={(e) => handleInputChange('workExperience', 'keyAchievements', e.target.value, index)}
                    />
                  </div>
              </div>
            ))}
            <button
              onClick={() => addNewItem('workExperience')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"
            >
              <Plus size={16} /> Add Experience
            </button>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-gray-500">Projects</h2>
            <p className='test-xl font-semibold mb-6 text-gray-600'>Hint: Add atleast 3 projects which you did in your academics</p>
            {formData.projects.map((project, index) => (
              <div key={index} className="p-4 border rounded space-y-4">
                <h3 className="font-medium">Project {index + 1}</h3>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Project Title</label>
                    <input
                      type="text"
                      placeholder='Transformer based translation model from scratch'
                      className="w-full pl-1 sm:p-2 border rounded"
                      value={project.projectTitle}
                      onChange={(e) => handleInputChange('projects', 'projectTitle', e.target.value, index)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Tools/Tech Used</label>
                    <input
                      type="text"
                      placeholder='Tensorflow, NumPy, Pandas, Matplotlib, Multi30k Dataset, ModelSubclassing'
                      className="w-full pl-1 sm:p-2 border rounded"
                      value={project.toolsTechUsed}
                      onChange={(e) => handleInputChange('projects', 'toolsTechUsed', e.target.value, index)}
                    />
                  </div>
              </div>
            ))}
            <button
              onClick={() => addNewItem('projects')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"
            >
              <Plus size={16} /> Add Project
            </button>
          </div>
        );

        case 4:
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-gray-500 mb-4">Education</h2>
              <p className='test-xl font-semibold mb-6 text-gray-600'>Hint: Add your pre/post graduations on different sections</p>
              {formData.education.map((edu, index) => (
                <div key={index} className="p-4 border rounded space-y-4">

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Institution Name</label>
                    <input
                      type="text"
                      placeholder='Haridwar University'
                      className="w-full pl-1 sm:p-2 border rounded"
                      value={edu.institutionName}
                      onChange={(e) => handleInputChange('education', 'institutionName', e.target.value, index)}
                    />
                  </div>
        
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Degree Name</label>
                    <input
                      type="text"
                      placeholder='Batchelor in computer application'
                      className="w-full pl-1 sm:p-2 border rounded"
                      value={edu.degreeName}
                      onChange={(e) => handleInputChange('education', 'degreeName', e.target.value, index)}
                    />
                  </div>
        
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Graduation duration</label>
                    <input
                      type="text"
                      placeholder='2023 - 2026'
                      className="w-full pl-1 sm:p-2 border rounded"
                      value={edu.graduationYear}
                      onChange={(e) => handleInputChange('education', 'graduationYear', e.target.value, index)}
                    />
                  </div>
        
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Current SGPA</label>
                    <input
                      type="text"
                      placeholder='?? / 10'
                      className="w-full pl-1 sm:p-2 border rounded"
                      value={edu.currentSGPA}
                      onChange={(e) => handleInputChange('education', 'currentSGPA', e.target.value, index)}
                    />
                  </div>
                </div>
              ))}
        
              <button
                onClick={() => addNewItem('education')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"
              >
                <Plus size={16} /> Add Education
              </button>
            </div>
          );        

      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-gray-500 mb-4">Certificates</h2>
            <p className='test-xl font-semibold mb-6 text-gray-600'>Hint: Add atleast 5 high rated certificates</p>
            {formData.certificates.map((cert, index) => (
              <div key={index} className="p-4 border rounded space-y-4">
                <h3 className="font-medium">Certificate {index + 1}</h3>
                <div className="space-y-4">

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Certificate Name</label>
                    <input
                      type="text"
                      placeholder='Azure AI Engineer Associate'
                      className="w-full pl-1 sm:p-2 border rounded"
                      value={cert.certificateName}
                      onChange={(e) => handleInputChange('certificates', 'certificateName', e.target.value, index)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Course Duration</label>
                    <input
                      type="text"
                      placeholder='2 Month'
                      className="w-full pl-1 sm:p-2 border rounded"
                      value={cert.courseDuration}
                      onChange={(e) => handleInputChange('certificates', 'courseDuration', e.target.value, index)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Provider Name</label>
                    <input
                      type="text"
                      placeholder='Microsoft'
                      className="w-full pl-1 sm:p-2 border rounded"
                      value={cert.providerName}
                      onChange={(e) => handleInputChange('certificates', 'providerName', e.target.value, index)}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => addNewItem('certificates')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"
            >
              <Plus size={16} /> Add Certificate
            </button>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-gray-500 mb-4">Choose Template</h2>
            <div className="grid grid-cols-2 gap-5">
                {[1,2,3,4,5,6,7].map((template) => (
                  <div
                    key={template}
                    onClick={() => setFormData((prev) => ({ ...prev, selectedTemplate: template - 1 }))}
                    className={`p-4 border rounded cursor-pointer transition-transform duration-400 hover:scale-95 ${
                      formData.selectedTemplate === template - 1 ? 'border-blue-500 bg-blue-50' : ''
                    }`}
                  >
                    <img
                      src={`/resume-builder-web-application/Temp/temp${template}.png`} // Reference from public folder
                      alt={`Template ${template}`}
                      className="w-full h-auto"
                    />
                    {isOpen?(<p className="text-center mt-2">{template}</p>):(<p className="text-center mt-2">Template {template}</p>)}
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
    <div className="flex min-h-screen bg-gray-50">
      <div
        className={`fixed top-0 left-0 h-full bg-white border-r p-0 md:p-4 transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-0"} md:w-64`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 left-3 md:hidden p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          {isOpen ? <X size={20} /> : <Menu size={15} />}
        </button>

        <div className={`${isOpen || "hidden md:block"}`}>
          <h1 className={"text-2xl font-bold mb-6 pt-14 md:pt-6 text-center"}>Resume Builder</h1>
          <div className="space-y-4 p-2">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-transform duration-400 hover:scale-105
                  ${currentStep === index ? "bg-blue-50 text-blue-600" : ""}
                  ${completedSteps.has(index) ? "text-green-600" : "text-gray-600"}
                `}
              >
              <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border 
                  ${completedSteps.has(index) ? "bg-green-100 border-green-600" : "border-gray-400"}
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
              className="flex items-center gap-2 px-6 py-2 mt-5 bg-blue-600 text-white rounded-full hover:bg-blue-700"
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