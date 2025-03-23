export default function ViewTemplates() {
   const items = [
     {
       img: "/resume-builder-web-application/Temp/temp1.png",
       title: "Simpler & Structured",
       codeLink: "https://github.com/NishantkSingh0/resume-builder-web-application/blob/main/Backend/GeneratedTemps/T1.html",
       templateLink: "https://NishantkSingh0.github.io/resume-builder-web-application/blob/main/Backend/GeneratedTemps/T1.html",
     },
     {
       img: "/resume-builder-web-application/Temp/temp2.png",
       title: "Linear & Classic",
       codeLink: "https://github.com/NishantkSingh0/resume-builder-web-application/blob/main/Backend/GeneratedTemps/T2.html",
       templateLink: "https://NishantkSingh0.github.io/resume-builder-web-application/blob/main/Backend/GeneratedTemps/T2.html",
     },
     {
       img: "/resume-builder-web-application/Temp/temp3.png",
       title: "Colourfull & Attractive",
       codeLink: "https://github.com/NishantkSingh0/resume-builder-web-application/blob/main/Backend/GeneratedTemps/T3.html",
       templateLink: "https://NishantkSingh0.github.io/resume-builder-web-application/blob/main/Backend/GeneratedTemps/T3.html",
     },
     {
       img: "/resume-builder-web-application/Temp/temp4.png",
       title: "Colourful & Highly Designed",
       codeLink: "https://github.com/NishantkSingh0/resume-builder-web-application/blob/main/Backend/GeneratedTemps/T4.html",
       templateLink: "https://NishantkSingh0.github.io/resume-builder-web-application/blob/main/Backend/GeneratedTemps/T4.html",
     },
     {
      img: "/resume-builder-web-application/Temp/temp5.png",
      title: "Simpler & Linear",
      codeLink: "https://github.com/NishantkSingh0/resume-builder-web-application/blob/main/Backend/GeneratedTemps/T5.html",
      templateLink: "https://NishantkSingh0.github.io/resume-builder-web-application/blob/main/Backend/GeneratedTemps/T5.html",
     },
     {
      img: "/resume-builder-web-application/Temp/temp6.png",
      title: "Designed & Attractive",
      codeLink: "https://github.com/NishantkSingh0/resume-builder-web-application/blob/main/Backend/GeneratedTemps/T6.html",
      templateLink: "https://NishantkSingh0.github.io/resume-builder-web-application/blob/main/Backend/GeneratedTemps/T6.html",
     },
     {
       img: "/resume-builder-web-application/Temp/temp7.png",
       title: "Highly Simpler & Classic",
       codeLink: "https://github.com/NishantkSingh0/resume-builder-web-application/blob/main/Backend/GeneratedTemps/T7.html",
       templateLink: "https://NishantkSingh0.github.io/resume-builder-web-application/blob/main/Backend/GeneratedTemps/T7.html",
     },
   ];
 
   return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h3 className="my-16 text-3xl">Template Designs</h3>
       <div className="flex flex-col gap-4 w-3/5">
         {items.map((item, index) => (
           <div key={index} className="flex items-center mb-6 bg-white shadow-md rounded-lg overflow-hidden h-44 w-full">
             <img src={item.img} alt={item.title} className="w-1/7 h-full object-cover" />
             <div className="flex flex-col justify-center p-2 w-4/5">
               <h3 className="text-xl font-semibold mb-20">{item.title}</h3>
               <div className="flex space-x-56 ml-8">
                 <a href={item.codeLink} className="text-blue-500 text-xs underline" target="_blank">View Code</a>
                 <a href={item.templateLink} className="text-blue-500 text-xs underline" target="_blank">View Template</a>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 }