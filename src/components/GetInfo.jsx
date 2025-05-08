/*
 - ResumeBuilder - A cool project for Building high quality and ATS freindly resumes in free...
 - Copyright (C) 2025 NishantkSingh0.github.io
 - Licensed under the GNU GPL v3.0 - see LICENSE file for details.
 */

import React, { useState,useEffect } from 'react';
import { Check, Plus, ChevronRight, Menu, X ,Eye, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Typed from "typed.js"; 
import toast from "react-hot-toast";
import Suggestions from "./Suggestions";
import { useLocation } from 'react-router-dom';
import JsonFiles from "./JsonFiles.jsx"
import {T1} from './T1.jsx';
import {T2} from './T2.jsx';
import {T3} from './T3.jsx';
import {T4} from './T4.jsx';
import {T5} from './T5.jsx';
import {T6} from './T6.jsx';

const GetInfo=() => {
  const [currentStep, setCurrentStep]=useState(0);
  const [isExampleProcessing, setIsExampleProcessing] = useState(false);
  const [ResumesBuilt, setResumesBuilt] = useState(0);
  const location = useLocation();
  const UserjsonData = location.state?.jsonData || null;
  // const isTech = location.state?.isTech || false; 
  const [NextError, setNextError]=useState(false);
  const navigate=useNavigate();
  const [ExampleJsonData, setExampleJsonData]=useState(UserjsonData?UserjsonData:JsonFiles[Math.floor(Math.random() * JsonFiles.length)]);
  // console.log('ReceiveData',ExampleJsonData.skills.hardSkills)
  const [formData,setFormData]=useState({
    selectedTemplate: "",
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
    Description: {
      UserDescription: ""
    }
  });
  
  const topHardSkills = isExampleProcessing?ExampleJsonData.skills.hardSkills?.split(",").slice(0, 5).map(skill => skill.trim()).join(", "):formData.skills.hardSkills?.split(",").slice(0, 5).map(skill => skill.trim()).join(", ");

  const ResumeDescriptions=[
    `A passionate ${isExampleProcessing?ExampleJsonData.contactInfo.jobTitle:formData.contactInfo.jobTitle} graduated from ${isExampleProcessing?ExampleJsonData.education[0]?.institutionName:formData.education[0]?.institutionName}, with expertise in ${topHardSkills} and more. honed through 8+ projects. Skilled at leveraging cutting-edge tools to deliver innovative solutions. Proficient in ${isExampleProcessing?ExampleJsonData.contactInfo.Languages:formData.contactInfo.Languages}and recognized for exceptional ${isExampleProcessing?ExampleJsonData.skills.softSkills:formData.skills.softSkills}.`,
    `A results-driven ${isExampleProcessing?ExampleJsonData.contactInfo.jobTitle:formData.contactInfo.jobTitle} Graduated from ${isExampleProcessing?ExampleJsonData.education[0]?.institutionName:formData.education[0]?.institutionName}, mastered in ${topHardSkills} and more. Built over 10+ real-world projects. Adept in ${isExampleProcessing?ExampleJsonData.contactInfo.Languages:formData.contactInfo.Languages}and highly valued for strong ${isExampleProcessing?ExampleJsonData.skills.softSkills:formData.skills.softSkills}& creativity that drive Collaborative team work.`,
    `A dedicated ${isExampleProcessing?ExampleJsonData.contactInfo.jobTitle:formData.contactInfo.jobTitle} graduated from ${isExampleProcessing?ExampleJsonData.education[0]?.institutionName:formData.education[0]?.institutionName}, specializing in ${topHardSkills} and more. with hands-on experience in building 12+ impactful projects. Fluent in ${isExampleProcessing?ExampleJsonData.contactInfo.Languages:formData.contactInfo.Languages}with proven strengths in ${isExampleProcessing?ExampleJsonData.skills.softSkills:formData.skills.softSkills}bringing creativity and precision to every challenge.`,
    `A skilled ${isExampleProcessing?ExampleJsonData.contactInfo.jobTitle:formData.contactInfo.jobTitle} Graduated from ${isExampleProcessing?ExampleJsonData.education[0]?.institutionName:formData.education[0]?.institutionName}, with expertise in ${topHardSkills} and more. built over 22+ practical projects. Familiar with ${isExampleProcessing?ExampleJsonData.contactInfo.Languages:formData.contactInfo.Languages}and known for outstanding ${isExampleProcessing?ExampleJsonData.skills.softSkills:formData.skills.softSkills}that foster innovation and collaboration.`,
    `An innovative ${isExampleProcessing?ExampleJsonData.contactInfo.jobTitle:formData.contactInfo.jobTitle} graduated from ${isExampleProcessing?ExampleJsonData.education[0]?.institutionName:formData.education[0]?.institutionName}, with proficiency in ${topHardSkills} and more. demonstrated through 13+ diverse projects. Well-versed in ${isExampleProcessing?ExampleJsonData.contactInfo.Languages:formData.contactInfo.Languages}and appreciated for exceptional ${isExampleProcessing?ExampleJsonData.skills.softSkills:formData.skills.softSkills}in dynamic work environments.`,
    `A forward-thinking ${isExampleProcessing?ExampleJsonData.contactInfo.jobTitle:formData.contactInfo.jobTitle} graduated from ${isExampleProcessing?ExampleJsonData.education[0]?.institutionName:formData.education[0]?.institutionName}, with strong expertise in ${topHardSkills} and more. Successfully delivered 15+ innovative projects, demonstrating proficiency in ${isExampleProcessing?ExampleJsonData.contactInfo.Languages:formData.contactInfo.Languages}and earning recognition for exceptional ${isExampleProcessing?ExampleJsonData.skills.softSkills:formData.skills.softSkills}in fast-paced environments.`,
    `An enthusiastic ${isExampleProcessing?ExampleJsonData.contactInfo.jobTitle:formData.contactInfo.jobTitle} from ${isExampleProcessing?ExampleJsonData.education[0]?.institutionName:formData.education[0]?.institutionName}, with a proven track record in ${topHardSkills} and more. across 18+ industry-relevant projects. Skilled communicator in ${isExampleProcessing?ExampleJsonData.contactInfo.Languages:formData.contactInfo.Languages}with a reputation for ${isExampleProcessing?ExampleJsonData.skills.softSkills:formData.skills.softSkills}, problem-solving, and strategic thinking.`,
    `A dynamic ${isExampleProcessing?ExampleJsonData.contactInfo.jobTitle:formData.contactInfo.jobTitle} holding a Bachelor's from ${isExampleProcessing?ExampleJsonData.education[0]?.institutionName:formData.education[0]?.institutionName}, specializing in ${topHardSkills} and more. Accomplished 20+ successful projects that blend innovation with practical impact. Strong command over ${isExampleProcessing?ExampleJsonData.contactInfo.Languages:formData.contactInfo.Languages}and valued for adaptive ${isExampleProcessing?ExampleJsonData.skills.softSkills:formData.skills.softSkills}and leadership abilities.`,
    `An ambitious ${isExampleProcessing?ExampleJsonData.contactInfo.jobTitle:formData.contactInfo.jobTitle} graduated from ${isExampleProcessing?ExampleJsonData.education[0]?.institutionName:formData.education[0]?.institutionName}, excelling in ${topHardSkills} and more. through hands-on contributions to 25+ real-world projects. Proficient in ${isExampleProcessing?ExampleJsonData.contactInfo.Languages:formData.contactInfo.Languages}with a passion for applying ${isExampleProcessing?ExampleJsonData.skills.softSkills:formData.skills.softSkills}to solve complex challenges collaboratively.`,
    `A detail-oriented ${isExampleProcessing?ExampleJsonData.contactInfo.jobTitle:formData.contactInfo.jobTitle} from ${isExampleProcessing?ExampleJsonData.education[0]?.institutionName:formData.education[0]?.institutionName}, specializing in ${topHardSkills} and a proven track record of delivering 30+ impactful projects that drive business growth. Proficient in ${isExampleProcessing?ExampleJsonData.contactInfo.Languages:formData.contactInfo.Languages}, with a strong focus on ${isExampleProcessing?ExampleJsonData.skills.softSkills:formData.skills.softSkills}, bringing innovation, efficiency, and a solution-driven mindset to every project.`,
    `An accomplished ${isExampleProcessing?ExampleJsonData.contactInfo.jobTitle:formData.contactInfo.jobTitle} graduated from ${isExampleProcessing?ExampleJsonData.education[0]?.institutionName:formData.education[0]?.institutionName}, with deep knowledge in ${topHardSkills} and more. Built 17+ scalable projects demonstrating fluency in ${isExampleProcessing?ExampleJsonData.contactInfo.Languages:formData.contactInfo.Languages}and a consistent record of ${isExampleProcessing?ExampleJsonData.skills.softSkills:formData.skills.softSkills}that foster productive teamwork and innovation.`,
    `A highly motivated ${isExampleProcessing?ExampleJsonData.contactInfo.jobTitle:formData.contactInfo.jobTitle} from ${isExampleProcessing?ExampleJsonData.education[0]?.institutionName:formData.education[0]?.institutionName}, specialized in ${topHardSkills} and more. with extensive hands-on project experience. Delivered 19+ high-quality solutions with strong command over ${isExampleProcessing?ExampleJsonData.contactInfo.Languages:formData.contactInfo.Languages}and trusted for excellent ${isExampleProcessing?ExampleJsonData.skills.softSkills:formData.skills.softSkills}and professional integrity.`,
    `A creative and analytical ${isExampleProcessing?ExampleJsonData.contactInfo.jobTitle:formData.contactInfo.jobTitle} graduated from ${isExampleProcessing?ExampleJsonData.education[0]?.institutionName:formData.education[0]?.institutionName}, mastering ${topHardSkills} and more. through development of 14+ impactful projects. Fluent in ${isExampleProcessing?ExampleJsonData.contactInfo.Languages:formData.contactInfo.Languages}, with exceptional ${isExampleProcessing?ExampleJsonData.skills.softSkills:formData.skills.softSkills}that contribute to innovative product development and collaborative growth.`,
    `A performance-driven ${isExampleProcessing?ExampleJsonData.contactInfo.jobTitle:formData.contactInfo.jobTitle} from ${isExampleProcessing?ExampleJsonData.education[0]?.institutionName:formData.education[0]?.institutionName}, leveraging ${topHardSkills} and more. expertise to deliver 21+ successful projects. Skilled in ${isExampleProcessing?ExampleJsonData.contactInfo.Languages:formData.contactInfo.Languages}with a commitment to continuous learning and ${isExampleProcessing?ExampleJsonData.skills.softSkills:formData.skills.softSkills}that elevate team performance and project outcomes.`,
  ]

  const [completedSteps, setCompletedSteps]=useState(new Set());
  const [isInvalidMob,setIsInvalidMob]=useState(false);
  const [isInvalidMail,setIsInvalidMail]=useState(false);
  const [isInvalidWDuration,setIsInvalidWDuration]=useState(false);
  const [isInvalidGDuration,setIsInvalidGDuration]=useState(false);
  const [isInvalidSGPA,setIsInvalidSGPA]=useState(false);
  const [isOpen, setIsOpen]=useState(false);
  const [isPreviewOpen, setIsPreviewOpen]=useState(false);
  const [showInput, setShowInput]=useState(false);
  const [pin, setPin]=useState("");
  const [error, setError]=useState(false);
  const [selectTemp, setSelectTemp]=useState(false);
  const AboutTemps=["Simpler and Structured","Linear and Classic","Colourfull and Attractive","Colourful and Highly Designed","Simpler and Linear","Highly Simpler and Classic"]
  const Suggests=[
    "Hi, I'm here to assist you in building a strong, high-quality, and ATS-friendly resume. Let's make it impressive together! 🤝",
    "First, start by choosing a template that best fits your style and profession.",
    `You selected template ${Number(formData.selectedTemplate)} which is ${AboutTemps[Number(formData.selectedTemplate) - 1]} ${Number(formData.selectedTemplate) === 4 ? "according to report This template currently has PDF alignment issues 🧐. Please choose a different one you like." : "🤟. Let's move forward and fill in the details (Click Next)." }`,
    "Now, start by filling in your basic details as the form asks. \nDon't worry -- you got suggestions onward which saves much of your time ☺️",
    "Good job! Now it's time to showcase your skills... \nAs you can see, your data is being live-rendered by our app and displayed above in real-time",
    "Consider adding 8+ 'relevant' technical skills. It not only demonstrates your technical breadth but also highlights your creativity, adaptability, and eagerness to learn 🚀",
    "The soft skills will show in summary of resume. or either display on template. consider to show your uniqueness",
    "Add 2-3 languages you are familiar with — it helps organizations understand your comfort level and communication ability.",
    "If you are applying for remote jobs add just 'State' else 'City (State)' and process Next... it's 35% done",
    "Now it's time to mention your Experiences, as a intern or full time employee",
    "Consider adding at least two experiences -- it increases your resume score and showcases practical exposure.",
    "Now process Next...",
    "It's time to showcase your projects! We recommend adding at least 3 because it's a good number to reflect your real-world experience.",
    "Now click Next... it's 65% done",
    "Now Mention your Pre/Post graduations 🎓 here. \nconsider to list most recent Qualification first",
    "if You only have one degree you can also mention your Primary/Secondary education below...",
    "Proceed further...",
    "You're 90% Done 😊... \nJust showcase your achieved certificates and proceed further.",
    "We recommend to add atleast 5 certifications (Every Colleges and universities offer plenty of certificates during Academics). just mention top 5",
    "Click Next...",
    "Write 'A' to get some descriptions created by me...\n You can adjust them as per your preference and submit your data — we'll generate a Resume for you in HTML/CSS and PDF format.",
    "We didn't store your data due to sensitive informations like your mobile number or personal preferences (job title, certificates, experiences) — to ensure your privacy 🔏 and avoid misuse by third-party ads.",
    "want to suggest some improvements?? feel free to Mail us on nishantsingh.talk@gmail.com \ni hope we meet again 👋",
    "Now process Next..."
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    const Suggest = new Typed("#Suggestion-typing-text", {
      strings: [Suggests[i]],
      loop: false,
      typeSpeed: 30,
      showCursor: true,
    });
  
    if (i === 0) {
      const timer = setTimeout(() => {
        setI(1);
        setSelectTemp(true)
      }, 11000);
      return () => clearTimeout(timer);
    }

    return () => {
      Suggest.destroy();
    };
  }, [i]);

  
  const FIREBASE_URL = "https://resume-builder-suggestions-default-rtdb.firebaseio.com/ResumesBuilt.json";

  useEffect(() => {
    fetch(FIREBASE_URL)
      .then(res => res.json())
      .then(current => {
        setResumesBuilt(current || 0);  // Show existing count
      })
      .catch(error => {
        console.error("Error fetching resume count:", error);
      });
  }, []);

  const updateResumeCount = () => {
    fetch(FIREBASE_URL)
      .then(res => res.json())
      .then(current => {
        const updated = (current || 0) + 1;
  
        return fetch(FIREBASE_URL, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updated),
        }).then(() => {
          setResumesBuilt(updated);  // update UI
        });
      })
      .catch(error => {
        console.error("Error updating resume count:", error);
      });
  };
  
  const steps=[
    { title: 'Choose a template that suits you best', key: 'Template' },
    { title: 'Begin with your contact details', key: 'Contact Info' },
    { title: 'Showcase your skills', key: 'Skills' },
    { title: 'Share your work experience', key: 'Work Experience' },
    { title: 'Highlight your top projects', key: 'Projects' },
    { title: 'Demonstrate your knowledge', key: 'Education' },
    { title: 'Add your achieved certifications', key: 'Certificates' },
    { title: 'Decribe about you', key: 'Description' }
  ];
  
  const HandleExampleProcessing=() => {
    setIsExampleProcessing(true);
    const newSet=new Set();
    for (let i=0; i < 8; i++) {
      newSet.add(i);
    }
    setCompletedSteps(newSet);
  };

  const handleVerify=(e) => {
    if (e.key === "Enter" || e.key=="Tab" || pin.length==6) {  
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

  if (UserjsonData && !isExampleProcessing){
    HandleExampleProcessing();
  }
  
  const handleInputChange=(section, field, value, index=null) => {
    if (!isExampleProcessing){
      setFormData(prev => {
        const newData={ ...prev };
        if (index !== null && field!=null) {
          newData[section][index][field]=value;
        } else if (typeof newData[section] === 'object' && !Array.isArray(newData[section]) && field!=null) {
          newData[section][field]=value;
        }
        return newData;
      });
    } else{
      setExampleJsonData(prev => {
        const newData={ ...prev };
        if (index !== null && field!=null) {
          newData[section][index][field]=value;
        } else if (typeof newData[section] === 'object' && !Array.isArray(newData[section]) && field!=null) {
          newData[section][field]=value;
        }
        return newData;
      });
    }

  };

  const addNewItem=(section) => {
    if (!isExampleProcessing){
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
    }else{
      setExampleJsonData(prev => ({
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
    }
  };

  const handleNext=() => {
    const Fields={
      0: [formData.selectedTemplate],
      1: [
        formData.contactInfo.fullName,
        formData.contactInfo.phoneNumber,
        formData.contactInfo.emailAddress,
        formData.contactInfo.linkedin,
        formData.contactInfo.portfolio,
        formData.contactInfo.jobTitle,
      ],
      2: [
        formData.skills.hardSkills,
        formData.skills.softSkills,
        formData.contactInfo.Languages,
        formData.contactInfo.Location,
      ],
      3: formData.workExperience.length > 0 ? formData.workExperience.map(exp => [exp.jobTitle, exp.companyName, exp.WorkDuration, exp.keyAchievements]) : [[]],
      4: formData.projects.length > 0 ? formData.projects.map(proj => [proj.projectTitle, proj.toolsTechUsed]) : [[]],
      5: formData.education.length > 0 ? formData.education.map(edu => [edu.institutionName, edu.degreeName, edu.graduationYear, edu.currentSGPA]) : [[]],
      6: formData.certificates.length > 0 ? formData.certificates.map(cert => [cert.certificateName, cert.courseDuration, cert.providerName]) : [[]],
      7: [formData.Description.UserDescription],
    };
  
    if (!(currentStep in Fields)) {
      toast.error("Invalid step provided.", {
        duration: 3000, 
        position: "top-right",
      });
      return;
    }
    
    const areFieldsValid=(fields) => fields.every((field) => typeof field === "string" && field.trim() !== "");
    setNextError(false);
    for (let step=0; step <= currentStep; step++) {
      const requiredFields=Fields[step].flat();
      if (requiredFields.length > 0 && !areFieldsValid(requiredFields) && !isExampleProcessing) {
        setNextError(true)
        toast.error("You need to complete the details on this page and the previous one before moving ahead.", {
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
    } else {          // its only validate if input current step is previously doned {if future step found to be next without filling details it though error}
      for (let step=0; step <= 7; step++) {
        const requiredFields=Fields[step].flat();
        if (requiredFields.length > 0 && !areFieldsValid(requiredFields) && !isExampleProcessing) {
          toast.error("Please complete all required fields before submitting.", {
            duration: 3000, 
            position: "top-right",
          });
          return;
        }
      }

      updateResumeCount();
  
      navigate('/Result', {
        state: {
          jsonData: isExampleProcessing ? ExampleJsonData : formData
        }
      });
      // if (!isExampleProcessing){
      //   navigate('/Result');
      //   console.log("Form submitted:", formData);
    
      //   const jsonData=JSON.stringify(formData, null, 2);
      //   const blob=new Blob([jsonData], { type: "application/json" });
      //   const url=URL.createObjectURL(blob);
    
      //   const a=document.createElement("a");
      //   a.href=url;
      //   a.download="resume_data.json";
      //   document.body.appendChild(a);
      //   a.click();
    
      //   document.body.removeChild(a);
      //   URL.revokeObjectURL(url);
      // }else{
      //   const jsonData=JSON.stringify(ExampleJsonData, null, 2);
      //   fetch("http://127.0.0.1:5000/upload", {
      //     method: "POST",
      //     headers: {
      //         "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(ExampleJsonData),
      // })
      // .then(response => response.json())
      // .then(data => console.log("Success:", data))
      // .catch(error => console.error("Error:", error));
      // }
    }
  };
  

  const renderFormSection=() => {
    switch (currentStep) {
      case 1:
        {i==2 && setI(3)}
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl mb-4 pb-1 font-bold border-b-4 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400">Contact Information</h2>
              <div className="space-y-2">
                <Suggestions
                  label="Full Name"
                  placeholder="Your name"
                  value={isExampleProcessing ? ExampleJsonData.contactInfo.fullName : formData.contactInfo.fullName}
                  onChange={(val) => {handleInputChange("contactInfo", "fullName", val);}}
                  suggestions={['Aarav', 'Aarohi','Tanishk','Piyush', 'Abhimanyu', 'Abhishek', 'Abraham', 'Adarsh', 'Aditi', 'Aditya', 'Agarwal', 'Aisha','Ajay', 'Ali', 'Alisha', 'Amisha', 'Amit', 'Ananya', 'Aniket', 'Anirudh', 'Anitha', 'Ankush', 'Ansari','Anupam', 'Aparna', 'Arindam', 'Arjun', 'Armaan', 'Arpita', 'Arvind', 'Aryan', 'Ashu', 'Ashwin', 'Asmita','Atul', 'Ayaan', 'Ayesha', 'Bajwa', 'Baljit', 'Bandyopadhyay', 'Bansal', 'Barot', 'Bhardwaj', 'Bhatt','Bhattacharya', 'Bhavesh', 'Bhavin', 'Bhavna', 'Bhawna', 'Bhumi', 'Bose', 'Brar', 'Chaitali', 'Chakraborty','Chatterjee', 'Chauhan', 'Chintan', 'Chirag', 'Choudhary', 'Chowdary', "D'Souza", 'Das', 'Dave', 'Deb','Deepak', 'Desai', 'Dev', 'Dhaval', 'Dhillon', 'Dias', 'Dinesh', 'Dipankar', 'Divya', 'Divyashree', 'Dubey','Dutta', 'Dwivedi', 'Faizan', 'Farooqi', 'Fatima', 'Fernandes', 'Gagandeep', 'Gaurav', 'George', 'Ghosh','Gill', 'Gohil', 'Gowda', 'Goyal', 'Grewal', 'Gupta', 'Gurpreet', 'Hari', 'Harleen', 'Harpreet', 'Harsh','Harshita', 'Hemant', 'Hussain', 'Ipsita', 'Irfan', 'Ishita', 'Iyengar', 'Iyer', 'Jadeja', 'Jasleen', 'Jatin','Jha', 'Jignesh', 'Joseph', 'Joshi', 'Juhi', 'Karthik', 'Karthikeyan', 'Kaur', 'Kavita', 'Keerthi', 'Khan','Kiran', 'Kiranpreet', 'Komal', 'Krishna', 'Krishnan', 'Kriti', 'Kulshreshtha', 'Kumar', 'Kunal', 'Laboni','Lakshmi', 'Lakshya', 'Lata', 'Lavanya', 'Madhavan', 'Madhumita', 'Mahajan', 'Mahesh', 'Mallika', 'Manish','Manisha', 'Mann', 'Manpreet', 'Mathew', 'Meenakshi', 'Meera', 'Mehta', 'Menon', 'Mirza', 'Mishra', 'Mitali','Mitra', 'Modi', 'Mohan', 'Mondal', 'Moumita', 'Mrunal', 'Mudaliar', 'Mukherjee', 'Murthy', 'Naidu', 'Nair','Naveen', 'Navjot', 'Nazma', 'Neha', 'Nidhi', 'Nigam', 'Nikhil', 'Nikita', 'Nishant', 'Pal', 'Pallavi','Pandey', 'Parmar', 'Parminder', 'Parth', 'Patel', 'Pathak', 'Paul', 'Payal', 'Pereira', 'Pillai', 'Piyali','Pooja', 'Prachi', 'Prajapati', 'Prakash', 'Prasad', 'Preeti', 'Prithwish', 'Priya', 'Qureshi', 'Rabia','Radha', 'Radhika', 'Raghav', 'Rahul', 'Raj', 'Rajesh', 'Rajinikanth', 'Rajiv', 'Rajput', 'Ramesh', 'Rana','Rao', 'Rastogi', 'Rathod', 'Ravi', 'Ravneet', 'Rawat', 'Reddy', 'Rehan', 'Rekha', 'Revathi', 'Ritesh','Ritwik', 'Riya', 'Rodrigues', 'Rohan', 'Roy', 'Rupa', 'Rupali', 'Sagar', 'Sameer', 'Sana', 'Sanchari','Sandeep', 'Sandhu', 'Sanya', 'Sarkar', 'Satnam', 'Saxena', 'Sen', 'Shah', 'Shahid', 'Shalini', 'Sharma','Sheikh', 'Shetty', 'Shivam', 'Shruthi', 'Shruti', 'Siddharth', 'Siddiqui', 'Sidhu', 'Simran', 'Simranjeet','Sindhu', 'Singh', 'Sinha', 'Sneha', 'Solanki', 'Sonali', 'Sourav', 'Sowmya', 'Srinivas', 'Srivastava','Subham', 'Subramanian', 'Sumit', 'Sumita', 'Supriya', 'Surbhi', 'Suresh', 'Surya', 'Sutapa', 'Suthar','Swamy', 'Swati', 'Syed', 'Tanmoy', 'Tanvi', 'Tanya', 'Tejas', 'Thakkar', 'Thakur', 'Thomas', 'Tiwari','Tripathi', 'Trisha', 'Urmila', 'Vaishnavi', 'Varun', 'Venkatesh', 'Verma', 'Vidya', 'Vihaan', 'Vikas','Vikram', 'Vivaan', 'Yadav', 'Yash', 'Zaid', 'Zara','Akhil', 'Anmol', 'Bhupinder', 'Chandan', 'Charan', 'Chinmay', 'Darshan', 'Deeksha', 'Diksha', 'Ekta','Eshan', 'Girish', 'Gunjan', 'Hemlata', 'Indira', 'Ishaan', 'Jayant', 'Jaya', 'Jeet', 'Jyoti', 'Kalyani','Kamlesh', 'Kanika', 'Karishma', 'Kaustubh', 'Khushboo', 'Kishore', 'Kriti', 'Leela', 'Madhuri', 'Mahima','Mala', 'Mangesh', 'Manju', 'Mehul', 'Mohit', 'Monika', 'Mridula', 'Namita', 'Nandini', 'Nayan', 'Nisha','Nishita', 'Omkar', 'Pankaj', 'Poojan', 'Pranav', 'Prerna', 'Radheshyam', 'Rajani', 'Rajendra', 'Rani','Ravindra', 'Ritika', 'Rohit', 'Roshni', 'Sahil', 'Saloni', 'Sampath', 'Sanket', 'Sarika', 'Seema','Sharad', 'Sharanya', 'Sharvani', 'Shashi', 'Sheetal', 'Shraddha', 'Shreyas', 'Snehal', 'Sonal', 'Sonam','Sudha', 'Sujata', 'Surabhi', 'Surbhi', 'Tanisha', 'Tarun', 'Tina', 'Uday', 'Upasana', 'Utkarsh', 'Vaibhav','Vasudha', 'Veena', 'Vibha', 'Vidushi', 'Vimal', 'Vishal', 'Vishesh', 'Yogesh']}
                  isPara={true}
                />
                <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">Phone Number</label>
                <input
                  type="number"
                  placeholder="9658XX1459"
                  className={`w-full sm:p-2 sm:px-6 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${isInvalidMob?"focus:ring-red-500":"focus:ring-blue-500"}  dark:bg-gray-800 dark:text-white dark:border-gray-600 
                  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                  value={isExampleProcessing ? ExampleJsonData.contactInfo.phoneNumber : formData.contactInfo.phoneNumber}
                  onChange={(e) => {handleInputChange("contactInfo", "phoneNumber", e.target.value)}}
                  onBlur={(e) => {
                    const value=e.target.value;
                    if (!/^\d{10}$/.test(value)) {
                      toast.error("Phone number must be of 10 digits", { duration: 3000, position: "top-right" });
                      setIsInvalidMob(true);
                      e.target.focus(); 
                    }else{
                      setIsInvalidMob(false);
                    }
                  }}
                />
                <div className={`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${isInvalidMob? "bg-red-500":"bg-blue-500"}`}></div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">Email Address</label>
                <input
                  type="email"
                  placeholder="xyz231@gmail.com"
                  className={`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${isInvalidMail?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`}
                  value={isExampleProcessing ? ExampleJsonData.contactInfo.emailAddress : formData.contactInfo.emailAddress}
                  onChange={(e) => {handleInputChange("contactInfo", "emailAddress", e.target.value)}}
                  onBlur={(e) => {
                    const value=e.target.value;
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
                <label className="block text-sm font-medium dark:text-slate-300">LinkedIn UserName</label>
                <input
                  type="text"
                  placeholder="xyz231"
                  className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  value={isExampleProcessing ? ExampleJsonData.contactInfo.linkedin : formData.contactInfo.linkedin}
                  onChange={(e) => {
                      handleInputChange("contactInfo", "linkedin", e.target.value)
                  }}
                />
                <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-slate-300">Portfolio URL / Github UserName</label>
                <input
                  type="text"
                  placeholder='Personal portfolio URL if have else add GitHub UserName'
                  className="w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  value={isExampleProcessing ? ExampleJsonData.contactInfo.portfolio : formData.contactInfo.portfolio}
                  onChange={(e) => {
                      handleInputChange('contactInfo', 'portfolio', e.target.value)
                  }}
                />
                <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>

              <div className="space-y-2">
                <div className="peer w-full">
                  <Suggestions
                    label="Job Title"
                    placeholder="Data Scientist"
                    value={isExampleProcessing ? ExampleJsonData.contactInfo.jobTitle : formData.contactInfo.jobTitle}
                    onChange={(val) => {
                        handleInputChange('contactInfo', 'jobTitle', val)
                      {(i==3 && !isExampleProcessing) && setI(23)}
                    }}
                    suggestions={['3D Animator', '3D Artist', 'AI Auditor', 'AI Content Creator', 'AI Ethics Researcher', 'AI Hardware Specialist', 'AI Policy Analyst', 'AI Product Manager', 'AI Researcher', 'AI Trainer', 'Academic Advisor', 'Account Manager', 'Accountant', 'Advertising Manager', 'Affiliate Marketing Manager', 'Agricultural Scientist', 'Algorithm Engineer', 'Android Developer', 'Animal Behaviorist', 'Animation Artist', 'Application Support Engineer', 'Archaeologist', 'Archivist', 'Astrophysicist', 'Athletic Trainer', 'Automation Engineer', 'Autonomous Vehicle Engineer', 'Backend Developer', 'Big Data Engineer', 'Bioinformatics Scientist', 'Biomedical Engineer', 'Blockchain Architect', 'Blockchain Developer', 'Botanist', 'Brand Manager', 'Business Analyst', 'Business Development Manager', 'Business Intelligence Analyst', 'Business Relationship Manager', 'Business Systems Analyst', 'CRM Specialist', 'Career Counselor', 'Change Management Specialist', 'Chief Data Officer (CDO)', 'Chief Information Officer (CIO)', 'Chief Marketing Officer (CMO)', 'Chief Technology Officer (CTO)', 'Chip Design Engineer', 'Climate Data Scientist', 'Clinical Data Manager', 'Clinical Research Coordinator', 'Cloud Architect', 'Cloud Consultant', 'Cloud Security Engineer', 'Community Manager', 'Compliance Officer', 'Computer Vision Engineer', 'Construction Project Manager', 'Content Manager', 'Content Strategist', 'Conversational AI Designer', 'Copywriter', 'Corporate Lawyer', 'Creative Director', 'Creative Technologist', 'Customer Success Manager', 'Cybersecurity Analyst', 'Cybersecurity Consultant', 'Data Analyst', 'Data Engineer', 'Data Privacy Consultant', 'Data Scientist', 'Data Visualization Specialist', 'Database Administrator', 'Deep Learning Engineer', 'DevOps Engineer', 'Dietitian', 'Digital Marketing Specialist', 'Digital Strategist', 'E-commerce Manager', 'ERP Consultant', 'EdTech Specialist', 'Education Consultant', 'Electronics Design Engineer', 'Email Marketing Specialist', 'Embedded Systems Engineer', 'Energy Analyst', 'Environmental Scientist', 'Esports Manager', 'Ethical Hacker', 'Event Manager', 'Fashion Designer', 'Film Director', 'Financial Analyst', 'Firmware Engineer', 'Fitness Trainer', 'Food Technologist', 'Forensic Accountant', 'Forestry Specialist', 'Fraud Analyst', 'Frontend Developer', 'Full Stack Developer', 'Fundraising Manager', 'Game Designer', 'Game Developer', 'Generative AI Specialist', 'Geospatial Data Scientist', 'Grant Writer', 'Graphic Designer', 'Growth Hacker', 'HR Manager', 'Hardware Engineer', 'Health Informatics Specialist', 'Healthcare Data Analyst', 'Historian', 'IT Compliance Analyst', 'IT Manager', 'IT Support Specialist', 'Industrial Engineer', 'Influencer Marketing Manager', 'Innovation Manager', 'Instructional Designer', 'Interior Designer', 'International Development Specialist', 'Investment Banker', 'IoT Engineer', 'Jewelry Designer', 'Knowledge Manager', 'LMS Administrator', 'Laboratory Technician', 'Learning Experience Designer', 'Learning and Development Specialist', 'Legal Advisor', 'Legal Tech Specialist', 'Lighting Technician', 'Linguist', 'Localization Specialist', 'Logistics Manager', 'MLOps Engineer', 'Machine Learning Engineer', 'Management Consultant', 'Marine Biologist', 'Market Research Analyst', 'Marketing Manager', 'Mechanical Design Engineer', 'Media Planner', 'Metaverse Architect', 'Mobile App Developer', 'Motion Graphics Designer', 'Museum Curator', 'Music Producer', 'NGO Coordinator', 'NLP Engineer', 'Network Administrator', 'Nonprofit Program Manager', 'Nutritionist', 'Occupational Therapist', 'Online Course Designer', 'Open Source Developer', 'Operations Analyst', 'Operations Manager', 'Organizational Development Manager', 'PR Specialist', 'Paid Media Specialist', 'Partnerships Manager', 'Patent Analyst', 'Penetration Tester', 'Personal Financial Advisor', 'Pharmaceutical Scientist', 'Physiotherapist', 'Platform Engineer', 'Podcast Producer', 'Policy Advisor', 'Policy Researcher', 'Political Analyst', 'Procurement Specialist', 'Product Designer', 'Product Manager', 'Program Manager', 'Project Manager', 'Prompt Engineer', 'Psychologist', 'Public Health Data Analyst', 'Quality Assurance Specialist', 'Quantum Algorithm Developer', 'Quantum Computing Researcher', 'Radio Jockey', 'Real Estate Analyst', 'Recruiter', 'Regulatory Affairs Specialist', 'Release Manager', 'Remote Sensing Specialist', 'Renewable Energy Consultant', 'Research Assistant', 'Research Scientist', 'Risk Analyst', 'Robotics Engineer', 'SAP Consultant', 'SDET (Software Development Engineer in Test)', 'SEO Specialist', 'SaaS Product Manager', 'Sales Executive', 'School Counselor', 'Screenwriter', 'Scrum Master', 'Security Engineer', 'Set Designer', 'Simulation Engineer', 'Site Reliability Engineer (SRE)', 'Smart Contract Developer', 'Social Media Manager', 'Sociologist', 'Software Engineer', 'Sound Engineer', 'Speech Recognition Engineer', 'Sports Coach', 'Startup Founder', 'Supply Chain Analyst', 'Sustainability Consultant', 'Systems Engineer', 'Talent Acquisition Specialist', 'Technical Account Manager', 'Technical Program Manager', 'Technical Recruiter', 'Technical Writer', 'Test Automation Engineer', 'Translation Specialist', 'UI/UX Designer', 'UX Researcher', 'Urban Designer', 'Urban Planner', 'VR/AR Developer', 'Venture Capital Analyst', 'Veterinarian', 'Video Editor', 'Visual Designer', 'Voice Actor', 'Voice User Interface Designer', 'Wealth Manager', 'Wildlife Biologist', 'Yoga Instructor', 'Zoologist', 'iOS Developer']}
                    isMultiSuggestion={false}
                  />
                </div>
                <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>
          </div>
        );

      case 2:
        {i==23 && setI(4)}
        return (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 pb-1 text-blue-800 dark:border-blue-500 dark:text-blue-400">Skills</h2>

            <div className="space-y-2">
              <div className="peer">
                <Suggestions
                  label="Technical Skills"
                  placeholder="TensorFlow, NLP, Scikit-learn, Keras, Transformers, C/C++, Java, JavaScript, React"
                  value={isExampleProcessing ? ExampleJsonData.skills.hardSkills : formData.skills.hardSkills}
                  onChange={(val) => {
                      {(i===4 && !isExampleProcessing) && setI(5)}
                      handleInputChange("skills", "hardSkills", val);
                  }}
                  suggestions={['.NET Core', 'A3C', "API's Integration", 'ASP.NET MVC', 'AWS', 'AWS CDK', 'AWS Lambda', 'Actix', 'Adobe XD', 'AdonisJS', 'Agile', 'Airflow', 'Alpine.js', 'Angular', 'Ansible', 'Ant Design', 'Apache', 'Apache Airflow', 'Apollo Server', 'Appgyver', 'Arduino', 'Astro', 'Aurora', 'AutoML', 'Autoencoders', 'Azure', 'BLAST', 'Babylon.js', 'Beego', 'BioPerl', 'Bioconductor', 'Biopython', 'Bitbucket', 'Blockchain', 'Bootstrap', 'Brownie', 'Bubble', 'Bulma', 'Burp Suite', 'C', 'C++', "CNN's", 'CSS', 'Capsule Networks', 'Cassandra', 'CatBoost', 'CentOS', 'Chakra UI', 'ChromaDB', 'CircleCI', 'Cirq', 'Cocos2d', 'CodeIgniter', 'Computer Vision', 'Contentful', 'Cosmos DB', 'Cybersecurity', 'Cypress', 'DDPG', 'DQN', 'Dagster', 'Dask', 'Data Engineering', 'Design Patterns', 'DevSecOps', 'Django', 'Docker', 'Docker Compose', 'Dropwizard', 'ELK Stack', 'ETL Pipelines', 'Echo', 'Edge Computing', 'EfficientNet', 'Electron.js', 'Embedded Systems', 'Ethers.js', 'Express', 'Express.js', 'FAISS', 'FastAPI', 'Faster R-CNN', 'Fedora', 'Fiber', 'Figma', 'Firebase', 'Firebase Functions', 'Flask', 'Flutter', 'Flutter (Web)', 'Foundation', 'Foundry', 'Framer Motion', 'GANs', 'GCP', 'GNNs', 'GRUs', 'GSAP', 'Galaxy', 'Gatsby', 'Gin', 'Git', 'GitHub', 'GitHub Actions', 'GitLab', 'Go', 'Godot', 'Grafana', 'GraphQL', 'HTML', 'Hadoop', 'Hapi', 'Hardhat', 'Helm', 'Hive', 'HubSpot', 'Hugging Face', 'IAM', 'IPFS', 'IoT Systems', 'Ionic', 'JAX', 'JUnit', 'JWT', 'Java', 'JavaScript', 'Jenkins', 'Jest', 'Jetpack Compose', 'Kafka', 'Kanban', 'Kedro', 'Keras', 'Kivy', 'Koa', 'Kotlin', 'Kotlin (Android)', 'Kubernetes', "LLM's", 'LSTMs', 'LangChain', 'LangSmith', 'Laravel', 'LightGBM', 'Linux', 'LoopBack', 'LottieFiles', 'Luigi', 'MATLAB', 'MLPs', 'MQTT', 'Mailchimp', 'Mantine', 'Mask R-CNN', 'Material UI', 'Matplotlib', 'Mbed OS', 'Metasploit', 'Micronaut', 'Microservices', 'Mocha', 'Modin', 'MongoDB', 'MySQL', 'NLP', 'NativeScript', 'NestJS', 'New Relic', 'Next.js', 'Nginx', 'Nmap', 'NoSQL', 'Node.js', 'NumPy', 'Nuxt', 'Nuxt.js', 'OAuth 2.0', 'OCR', 'OOP', 'OWASP', 'OpenCV', 'OpenVAS', 'OutSystems', 'PHP', 'PPO', 'Pandas', 'PayPal APIs', 'Penetration Testing', 'Phoenix (Elixir)', 'Pinecone', 'PixiJS', 'PlatformIO', 'Playwright', 'Plotly', 'Polars', 'PostgreSQL', 'Postman', 'Power BI', 'Preact', 'Prefect', 'PrimeReact', 'Prometheus', 'Prompt Engineering', 'Pulumi', 'PyQt', 'PyTest', 'PyTorch', 'Pygame', 'Pyramid', 'Pytest', 'Python', 'Qiskit', 'Qt', 'Quarkus', 'Qwik', 'RAG', 'REST API', 'RLlib', "RNN's", 'ROS (Robot Operating System)', 'Radix UI', 'React', 'React Native', 'React.js', 'Redis', 'Remix', 'ResNet', 'Retool', 'Rocket', 'Ruby', 'Ruby on Rails', 'Rust', 'SAC', 'SOLID Principles', 'SQL', 'SQLite', 'SageMaker', 'Sails.js', 'Scikit-learn', 'Scrum', 'Seaborn', 'Selenium', 'Semantic Search', 'Seqtk', 'Serverless', 'Serverless Framework', 'ShadCN/UI', 'Shell Scripting', 'Shopify APIs', 'Sinatra', 'Smart Contracts', 'Snort', 'Socket.IO', 'SolidJS', 'Solidity', 'Spark', 'Speech Recognition', 'Spring Boot', 'Stable Diffusion', 'Stripe APIs', 'Supabase', 'Svelte', 'SvelteKit', 'Swagger', 'Swift', 'Swift (iOS)', 'SwiftUI', 'Swin Transformer', 'Symfony', 'System Design', 'Tableau', 'Tailwind CSS', 'TailwindCSS', 'Tauri', 'TensorFlow', 'Terraform', 'Three.js', 'Tkinter', 'Tornado', 'Truffle', 'TypeScript', 'UNet', 'Ubuntu', 'Unity', 'Unity 3D', 'Unreal 5', 'Unreal Engine', 'VAEs', 'Vaex', 'Vector Databases', 'Vertex AI', 'Vision Transformer (ViT)', 'Vue', 'Vue.js', 'WPF', 'Warp', 'Web3.js', 'WebGL', 'WebSocket', 'WebXR', 'Webflow', 'Wireshark', 'WooCommerce APIs', 'WordPress', 'XGBoost', 'Xamarin', 'YOLO', 'Zapier', 'Zend Framework', 'dbt', 'gRPC', 'i18n']}
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
                        {(i===5 && !isExampleProcessing) && setI(6)}
                        handleInputChange("skills", "softSkills", val);
                    }}
                    suggestions={['Accountability', 'Active Listening', 'Adaptability', 'Attention to Detail', 'Change Management', 'Coaching', 'Collaboration', 'Communication', 'Confidence', 'Conflict Management', 'Conflict Resolution', 'Constructive Feedback', 'Creativity', 'Cross-Functional Collaboration', 'Cultural Awareness', 'Curiosity', 'Customer Service', 'Decision Making', 'Decision Ownership', 'Delegation', 'Diplomacy', 'Emotional Intelligence', 'Emotional Stability', 'Empathy', 'Ethical Judgment', 'Flexibility', 'Goal Setting', 'Growth Mindset', 'Initiative', 'Innovation', 'Interpersonal Skills', 'Leadership Development', 'Learning Agility', 'Mentoring', 'Motivational Skills', 'Negotiation', 'Networking', 'Open-Mindedness', 'Patience', 'Persistence', 'Personal Branding', 'Persuasion', 'Positive Attitude', 'Problem Sensitivity', 'Professionalism', 'Public Speaking', 'Relationship Building', 'Resilience', 'Respectfulness', 'Responsibility', 'Result Orientation', 'Self-Awareness', 'Self-Discipline', 'Self-Improvement', 'Self-Motivation', 'Strategic Thinking', 'Stress Management', 'Thinking', 'Time Management', 'Tolerance', 'Vision Setting', 'Work Ethic']}
                  />
                </div>
                <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>

              <div className="space-y-2">
                <div className="peer">
                  <Suggestions
                    label="Languages you are familiar with"
                    placeholder="English, Hindi, French"
                    value={isExampleProcessing ? ExampleJsonData.contactInfo.Languages : formData.contactInfo.Languages}
                    onChange={(val) => {
                        {(i===6 && !isExampleProcessing) && setI(7)}
                        handleInputChange("contactInfo", "Languages", val);
                    }}
                    suggestions={["Hindi","English","Spanish","Bengali","Portuguese","Russian","Japanese","Punjabi","Marathi","Telugu","French","German","Tamil","Urdu"]}
                  />
                </div>
                <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>
              
              <div className="space-y-2">
                <div className="peer">
                  <Suggestions
                    label="YourLocation"
                    placeholder="Haridwar (UTTRAKHAND)"
                    value={isExampleProcessing ? ExampleJsonData.contactInfo.Location : formData.contactInfo.Location}
                    onChange={(val) => {
                        {(i===7 && !isExampleProcessing) && setI(8)}
                        handleInputChange('contactInfo', 'Location', val);
                    }}
                    suggestions={['Agartala (Tripura)', 'Ahmedabad (Gujarat)', 'Aizawl (Mizoram)', 'Ambala (Haryana)', 'Amritsar (Punjab)', 'Aurangabad (Maharashtra)', 'Bengaluru (Karnataka)', 'Bhopal (Madhya Pradesh)', 'Bhubaneswar (Odisha)', 'Chandigarh', 'Chennai (Tamil Nadu)', 'Coimbatore (Tamil Nadu)', 'Cuttack (Odisha)', 'Dehradun (Uttarakhand)', 'Delhi', 'Dimapur (Nagaland)', 'Dispur (Assam)', 'Faridabad (Haryana)', 'Gandhinagar (Gujarat)', 'Gangtok (Sikkim)', 'Ghaziabad (Uttar Pradesh)', 'Gurugram (Haryana)', 'Guwahati (Assam)', 'Gwalior (Madhya Pradesh)', 'Haridwar (Uttarakhand)', 'Howrah (West Bengal)', 'Hubli (Karnataka)', 'Hyderabad (Telangana)', 'Imphal (Manipur)', 'Indore (Madhya Pradesh)', 'Itanagar (Arunachal Pradesh)', 'Jaipur (Rajasthan)', 'Jalandhar (Punjab)', 'Jamshedpur (Jharkhand)', 'Jodhpur (Rajasthan)', 'Kanpur (Uttar Pradesh)', 'Kochi (Kerala)', 'Kolkata (West Bengal)', 'Kota (Rajasthan)', 'Kozhikode (Kerala)', 'Lucknow (Uttar Pradesh)', 'Ludhiana (Punjab)', 'Madurai (Tamil Nadu)', 'Mangalore (Karnataka)', 'Mohali (Punjab)', 'Mumbai (Maharashtra)', 'Mysuru (Karnataka)', 'Nagpur (Maharashtra)', 'Nainital (Uttarakhand)', 'Nashik (Maharashtra)', 'New Delhi', 'Noida (Uttar Pradesh)', 'Panaji (Goa)', 'Panchkula (Haryana)', 'Patiala (Punjab)', 'Patna (Bihar)', 'Pune (Maharashtra)', 'Raipur (Chhattisgarh)', 'Rajkot (Gujarat)', 'Ranchi (Jharkhand)', 'Rishikesh (Uttarakhand)', 'Salem (Tamil Nadu)', 'Secunderabad (Telangana)', 'Shillong (Meghalaya)', 'Siliguri (West Bengal)', 'Surat (Gujarat)', 'Thane (Maharashtra)', 'Thiruvananthapuram (Kerala)', 'Tiruchirappalli (Tamil Nadu)', 'Udaipur (Rajasthan)', 'Vadodara (Gujarat)', 'Varanasi (Uttar Pradesh)', 'Warangal (Telangana)']}
                    isMultiSuggestion={false}
                  />
                </div>
                <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
              </div>
          </div>
        );

      case 3:
        if (!isExampleProcessing){
          {i===8 && setI(9)}
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400">Work Experience</h2>
              <p className='font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add atleast 2 work Experiences from previous companies. as internship or full time job</p>
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
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <div className="peer">
                        <Suggestions
                          label="Company Name"
                          placeholder='Onlei Teach'
                          value={exp.companyName}
                          onChange={(val) => handleInputChange('workExperience', 'companyName', val, index)}
                          suggestions={["OnleiTech","Rubico IT","Tata Consultancy Services","Infosys","HCL Technologies","Wipro","Tech Mahindra","Cognizant Technology Solutions","IBM India","Larsen & Toubro Infotech","Mindtree","Mphasis","Oracle Financial Services Software","Redington India","Ingram Micro India","Dell India","SAP India","Capgemini India","Accenture India","Cisco Systems India","Amazon Development Centre India","Google India","Microsoft India","Adobe Systems India","Intel Technology India","HP India","Siemens India","Samsung R&D Institute India","Infosys BPM","Wipro Technologies","HCL Infosystems","Tech Mahindra Business Services","L&T Technology Services","Persistent Systems","Hexaware Technologies","Zensar Technologies","Birlasoft","Cyient","Sonata Software","Mindtree Consulting","Mastek","Sasken Technologies","Polaris Consulting & Services","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge","eClerx Services","Firstsource Solutions","L&T Infotech","Syntel","QuEST Global","KPIT Technologies","Nucleus Software Exports","Oracle India","IBM Daksh","Dell International Services","Concentrix India","Genpact","EXL Service","WNS Global Services","Hinduja Global Solutions","Teleperformance India","Sutherland Global Services","Aegis Limited","Infosys McCamish Systems","TCS e-Serve","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Zoho Corporation","Freshworks","Paytm","Ola Cabs","Zomato","Swiggy","Byju's","Flipkart","Snapdeal","MakeMyTrip","PolicyBazaar","Delhivery","InMobi","Quikr","Hike","Naukri.com","BookMyShow","BigBasket","Lenskart","OYO Rooms","CureFit","Razorpay","PhonePe","Myntra","ShopClues","UrbanClap","Practo","1mg","CarDekho","Housing.com","Pepperfry","Nykaa","Dream11","Udaan","Meesho","ShareChat","Dunzo","BlackBuck","Rivigo","Infra.Market","Moglix","OfBusiness","UpGrad","Unacademy","Vedantu","WhiteHat Jr.","Eruditus","Simplilearn","Toppr","Lido Learning","Classplus","Testbook","Doubtnut","Embibe","Khatabook","OkCredit","BharatPe","CRED","Groww","Zerodha","Smallcase","INDmoney","CoinSwitch Kuber","WazirX","Instamojo","Mswipe","Pine Labs","Chargebee","Capillary Technologies","WebEngage","MoEngage","Netcore Solutions","BrowserStack","Postman","Wingify","FusionCharts","HackerRank","HackerEarth","InterviewBit","Scaler","Coding Ninjas","GeeksforGeeks","Tata Elxsi","Cyient","Persistent Systems","Zensar Technologies","Sonata Software","Mastek","Sasken Technologies","Mindtree","L&T Technology Services","Birlasoft","Hexaware Technologies","NIIT Technologies","Mphasis","QuEST Global","KPIT Technologies","Nucleus Software Exports","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge"]}
                          isMultiSuggestion={false}
                        />
                      </div>
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
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
                          const value=e.target.value;
                          if (!/^\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-(\d{2,4})\s*to\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-(\d{2,4})\s*$/.test(value)) {
                            toast.error("Invalid format!\n Use as Dec-2023 to Mar-2025", { duration: 3000, position: "top-right" });
                            e.target.focus();
                            setIsInvalidWDuration(true);
                          }else{
                            setIsInvalidWDuration(false);
                          }
                        }}
                      />
                      <div className={`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${isInvalidWDuration?"bg-red-500":"bg-blue-500"}`}></div>
                    </div>

                    <div className="space-y-2">
                      <Suggestions
                        label="Key Achievements"
                        placeholder="Learn to visualize patterns from data using matplotlib and Built several DL models"
                        value={exp.keyAchievements}
                        onChange={(val) => {
                          handleInputChange('workExperience', 'keyAchievements', val, index);
                          if (i === 9) {
                            setI(10);
                          } else if (i===10 && index===1){
                            setI(11);
                          }
                        }}
                        suggestions={["Education", "Learning", "Knowledge", "Skills", "Development", "Growth", "Discipline", "Creativity","Curiosity", "Critical", "Thinking", "Problem-Solving", "Innovation", "Empowerment", "Potential","Opportunities", "Success", "Wisdom", "Literacy", "Training", "Understanding", "Mindset","Character", "Focus", "Dedication", "Motivation", "Scholarship", "Study", "Research", "Exploration","Experience", "Guidance", "Curriculum", "Subjects", "Syllabus", "Mentorship", "Coaching","Academics", "Assessment", "Examination", "Evaluation", "Concepts", "Projects", "Presentation","Seminars", "Workshops", "Internship", "Collaboration", "Communication", "Teamwork", "Leadership","Career", "Responsibility", "Self-Study", "Observation", "Practical-Learning", "Theoretical-Knowledge","Hardwork", "Persistence", "Vision", "Goal-Setting", "Time-Management", "Experimentation","Exposure", "System", "Competence", "Research-Skills", "Interactive-Learning", "Future-Ready","Holistic-Education","is", "and", "or", "for", "with", "to", "in", "on", "by", "of", "at", "from", "this", "that", "these", "those", "are", "was", "were", "as", "an", "a", "be", "has", "have", "will", "can","which", "who", "whose", "where", "when", "how", "it", "its", "also", "but", "if", "so", "then"]}
                        isPara={true}
                      />
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
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
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400">Work Experience</h2>
              <p className='font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add atleast 2 work Experiences from previous companies. as internship or full time job</p>
              {ExampleJsonData.workExperience.map((exp, index) => (
                <div key={index} className="p-4 border-2 rounded space-y-4 dark:border-slate-700">
                  <h3 className="font-medium text-lg dark:text-slate-200">Experience {index + 1}</h3>
                    <div className="space-y-2">
                        <Suggestions 
                          label="Job title"
                          placeholder='Data Scientist'
                          value={exp.jobTitle}
		                      onChange={(val) => handleInputChange('workExperience', 'jobTitle', val, index)}
                          suggestions={["Python engineer","Data Scientist","Machine Learning Engineer","AI Researcher","Data Analyst","Software Engineer","Full Stack Developer","Backend Developer","Frontend Developer","DevOps Engineer","Cloud Architect","Cybersecurity Analyst","Database Administrator","Blockchain Developer","Computer Vision Engineer","NLP Engineer","Data Engineer","Big Data Engineer","Research Scientist","Product Manager","Project Manager","Scrum Master","Program Manager","Technical Program Manager","Operations Manager","IT Manager","Marketing Manager","Digital Marketing Specialist","SEO Specialist","Content Manager","Brand Manager","Sales Executive","Business Development Manager","Social Media Manager","Growth Hacker","UI/UX Designer","Graphic Designer","Product Designer","Visual Designer","Creative Director","Motion Graphics Designer","Financial Analyst","Accountant","Investment Banker","Business Analyst","Management Consultant","HR Manager","Recruiter","Legal Advisor","AI Ethics Researcher","Prompt Engineer","Data Privacy Consultant","Automation Engineer","Robotics Engineer","Sustainability Consultant","Technical Writer","Software Intern","Data Science Intern","Marketing Intern","HR Intern","Operations Intern","Sales Intern","Content Writing Intern","UI/UX Design Intern","Graphic Design Intern","Customer Support Executive","Technical Support Executive","Office Assistant","Data Entry Operator","Junior Software Developer","Trainee Engineer","Research Intern","Quality Assurance Intern","Product Intern","Junior Data Analyst","Telecaller","Field Sales Executive","Backend Support Staff","Campus Ambassador","Freelance Content Writer","Part-time Graphic Designer","Online Tutor","Lab Assistant","Clerical Staff","Receptionist","Front Desk Executive"]}
                          isMultiSuggestion={false} 
                        />
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                        <Suggestions
                          label="Company Name"
                          placeholder='Onlei Teach'
                          value={exp.companyName}
                          onChange={(val) => handleInputChange('workExperience', 'companyName', val, index)}
                          suggestions={["OnleiTech","Rubico IT","Tata Consultancy Services","Infosys","HCL Technologies","Wipro","Tech Mahindra","Cognizant Technology Solutions","IBM India","Larsen & Toubro Infotech","Mindtree","Mphasis","Oracle Financial Services Software","Redington India","Ingram Micro India","Dell India","SAP India","Capgemini India","Accenture India","Cisco Systems India","Amazon Development Centre India","Google India","Microsoft India","Adobe Systems India","Intel Technology India","HP India","Siemens India","Samsung R&D Institute India","Infosys BPM","Wipro Technologies","HCL Infosystems","Tech Mahindra Business Services","L&T Technology Services","Persistent Systems","Hexaware Technologies","Zensar Technologies","Birlasoft","Cyient","Sonata Software","Mindtree Consulting","Mastek","Sasken Technologies","Polaris Consulting & Services","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge","eClerx Services","Firstsource Solutions","L&T Infotech","Syntel","QuEST Global","KPIT Technologies","Nucleus Software Exports","Oracle India","IBM Daksh","Dell International Services","Concentrix India","Genpact","EXL Service","WNS Global Services","Hinduja Global Solutions","Teleperformance India","Sutherland Global Services","Aegis Limited","Infosys McCamish Systems","TCS e-Serve","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Zoho Corporation","Freshworks","Paytm","Ola Cabs","Zomato","Swiggy","Byju's","Flipkart","Snapdeal","MakeMyTrip","PolicyBazaar","Delhivery","InMobi","Quikr","Hike","Naukri.com","BookMyShow","BigBasket","Lenskart","OYO Rooms","CureFit","Razorpay","PhonePe","Myntra","ShopClues","UrbanClap","Practo","1mg","CarDekho","Housing.com","Pepperfry","Nykaa","Dream11","Udaan","Meesho","ShareChat","Dunzo","BlackBuck","Rivigo","Infra.Market","Moglix","OfBusiness","UpGrad","Unacademy","Vedantu","WhiteHat Jr.","Eruditus","Simplilearn","Toppr","Lido Learning","Classplus","Testbook","Doubtnut","Embibe","Khatabook","OkCredit","BharatPe","CRED","Groww","Zerodha","Smallcase","INDmoney","CoinSwitch Kuber","WazirX","Instamojo","Mswipe","Pine Labs","Chargebee","Capillary Technologies","WebEngage","MoEngage","Netcore Solutions","BrowserStack","Postman","Wingify","FusionCharts","HackerRank","HackerEarth","InterviewBit","Scaler","Coding Ninjas","GeeksforGeeks","Tata Elxsi","Cyient","Persistent Systems","Zensar Technologies","Sonata Software","Mastek","Sasken Technologies","Mindtree","L&T Technology Services","Birlasoft","Hexaware Technologies","NIIT Technologies","Mphasis","QuEST Global","KPIT Technologies","Nucleus Software Exports","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge"]}
                          isMultiSuggestion={false}
                        />
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
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
                          const value=e.target.value;
                          if (!/^\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-(\d{2,4})\s*to\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-(\d{2,4})\s*$/.test(value)) {
                            toast.error("Invalid format!\n Use as Dec-2023 to Mar-2025", { duration: 3000, position: "top-right" });
                            e.target.focus();
                            setIsInvalidWDuration(true);
                          }else{
                            setIsInvalidWDuration(false);
                          }
                        }}
                      />
                      <div className={`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]`}></div>
                    </div>

                    <div className="space-y-2">
                      <Suggestions
                        label="Key Achievements"
                        placeholder="Learn to visualize patterns from data using matplotlib and Built several DL models"
                        value={exp.keyAchievements}
                        onChange={(val) => {
                          handleInputChange('workExperience', 'keyAchievements', val, index);
                          if (i === 9) {
                            setI(10);
                          } else if (i===10 && index===1){
                            setI(11);
                          }
                        }}
                        suggestions={["Education", "Learning", "Knowledge", "Skills", "Development", "Growth", "Discipline", "Creativity","Curiosity", "Critical", "Thinking", "Problem-Solving", "Innovation", "Empowerment", "Potential","Opportunities", "Success", "Wisdom", "Literacy", "Training", "Understanding", "Mindset","Character", "Focus", "Dedication", "Motivation", "Scholarship", "Study", "Research", "Exploration","Experience", "Guidance", "Curriculum", "Subjects", "Syllabus", "Mentorship", "Coaching","Academics", "Assessment", "Examination", "Evaluation", "Concepts", "Projects", "Presentation","Seminars", "Workshops", "Internship", "Collaboration", "Communication", "Teamwork", "Leadership","Career", "Responsibility", "Self-Study", "Observation", "Practical-Learning", "Theoretical-Knowledge","Hardwork", "Persistence", "Vision", "Goal-Setting", "Time-Management", "Experimentation","Exposure", "System", "Competence", "Research-Skills", "Interactive-Learning", "Future-Ready","Holistic-Education","is", "and", "or", "for", "with", "to", "in", "on", "by", "of", "at", "from", "this", "that", "these", "those", "are", "was", "were", "as", "an", "a", "be", "has", "have", "will", "can","which", "who", "whose", "where", "when", "how", "it", "its", "also", "but", "if", "so", "then"]}
                        isPara={true}
                      />
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
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
        }

      case 4:
        if (!isExampleProcessing){
          {(i===11 || i===10) && setI(12)}
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400">Projects</h2>
              <p className='font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add atleast 3 projects which you did in your academics</p>
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
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <div className="peer">
                        <Suggestions
                          label="Tools/Tech Used"
                          placeholder='Tensorflow, NumPy, Pandas, Matplotlib, Multi30k Dataset, ModelSubclassing'
			                    value={project.toolsTechUsed}
                          onChange={(val) => {
                            handleInputChange('projects', 'toolsTechUsed', val, index)
                            if (i===12 && index===2) {
                              setI(13);
                              return; 
                            };
                          }}
                          suggestions={['.NET Core', 'A3C', "API's Integration", 'ASP.NET MVC', 'AWS', 'AWS CDK', 'AWS Lambda', 'Actix', 'Adobe XD', 'AdonisJS', 'Agile', 'Airflow', 'Alpine.js', 'Angular', 'Ansible', 'Ant Design', 'Apache', 'Apache Airflow', 'Apollo Server', 'Appgyver', 'Arduino', 'Astro', 'Aurora', 'AutoML', 'Autoencoders', 'Azure', 'BLAST', 'Babylon.js', 'Beego', 'BioPerl', 'Bioconductor', 'Biopython', 'Bitbucket', 'Blockchain', 'Bootstrap', 'Brownie', 'Bubble', 'Bulma', 'Burp Suite', 'C', 'C++', "CNN's", 'CSS', 'Capsule Networks', 'Cassandra', 'CatBoost', 'CentOS', 'Chakra UI', 'ChromaDB', 'CircleCI', 'Cirq', 'Cocos2d', 'CodeIgniter', 'Computer Vision', 'Contentful', 'Cosmos DB', 'Cybersecurity', 'Cypress', 'DDPG', 'DQN', 'Dagster', 'Dask', 'Data Engineering', 'Design Patterns', 'DevSecOps', 'Django', 'Docker', 'Docker Compose', 'Dropwizard', 'ELK Stack', 'ETL Pipelines', 'Echo', 'Edge Computing', 'EfficientNet', 'Electron.js', 'Embedded Systems', 'Ethers.js', 'Express', 'Express.js', 'FAISS', 'FastAPI', 'Faster R-CNN', 'Fedora', 'Fiber', 'Figma', 'Firebase', 'Firebase Functions', 'Flask', 'Flutter', 'Flutter (Web)', 'Foundation', 'Foundry', 'Framer Motion', 'GANs', 'GCP', 'GNNs', 'GRUs', 'GSAP', 'Galaxy', 'Gatsby', 'Gin', 'Git', 'GitHub', 'GitHub Actions', 'GitLab', 'Go', 'Godot', 'Grafana', 'GraphQL', 'HTML', 'Hadoop', 'Hapi', 'Hardhat', 'Helm', 'Hive', 'HubSpot', 'Hugging Face', 'IAM', 'IPFS', 'IoT Systems', 'Ionic', 'JAX', 'JUnit', 'JWT', 'Java', 'JavaScript', 'Jenkins', 'Jest', 'Jetpack Compose', 'Kafka', 'Kanban', 'Kedro', 'Keras', 'Kivy', 'Koa', 'Kotlin', 'Kotlin (Android)', 'Kubernetes', "LLM's", 'LSTMs', 'LangChain', 'LangSmith', 'Laravel', 'LightGBM', 'Linux', 'LoopBack', 'LottieFiles', 'Luigi', 'MATLAB', 'MLPs', 'MQTT', 'Mailchimp', 'Mantine', 'Mask R-CNN', 'Material UI', 'Matplotlib', 'Mbed OS', 'Metasploit', 'Micronaut', 'Microservices', 'Mocha', 'Modin', 'MongoDB', 'MySQL', 'NLP', 'NativeScript', 'NestJS', 'New Relic', 'Next.js', 'Nginx', 'Nmap', 'NoSQL', 'Node.js', 'NumPy', 'Nuxt', 'Nuxt.js', 'OAuth 2.0', 'OCR', 'OOP', 'OWASP', 'OpenCV', 'OpenVAS', 'OutSystems', 'PHP', 'PPO', 'Pandas', 'PayPal APIs', 'Penetration Testing', 'Phoenix (Elixir)', 'Pinecone', 'PixiJS', 'PlatformIO', 'Playwright', 'Plotly', 'Polars', 'PostgreSQL', 'Postman', 'Power BI', 'Preact', 'Prefect', 'PrimeReact', 'Prometheus', 'Prompt Engineering', 'Pulumi', 'PyQt', 'PyTest', 'PyTorch', 'Pygame', 'Pyramid', 'Pytest', 'Python', 'Qiskit', 'Qt', 'Quarkus', 'Qwik', 'RAG', 'REST API', 'RLlib', "RNN's", 'ROS (Robot Operating System)', 'Radix UI', 'React', 'React Native', 'React.js', 'Redis', 'Remix', 'ResNet', 'Retool', 'Rocket', 'Ruby', 'Ruby on Rails', 'Rust', 'SAC', 'SOLID Principles', 'SQL', 'SQLite', 'SageMaker', 'Sails.js', 'Scikit-learn', 'Scrum', 'Seaborn', 'Selenium', 'Semantic Search', 'Seqtk', 'Serverless', 'Serverless Framework', 'ShadCN/UI', 'Shell Scripting', 'Shopify APIs', 'Sinatra', 'Smart Contracts', 'Snort', 'Socket.IO', 'SolidJS', 'Solidity', 'Spark', 'Speech Recognition', 'Spring Boot', 'Stable Diffusion', 'Stripe APIs', 'Supabase', 'Svelte', 'SvelteKit', 'Swagger', 'Swift', 'Swift (iOS)', 'SwiftUI', 'Swin Transformer', 'Symfony', 'System Design', 'Tableau', 'Tailwind CSS', 'TailwindCSS', 'Tauri', 'TensorFlow', 'Terraform', 'Three.js', 'Tkinter', 'Tornado', 'Truffle', 'TypeScript', 'UNet', 'Ubuntu', 'Unity', 'Unity 3D', 'Unreal 5', 'Unreal Engine', 'VAEs', 'Vaex', 'Vector Databases', 'Vertex AI', 'Vision Transformer (ViT)', 'Vue', 'Vue.js', 'WPF', 'Warp', 'Web3.js', 'WebGL', 'WebSocket', 'WebXR', 'Webflow', 'Wireshark', 'WooCommerce APIs', 'WordPress', 'XGBoost', 'Xamarin', 'YOLO', 'Zapier', 'Zend Framework', 'dbt', 'gRPC', 'i18n']}
                        />
                      </div>
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
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
              <h2 className="text-xl sm:text-2xl font-bold border-b-4  pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400">Projects</h2>
              <p className='font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add atleast 3 projects which you did in your academics</p>
              {ExampleJsonData.projects.map((project, index) => (
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
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <Suggestions
                        label="Tools/Tech Used"
                        placeholder='Tensorflow, NumPy, Pandas, Matplotlib, Multi30k Dataset, ModelSubclassing'
			                  value={project.toolsTechUsed}
                        onChange={(val) => {
                          handleInputChange('projects', 'toolsTechUsed', val, index)
                          if (i===12 && index===2) {
                            setI(13);
                            return; 
                          };
                        }}
                        suggestions={["TensorFlow","WeasyPrint" ,"WebSocket (Live Rendering Protocol)", "LLM's","HTML/CSS", "Keras", "PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "FastAI","NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Altair", "Statsmodels", "SciPy","NLTK", "SpaCy", "Transformers", "Gensim", "BERT", "GPT", "Word2Vec", "TF-IDF", "Llama","OpenCV", "Pillow", "Albumentations", "MMDetection", "Detectron2", "YOLO", "MediaPipe","MNIST Dataset", "CIFAR-10", "CIFAR-100", "ImageNet", "COCO Dataset", "Multi30k Dataset","Human Parsing Dataset", "HuggingFace Datasets", "UCI Repository","Transfer Learning", "Model Subclassing", "Data Augmentation", "Feature Engineering", "Ensemble Learning", "Hyperparameter Tuning", "Cross Validation", "Grid Search", "Early Stopping","Apache Spark", "Hadoop", "Airflow", "Kafka", "Snowflake", "BigQuery", "ETL Pipelines","AWS", "Azure", "Google Cloud Platform", "IBM Cloud", "Oracle Cloud", "Firebase","Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Prometheus", "Grafana","MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "Elasticsearch", "Cassandra","Django", "Flask", "FastAPI", "Express.js", "Spring Boot", "Node.js","React", "Vue.js", "Angular", "Next.js", "Tailwind CSS", "Bootstrap", "SASS", "Material UI","Python", "Java", "Advanced C++","C++","C", "JavaScript", "TypeScript", "Go", "Rust", "R", "Julia", "SQL","Git", "GitHub", "GitLab", "Bitbucket","Tableau", "Power BI", "Looker", "Google Data Studio","Jupyter Notebook", "Google Colab", "VS Code", "Anaconda", "PyCharm", "Postman","REST API", "GraphQL", "gRPC", "NGINX", "Apache","PyTest", "Selenium", "Cypress", "JUnit", "Postman","BeautifulSoup", "Scrapy", "LangChain", "Streamlit", "Gradio", "Dash", "MLflow","Weights & Biases", "HuggingFace Hub", "OpenAI API", "Google API", "Cloud Functions"]}
                      />
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
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
        }

        case 5:
          if (!isExampleProcessing){
            {(i === 12 || i === 13) && setI(14)}
            return (
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">Education</h2>
                <p className='font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add your pre/post graduations on different sections (Consider listing your most recent Qualifications first)</p>
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
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
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
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>
                
                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Graduation duration</label>
                      <input
                        type="text"
                        placeholder="2023 - 2026"
                        className={`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${isInvalidGDuration?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`}
                        value={edu.graduationYear}
                        onChange={(e) => {
                          handleInputChange("education", "graduationYear", e.target.value, index);
                          if (i === 14 && index===0) setI(15);
                        }}                        
                        onBlur={(e) => {
                          const value=e.target.value;
                          if (!/^\s*(\d{4})\s*-\s*(\d{4})\s*$/.test(value)) {
                            toast.error("Invalid format! \nUse as 2023-2026", { duration: 3000, position: "top-right" });
                            e.target.focus(); 
                            setIsInvalidGDuration(true);
                          }else{
                            setIsInvalidGDuration(false)
                          }
                        }}
                      />
                      <div className={`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${isInvalidGDuration?"bg-red-500":"bg-blue-500"}`}></div>
                    </div>
                      
                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Current SGPA</label>
                      <input
                        type="text"
                        placeholder='?? / 10'
                        className={`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${isInvalidSGPA?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`}
                        value={edu.currentSGPA}
                        onChange={(e) => {
                          handleInputChange('education', 'currentSGPA', e.target.value, index)
                          if(i===15 && index===1) setI(16)
                        }}
                        onBlur={(e) => {
                          const value=e.target.value;
                          if (!/^\s*([0-9](\.\d{1})?|10(\.0)?)\s*$/.test(value)) {
                            toast.error("Invalid format! \nUse as 7 or 8.3 and less then 10", { duration: 3000, position: "top-right" });
                            e.target.focus(); 
                            setIsInvalidSGPA(true);
                          }else{
                            setIsInvalidSGPA(false);
                          }
                        }}
                      />
                      <div className={`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${isInvalidSGPA?"bg-red-500":"bg-blue-500"}`}></div>
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
                <h2 className="text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">Education</h2>
                <p className='font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add your pre/post graduations on different sections (Consider listing your most recent Qualifications first)</p>
                {ExampleJsonData.education.map((edu, index) => (
                  <div key={index} className="p-4 border-2 rounded space-y-4 dark:border-slate-700">
                    <h3 className="font-medium text-lg dark:text-slate-200">Education {index + 1}</h3>

                    <div className="space-y-2">
                      <Suggestions
                        label="Institution Name"
                        placeholder="Haridwar University"
                        value={edu.institutionName}
		                    onChange={(val) => handleInputChange('education', 'institutionName', val, index)}
                        suggestions={["Haridwar University (HU)","Vidya Mandir Sector-5 BHEL (Haridwar)","Collage of Engineering roorkee (COER)","Roorkee institute of technology (RIT)","Phonix (Roorkee)","","IIT Gandhinagar","IIT Patna","IIT Bhubaneswar","IIT Mandi","IIT Jodhpur","IIT Ropar","IIT Palakkad","IIT Tirupati","IIT Dhanbad (ISM)","NIT Calicut","NIT Kurukshetra","NIT Silchar","NIT Hamirpur","NIT Jalandhar","NIT Durgapur","NIT Jaipur (MNIT)","NIT Nagpur (VNIT)","NIT Surat (SVNIT)","NIT Meghalaya","IIIT Allahabad","IIIT Pune","IIIT Lucknow","IIIT Bhubaneswar","IIIT Kancheepuram","IIIT Gwalior","IIITDM Jabalpur","IIIT Vadodara","Indian Statistical Institute (ISI)","Indian Institute of Information Technology Design & Manufacturing (IIITDM Kancheepuram)","Homi Bhabha National Institute","Indian Institute of Science Education and Research (IISER Pune)","IISER Mohali","IISER Kolkata","IISER Bhopal","IISER Thiruvananthapuram","IISER Tirupati","IISER Berhampur","Delhi University (DU)","Banaras Hindu University (BHU)","Jawaharlal Nehru University (JNU)","Jamia Millia Islamia","Aligarh Muslim University (AMU)","University of Calcutta","University of Mumbai","University of Hyderabad","Osmania University","Anna University","Visvesvaraya Technological University (VTU)","Panjab University","Kurukshetra University","Gujarat Technological University","Guru Nanak Dev University","Pondicherry University","Bharathiar University","Savitribai Phule Pune University (SPPU)","Rajiv Gandhi University of Health Sciences","Mangalore University","Symbiosis International University","Shiv Nadar University","Ashoka University","OP Jindal Global University","Amity University","Lovely Professional University (LPU)","Chandigarh University","MIT World Peace University","SRM Institute of Science and Technology","VIT Vellore","VIT Chennai","Kalinga Institute of Industrial Technology (KIIT)","Birla Institute of Technology Mesra (BIT Mesra)","Indian Institute of Foreign Trade (IIFT)","Narsee Monjee Institute of Management Studies (NMIMS)","Indian School of Business (ISB)","XLRI Jamshedpur","SP Jain Institute of Management and Research","IIM Ahmedabad","IIM Bangalore","IIM Calcutta","IIM Lucknow"]}
                        isMultiSuggestion={false}
                      />
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>
                
                    <div className="space-y-2">
                      <Suggestions
                        label="Degree Name"
                        placeholder="Batchelor in computer application (BCA)"
                        value={edu.degreeName}
                        onChange={(val) => handleInputChange('education', 'degreeName', val, index)}
                        suggestions={["Bachelor of Science (B.Sc)","Primary/Secondary","Bachelor of Technology (B.Tech)","Bachelor of Engineering (B.E)","Bachelor of Arts (B.A)","Bachelor of Commerce (B.Com)","Bachelor of Computer Applications (BCA)","Bachelor of Business Administration (BBA)","Bachelor of Fine Arts (BFA)","Bachelor of Design (B.Des)","Bachelor of Architecture (B.Arch)","Bachelor of Pharmacy (B.Pharm)","Bachelor of Laws (LLB)","Bachelor of Hotel Management (BHM)","Bachelor of Social Work (BSW)","Bachelor of Education (B.Ed)","Bachelor of Physical Education (B.P.Ed)","Bachelor of Science in Nursing (B.Sc Nursing)","Master of Science (M.Sc)","Master of Technology (M.Tech)","Master of Engineering (M.E)","Master of Computer Applications (MCA)","Master of Arts (M.A)","Master of Commerce (M.Com)","Master of Business Administration (MBA)","Master of Fine Arts (MFA)","Master of Design (M.Des)","Master of Architecture (M.Arch)","Master of Pharmacy (M.Pharm)","Master of Laws (LLM)","Master of Social Work (MSW)","Master of Education (M.Ed)","Master of Physical Education (M.P.Ed)","Master of Science in Nursing (M.Sc Nursing)","Master of Public Health (MPH)","Master of Data Science (MDS)","Master of Finance (MFin)","Master of Management Studies (MMS)","Master of Computer Science (MCS)"]}
                        isMultiSuggestion={false}
                      />
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>
                
                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Graduation duration</label>
                      <input
                        type="text"
                        placeholder="2023 - 2026"
                        className={`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${isInvalidGDuration?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`}
                        value={edu.graduationYear}
                        onChange={(e) => {
                          handleInputChange("education", "graduationYear", e.target.value, index);
                          if (i === 14 && index===0) setI(15);
                        }}                        
                        onBlur={(e) => {
                          const value=e.target.value;
                          if (!/^\s*(\d{4})\s*-\s*(\d{4})\s*$/.test(value)) {
                            toast.error("Invalid format! \nUse as 2023-2026", { duration: 3000, position: "top-right" });
                            e.target.focus(); 
                            setIsInvalidGDuration(true);
                          }else{
                            setIsInvalidGDuration(false)
                          }
                        }}
                      />
                      <div className={`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${isInvalidGDuration?"bg-red-500":"bg-blue-500"}`}></div>
                    </div>
                      
                    <div className="space-y-2">
                      <label className="block text-sm font-medium dark:text-slate-300">Current SGPA</label>
                      <input
                        type="text"
                        placeholder='?? / 10'
                        className={`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${isInvalidSGPA?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`}
                        value={edu.currentSGPA}
                        onChange={(e) => {
                          handleInputChange('education', 'currentSGPA', e.target.value, index)
                          if(i===15 && index===1) setI(16)
                        }}
                        onBlur={(e) => {
                          const value=e.target.value;
                          if (!/^\s*([0-9](\.\d{1})?|10(\.0)?)\s*$/.test(value)) {
                            toast.error("Invalid format! \nUse as 7 or 8.3 and less then 10", { duration: 3000, position: "top-right" });
                            e.target.focus(); 
                            setIsInvalidSGPA(true);
                          }else{
                            setIsInvalidSGPA(false);
                          }
                        }}
                      />
                      <div className={`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${isInvalidSGPA?"bg-red-500":"bg-blue-500"}`}></div>
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
          }

      case 6:
        if (!isExampleProcessing){
          {(i===16 || i===15) && setI(17)}
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">Certificates</h2>
              <p className='font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add atleast 5 high rated certificates</p>
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
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                        <Suggestions
                          label="Course Duration"
                          placeholder="2 Month"
                          value={cert.courseDuration}
                          onChange={(val) => handleInputChange('certificates', 'courseDuration', val, index)}
                          suggestions={['1 Month', '2 Month', '3 Month', '4 Month', '5 Month', '6 Month', '7 Month', '8 Month', '9 Month', '10 Month', '11 Month', '12 Month', '1 Year', '2 Year', '3 Year', '4 Year', '5 Year']}
                          isMultiSuggestion={false}
                        />
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <div className="peer">
                        <Suggestions
                          label="Provider Name"
                          placeholder='Microsoft'
                          value={cert.providerName}
                          onChange={(val) => {
                            handleInputChange('certificates', 'providerName', val, index)
                            if(i===17 && index===0) setI(18);
                            else if(i===18 && index===4) setI(19)
                          }}
                          suggestions={["OnleiTech","Coursera","AppWars","CadPlanet","Rubico IT","Tata Consultancy Services","Infosys","NIIT Technologies","IIT Bombay","IIT Madras", "IIT Kharagpur","IIT Bombay","IIT Madras","IIT Kanpur","IIT Delhi","IIT Guwahati","IIT Roorkee","IIT Ropar","IIT Bhubaneswar","IIT Gandhinagar","IIT Hyderabad","IIT Jodhpur","IIT Patna","IIT Indore","IIT Mandi","IIT (BHU) Varanasi","IIT Palakkad","IIT Tirupati","IIT Dhanbad","IIT Bhilai","IIT Goa","IIT Jammu","IIT Dharwad","NIT Warangal","NIT Tiruchirappalli","NIT Surathkal","NIT Calicut","NIT Rourkela","NIT Kurukshetra","NIT Durgapur","NIT Silchar","NIT Jaipur","NIT Allahabad","NIT Jalandhar","NIT Bhopal","NIT Nagpur","NIT Patna","NIT Raipur","NIT Agartala","NIT Srinagar","NIT Meghalaya","NIT Goa","NIT Delhi","NIT Puducherry","NIT Manipur","NIT Mizoram","NIT Nagaland","NIT Arunachal Pradesh","NIT Sikkim","NIT Uttarakhand","NIT Hamirpur","NIT Jamshedpur","NIT Andhra Pradesh","HCL Technologies","Wipro","Tech Mahindra","Cognizant Technology Solutions","IBM India","Larsen & Toubro Infotech","Mindtree","Mphasis","Oracle Financial Services Software","Redington India","Ingram Micro India","Dell India","SAP India","Capgemini India","Accenture India","Cisco Systems India","Amazon Development Centre India","Google India","Microsoft India","Adobe Systems India","Intel Technology India","HP India","Siemens India","Samsung R&D Institute India","Infosys BPM","Wipro Technologies","HCL Infosystems","Tech Mahindra Business Services","L&T Technology Services","Persistent Systems","Hexaware Technologies","Zensar Technologies","Birlasoft","NIIT Technologies","Cyient","Sonata Software","Mindtree Consulting","Mastek","Sasken Technologies","Polaris Consulting & Services","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge","eClerx Services","Firstsource Solutions","L&T Infotech","Syntel","QuEST Global","KPIT Technologies","Nucleus Software Exports","Oracle India","IBM Daksh","Dell International Services","Concentrix India","Genpact","EXL Service","WNS Global Services","Hinduja Global Solutions","Teleperformance India","Sutherland Global Services","Aegis Limited","Infosys McCamish Systems","TCS e-Serve","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Zoho Corporation","Freshworks","Paytm","Ola Cabs","Zomato","Swiggy","Byju's","Flipkart","Snapdeal","MakeMyTrip","PolicyBazaar","Delhivery","InMobi","Quikr","Hike","Naukri.com","BookMyShow","BigBasket","Lenskart","OYO Rooms","CureFit","Razorpay","PhonePe","Myntra","ShopClues","UrbanClap","Practo","1mg","CarDekho","Housing.com","Pepperfry","Nykaa","Dream11","Udaan","Meesho","ShareChat","Dunzo","BlackBuck","Rivigo","Infra.Market","Moglix","OfBusiness","UpGrad","Unacademy","Vedantu","WhiteHat Jr.","Eruditus","SimpliLearn","Toppr","Lido Learning","Classplus","Testbook","Doubtnut","Embibe","Khatabook","OkCredit","BharatPe","CRED","Groww","Zerodha","Smallcase","INDmoney","CoinSwitch Kuber","WazirX","Instamojo","Mswipe","Pine Labs","Chargebee","Capillary Technologies","WebEngage","MoEngage","Netcore Solutions","BrowserStack","Postman","Wingify","FusionCharts","HackerRank","HackerEarth","InterviewBit","Scaler","Coding Ninjas","GeeksforGeeks","Tata Elxsi","Cyient","Persistent Systems","Zensar Technologies","Sonata Software","Mastek","Sasken Technologies","Mindtree","L&T Technology Services","Birlasoft","Hexaware Technologies","NIIT Technologies","Mphasis","QuEST Global","KPIT Technologies","Nucleus Software Exports","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge"]}
                          isMultiSuggestion={false}
                        />
                      </div>
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
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
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">Certificates</h2>
              <p className='font-semibold mb-6 text-gray-600 dark:text-gray-200'>Hint: Add atleast 5 high rated certificates</p>
              {ExampleJsonData.certificates.map((cert, index) => (
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
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <Suggestions
                        label="Course Duration"
                        placeholder="2 Month"
                        value={cert.courseDuration}
                        onChange={(val) => handleInputChange('certificates', 'courseDuration', val, index)}
                        suggestions={['1 Month', '2 Month', '3 Month', '4 Month', '5 Month', '6 Month', '7 Month', '8 Month', '9 Month', '10 Month', '11 Month', '12 Month', '1 Year', '2 Year', '3 Year', '4 Year', '5 Year']}
                        isMultiSuggestion={false}
                      />
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>

                    <div className="space-y-2">
                      <Suggestions
                        label="Provider Name"
                        placeholder='Microsoft'
                        value={cert.providerName}
                        onChange={(val) => {
                          handleInputChange('certificates', 'providerName', val, index)
                          if(i===17 && index===0) setI(18);
                          else if(i===18 && index===4) setI(19)
                        }}
                        suggestions={["OnleiTech","Coursera","AppWars","CadPlanet","Rubico IT","Tata Consultancy Services","Infosys","NIIT Technologies","IIT Bombay","IIT Madras", "IIT Kharagpur","IIT Bombay","IIT Madras","IIT Kanpur","IIT Delhi","IIT Guwahati","IIT Roorkee","IIT Ropar","IIT Bhubaneswar","IIT Gandhinagar","IIT Hyderabad","IIT Jodhpur","IIT Patna","IIT Indore","IIT Mandi","IIT (BHU) Varanasi","IIT Palakkad","IIT Tirupati","IIT Dhanbad","IIT Bhilai","IIT Goa","IIT Jammu","IIT Dharwad","NIT Warangal","NIT Tiruchirappalli","NIT Surathkal","NIT Calicut","NIT Rourkela","NIT Kurukshetra","NIT Durgapur","NIT Silchar","NIT Jaipur","NIT Allahabad","NIT Jalandhar","NIT Bhopal","NIT Nagpur","NIT Patna","NIT Raipur","NIT Agartala","NIT Srinagar","NIT Meghalaya","NIT Goa","NIT Delhi","NIT Puducherry","NIT Manipur","NIT Mizoram","NIT Nagaland","NIT Arunachal Pradesh","NIT Sikkim","NIT Uttarakhand","NIT Hamirpur","NIT Jamshedpur","NIT Andhra Pradesh","HCL Technologies","Wipro","Tech Mahindra","Cognizant Technology Solutions","IBM India","Larsen & Toubro Infotech","Mindtree","Mphasis","Oracle Financial Services Software","Redington India","Ingram Micro India","Dell India","SAP India","Capgemini India","Accenture India","Cisco Systems India","Amazon Development Centre India","Google India","Microsoft India","Adobe Systems India","Intel Technology India","HP India","Siemens India","Samsung R&D Institute India","Infosys BPM","Wipro Technologies","HCL Infosystems","Tech Mahindra Business Services","L&T Technology Services","Persistent Systems","Hexaware Technologies","Zensar Technologies","Birlasoft","NIIT Technologies","Cyient","Sonata Software","Mindtree Consulting","Mastek","Sasken Technologies","Polaris Consulting & Services","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge","eClerx Services","Firstsource Solutions","L&T Infotech","Syntel","QuEST Global","KPIT Technologies","Nucleus Software Exports","Oracle India","IBM Daksh","Dell International Services","Concentrix India","Genpact","EXL Service","WNS Global Services","Hinduja Global Solutions","Teleperformance India","Sutherland Global Services","Aegis Limited","Infosys McCamish Systems","TCS e-Serve","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Zoho Corporation","Freshworks","Paytm","Ola Cabs","Zomato","Swiggy","Byju's","Flipkart","Snapdeal","MakeMyTrip","PolicyBazaar","Delhivery","InMobi","Quikr","Hike","Naukri.com","BookMyShow","BigBasket","Lenskart","OYO Rooms","CureFit","Razorpay","PhonePe","Myntra","ShopClues","UrbanClap","Practo","1mg","CarDekho","Housing.com","Pepperfry","Nykaa","Dream11","Udaan","Meesho","ShareChat","Dunzo","BlackBuck","Rivigo","Infra.Market","Moglix","OfBusiness","UpGrad","Unacademy","Vedantu","WhiteHat Jr.","Eruditus","SimpliLearn","Toppr","Lido Learning","Classplus","Testbook","Doubtnut","Embibe","Khatabook","OkCredit","BharatPe","CRED","Groww","Zerodha","Smallcase","INDmoney","CoinSwitch Kuber","WazirX","Instamojo","Mswipe","Pine Labs","Chargebee","Capillary Technologies","WebEngage","MoEngage","Netcore Solutions","BrowserStack","Postman","Wingify","FusionCharts","HackerRank","HackerEarth","InterviewBit","Scaler","Coding Ninjas","GeeksforGeeks","Tata Elxsi","Cyient","Persistent Systems","Zensar Technologies","Sonata Software","Mastek","Sasken Technologies","Mindtree","L&T Technology Services","Birlasoft","Hexaware Technologies","NIIT Technologies","Mphasis","QuEST Global","KPIT Technologies","Nucleus Software Exports","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge"]}
                        isMultiSuggestion={false}
                      />
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
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
        }
        case 7:
          if (!isExampleProcessing) {
            if (i === 18 || i===19) {
              setI(20);
              
              const timer3 = setTimeout(() => {
                setI(21);
              }, 20000);
            
              const timer4 = setTimeout(() => {
                setI(22);
              }, 40000);
            
              return () => {
                clearTimeout(timer3);
                clearTimeout(timer4);
              }
            }           
            return (
                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">
                      Description
                    </h2>
                    <p className="font-semibold mb-6 text-gray-600 dark:text-gray-200">
                      Hint: Consider to edit them more and make professional
                    </p>
        
                    <div className="space-y-2 pt-8 pb-16">
                      <div className="peer">
                        <Suggestions
                          label="Resume Description"
                          placeholder="Passionate AI Developer & Backend Specialist with expertise in Deep Learning, Computer Vision, NLP, and Transformers. Skilled at building models from scratch and integrating them into real-world applications using React, Flask, and Django. Developed and deployed 22+ projects available on GitHub & Kaggle."
                          value={formData.Description.UserDescription}
                          onChange={(val) => handleInputChange('Description', 'UserDescription', val)}
                          suggestions={ResumeDescriptions}
                          isTextArea={true}
                          isMultiSuggestion={false}
                        />
                      </div>
                      <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                    </div>
                  </div>
                )
          } else {
            return (
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">
                  Description
                </h2>
                <p className="text-xl font-semibold mb-6 text-gray-600 dark:text-gray-200">
                  Hint: Consider to edit them more and make professional
                </p>
                <div className="space-y-2 pt-8 pb-16">
                  <div className="peer">
                    <Suggestions
                      label="Resume Description"
                      placeholder="Passionate AI Developer & Backend Specialist with expertise in Deep Learning, Computer Vision, NLP, and Transformers. Skilled at building models from scratch and integrating them into real-world applications using React, Flask, and Django. Developed and deployed 22+ projects available on GitHub & Kaggle."
                      value={ExampleJsonData.Description.UserDescription}
                      onChange={(val) => handleInputChange('Description', 'UserDescription', val)}
                      suggestions={ResumeDescriptions}
                      isTextArea={true}
                      isMultiSuggestion={false}
                    />
                  </div>
                  <div className="ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"></div>
                </div>
              </div>
            );
          }


      case 0:
        if(!isExampleProcessing){
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">Choose Template</h2>
              <p className='font-semibold mb-6 text-gray-600 dark:text-gray-200'>We will frequently add more template designs to provide more robust options.</p>
              <div className="grid grid-cols-2 gap-5">
                  {[1,2,3,4,5,6].map((template) => (
                    <div
                      key={template}
                      onClick={() => {
                        if (selectTemp) {
                          setFormData((prev) => ({ ...prev, selectedTemplate: String(template) }));
                          {i===2 && setI(1)}
                          const timer2 = setTimeout(() => {
                            {(i===1 || i===2) && setI(2)};
                          }, 50);
                          return () => clearTimeout(timer2);
                        }
                      }}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-transform duration-150 shadow-md hover:scale-95 dark:shadow-gray-600  ${
                        formData.selectedTemplate === String(template) ? 'border-blue-600 bg-blue-50 dark:bg-slate-800' : 'dark:border-gray-700'
                      }`}
                    >
                      <img
                        src={`/Resume-Builder/Temp/temp${template}.png`}
                        alt={`Template ${template}`}
                        className="w-full h-auto rounded-lg dark:filter dark:brightness-90"
                      />
                      <p className="text-center mt-2 dark:text-gray-200">{AboutTemps[template-1]}</p>
                    </div>
                  ))}
              </div>
            </div>
          );
        }else{
          return (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400">Choose Template</h2>
              <p className='font-semibold mb-6 text-gray-600 dark:text-gray-200'>We will frequently add more template designs to provide more resume options.</p>
              <div className="grid grid-cols-2 gap-5">
                  {[1,2,3,4,5,6].map((template) => (
                    <div
                      key={template}
                      onClick={() => setExampleJsonData((prev) => ({ ...prev, selectedTemplate: String(template) }))}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-transform duration-150 shadow-md hover:scale-95 dark:shadow-gray-600  ${
                        ExampleJsonData.selectedTemplate === String(template) ? 'border-blue-600 bg-blue-50 dark:bg-slate-800' : 'dark:border-gray-700'
                      }`}
                    >
                      <img
                        src={`/Resume-Builder/Temp/temp${template}.png`}
                        alt={`Template ${template}`}
                        className="w-full h-auto rounded-lg dark:filter dark:brightness-90"
                      />
                      <p className="text-center mt-2 dark:text-gray-200">{AboutTemps[template-1]}</p>
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
      {/* Left Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white border-r shadow-md hover:shadow-xl p-0 lg:p-4 transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-0"} lg:w-64 dark:border-r-slate-800 dark:bg-slate-800 z-50`}
      >
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            if (isPreviewOpen) {
              setIsPreviewOpen(!isPreviewOpen);
            }
          }}
          className="absolute top-6 pl-7 lg:hidden p-3 rounded-r-full bg-gray-200 dark:bg-gray-600 dark:text-cyan-300"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
  
        <div className={`${isOpen || "hidden lg:block"}`}>
          <h1 className="text-2xl font-bold pt-20 lg:pt-4 text-center text-blue-800 dark:text-amber-300 cursor-pointer" title="Details user have to fill">Sections</h1>
          <div className="w-[30%] h-1 bg-blue-900 mb-6 mx-auto mt-1 rounded dark:bg-amber-400"></div>
          <div className="space-y-4 px-2">
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
                  className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ease-in-out
                    ${completedSteps.has(index) 
                      ? "bg-white border-green-600 dark:border-amber-300 dark:bg-gray-800" 
                      : "border-gray-400 dark:border-gray-400"
                    }
                  `}
                >
                  {completedSteps.has(index) ? (
                    <Check size={14} className="transition-all duration-300 scale-110 opacity-100" />
                  ) : (
                    <span className="text-sm transition-all duration-300 opacity-80">{index + 1}</span>
                  )}
                </div>
                <span className="text-sm font-medium">{step.key}</span>
              </div>
            ))}
          </div>
          <div>
            <h2
              className="space-y-3 mx-4 md:mx-0 mt-4 p-2 flex items-center justify-center gap-3 rounded-lg cursor-pointer transition-transform duration-400 bg-blue-50 hover:bg-blue-100 text-blue-600 dark:text-zinc-300 dark:bg-slate-700/50 dark:hover:bg-slate-700/95"
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
            <div className="flex items-center mt-4 justify-center gap-2 mr-2 dark:text-slate-300" title='Total number of Resumes built by this application'>
              <p>Over</p>
              <b>{ResumesBuilt === 0 ? "loading..." : ResumesBuilt}</b>
              <FileText />
              <p>Built</p>
            </div>
          </div>            
        </div>
      </div>
  
      {/* Main Content */}
      <div className={`flex-1 pt-20 pr-3 px-4 lg:py-8 transition-all duration-300 lg:ml-0`}>
        <div className="md:max-w-[720px] md:mr-72 lg:ml-64 lg:max-w-[700px] xl:max-w-full xl:px-24 2xl:max-w-3xl mx-auto">
          {renderFormSection()}

          <div className="mt-8 flex justify-end">
            <button
              title={NextError 
                ? "Don't cheat! Fill all details for a good resume" 
                : "Fill all details and continue to next page"
              }
              onClick={handleNext}
              className={`flex items-center gap-2 px-6 py-2 mt-5 text-white rounded-full transition-all duration-300 ${
                NextError 
                  ? "bg-red-500 hover:bg-red-600 scale-105 cursor-not-allowed" 
                  : "bg-blue-600 hover:bg-blue-700"
              }`}           
              > 
              {currentStep === steps.length - 1 ? "Submit" : "Next"           }
            
              <span className={`transition-all duration-300 ${NextError ? "scale-110 rotate-90" : "scale-100 rotate-0"}`}>
                {NextError 
                  ? <i className="fas fa-times-circle" /> 
                  : <ChevronRight size={16} />
                }
              </span>
            </button>
          </div>
        </div>
      </div>
  
      {/* Right Preview Templates Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white border-l shadow-md hover:shadow-xl p-0 md:p-4 transition-all duration-300 ease-in-out
        ${isPreviewOpen ? "w-64" : "w-0"} md:w-72 dark:border-l-slate-800 dark:bg-slate-800`}
      >
        <button
          onClick={() => {
            setIsPreviewOpen(!isPreviewOpen);
            if (isOpen) {
              setIsOpen(!isOpen);
            }
          }}
          className="absolute top-6 mr-0 right-0 pr-8 md:hidden p-3 rounded-l-full bg-gray-200 dark:bg-gray-600 dark:text-cyan-300"
        >
          {isPreviewOpen ? <X size={20} /> : <Eye size={20} />}
        </button>
  
        <div className={`${isPreviewOpen || "hidden md:block"}`}>
          <h1 className="text-2xl font-bold pt-20 md:pt-4 text-center text-blue-800 dark:text-amber-300 cursor-pointer" title="Live preview. how your resume looks">Preview</h1>
          <div className="w-[25%] h-1 bg-blue-900 mb-4 mx-auto mt-1 rounded dark:bg-amber-400"></div>
          <div className="px-2 w-[250px] ml-3 h-[400px] overflow-hidden bg-white dark:bg-slate-800 ">
            <div className="scale-[0.24] origin-top-left flex ">
              {(isExampleProcessing?ExampleJsonData.selectedTemplate==1:formData.selectedTemplate==1)?<T1 jsonData={isExampleProcessing ? ExampleJsonData : formData}/>:(isExampleProcessing?ExampleJsonData.selectedTemplate==2:formData.selectedTemplate==2)?<T2 jsonData={isExampleProcessing ? ExampleJsonData : formData}/>:(isExampleProcessing?ExampleJsonData.selectedTemplate==3:formData.selectedTemplate==3)?<T3 jsonData={isExampleProcessing ? ExampleJsonData : formData}/>:(isExampleProcessing?ExampleJsonData.selectedTemplate==4:formData.selectedTemplate==4)?<T4 jsonData={isExampleProcessing ? ExampleJsonData : formData}/>:(isExampleProcessing?ExampleJsonData.selectedTemplate==5:formData.selectedTemplate==5)?<T5 jsonData={isExampleProcessing ? ExampleJsonData : formData}/>:(isExampleProcessing?ExampleJsonData.selectedTemplate==6:formData.selectedTemplate==6)?<T6 jsonData={isExampleProcessing ? ExampleJsonData : formData}/>:<div></div>}
            </div>
          </div>
          <div className={`whitespace-pre-line dark:text-slate-300 p-3 md:p-1 ${isExampleProcessing?"hidden":"block"}`}>
            <div className="flex items-center mb-3">
              <img 
                src="https://github.com/NishantkSingh0/NishantkSingh0/blob/main/Images/N.png?raw=true" 
                alt="N" 
                width="40" 
                height="40" 
              />
              <div className="ml-2">
                <span className="font-semibold pb-[2px]">Assistant Bot</span>
                <div className="w-[75%] h-[3px] bg-blue-800 mx-auto mt-1 rounded dark:bg-amber-500"></div>
              </div>
            </div><span id="Suggestion-typing-text" className={` ${i===2 && Number(formData.selectedTemplate) === 4?'text-red-700 dark:text-red-400':'text-lime-700 dark:text-lime-400' }`}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GetInfo;