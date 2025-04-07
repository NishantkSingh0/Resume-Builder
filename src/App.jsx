import React, { useContext,useEffect,useState }  from 'react';
import { Routes, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage.jsx';
import GetInfo from './components/GetInfo.jsx';
import Result from './components/Result.jsx';
import AboutUs from './components/AboutUs.jsx';
import { Toaster } from "react-hot-toast";
import { ThemeContext } from './components/ThemeContext.jsx';
import GoogleVarification from './components/GoogleVarification.jsx';
// import VarifyMob from './components/VarifyMob.jsx';
import ViewTemplates from './components/ViewTemplates.jsx';
// import Practice from './components/Practice.jsx'
// import T7 from './components/previewTemplates/T7.jsx';
import Loader from './components/Loader.jsx'

const App = () => {

  const jsonData={
    "contactInfo": {
      "fullName": "Nishant kumar",
      "phoneNumber": "9217290469",
      "emailAddress": "nishantsingh.talk@gmail.com",
      "linkedin": "nishantksingh1",
      "portfolio": "nishantksingh0.github.io",
      "jobTitle": "Data Scientist",
      "Languages": "English, Hindi, French",
      "Location": "Haridwar (Uttrakhand)"
    },
    "skills": {
      "hardSkills": "TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face, C/C++, Java, JavaScript, React",
      "softSkills": "TeamWork, strong Problem-Solving skill, Leadership, Critical thinking, Communication"
    },
    "workExperience": [
      {
        "jobTitle": "Data scientist",
        "companyName": "Onlei tech",
        "WorkDuration": "Dec-2024 to Mar-2025",
        "keyAchievements": "Learn to visualize patterns from data using matplotlib and Built several DL models"
      },
      {
        "jobTitle": "Python engineer",
        "companyName": "Microsoft",
        "WorkDuration": "May-2024 to Jul-2024",
        "keyAchievements": "Learn to use python in NLP tasks to take advantages of LLM"
      }
    ],
    "projects": [
      {
        "projectTitle": "Transformer based translation model",
        "toolsTechUsed": "Tensorflow, Trasformer architecture, NumPy, WMT Translation dataset"
      },
      {
        "projectTitle": "Exam Proctoring system",
        "toolsTechUsed": "React, Flask, OpenCV, NumPy, Mediapipe, Pillow, WebSocket, ThreadPool"
      },
      {
        "projectTitle": "Persion bounding box detection",
        "toolsTechUsed": "OpenCV, Json, Tensorflow, Pandas, Matplotlib, NumPy"
      }
    ],
    "education": [
      {
        "institutionName": "Haridwar University",
        "degreeName": "Batchelor in Computer application",
        "graduationYear": "2023 - 2026",
        "currentSGPA": "8"
      },
      {
        "institutionName": "Vidya Mandir Sec-5 (Haridwar)",
        "degreeName": "Primary/Secondary",
        "graduationYear": "2021 - 2023",
        "currentSGPA": "8"
      }
    ],
    "certificates": [
      {
        "certificateName": "Azure AI Engineer association",
        "courseDuration": "2 Month",
        "providerName": "Microsoft"
      },
      {
        "certificateName": "C/C++",
        "courseDuration": "2 Month",
        "providerName": "Cad Planet"
      },
      {
        "certificateName": "DataScientist Internship",
        "courseDuration": "2 Month",
        "providerName": "Onlei Tech"
      },
      {
        "certificateName": "Intro To responsive AI",
        "courseDuration": "1 Month",
        "providerName": "SimpliLearn"
      },
      {
        "certificateName": "Bits & byts of computer",
        "courseDuration": "1 Month",
        "providerName": "Coursera"
      }
    ],
    "Description": {
      "UserDescription": "An innovative Backend Developer graduated from gbnj, with proficiency in TensorFlow,  demonstrated through 13+ diverse projects. Well-versed in English, and appreciated for exceptional Teamwork, in dynamic work environments."
    },
    "selectedTemplateEx": "4" 
  }

  const {isDark} = useContext(ThemeContext)
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  
  useEffect(() => {
    // Simulate Loading Effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loader
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <Loader />;  // Show Loader while loading is true
  }

  return (
    // <>
    //   <T7 jsonData={jsonData}/>
    // </>
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/VarifyMail" element={<GoogleVarification />} />
        <Route path="/GetInfo" element={<GetInfo />} />
        <Route path="/Result" element={<Result />} /> 
        <Route path="/ViewTemplates" element={<ViewTemplates/>} /> 
      </Routes>  
    </div>
  );
}

export default App;