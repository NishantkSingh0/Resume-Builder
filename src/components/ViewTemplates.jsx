export default function ViewTemplates() {
  const items = [
    {
      img: "/resume-builder-web-application/Temp/temp1.png",
      title: "Simpler & Structured",
      codeLink: "https://github.com/NishantkSingh0/Templates/blob/main/T1.html",
      templateLink: "https://nishantksingh0.github.io/Templates/T1",
    },
    {
      img: "/resume-builder-web-application/Temp/temp2.png",
      title: "Linear & Classic",
      codeLink: "https://github.com/NishantkSingh0/Templates/blob/main/T2.html",
      templateLink: "https://NishantkSingh0.github.io/Templates/T2",
    },
    {
      img: "/resume-builder-web-application/Temp/temp3.png",
      title: "Colourful & Attractive",
      codeLink: "https://github.com/NishantkSingh0/Templates/blob/main/T3.html",
      templateLink: "https://NishantkSingh0.github.io/Templates/T3",
    },
    {
      img: "/resume-builder-web-application/Temp/temp4.png",
      title: "Colourful & Highly Designed",
      codeLink: "https://github.com/NishantkSingh0/Templates/blob/main/T4.html",
      templateLink: "https://NishantkSingh0.github.io/Templates/T4",
    },
    {
     img: "/resume-builder-web-application/Temp/temp5.png",
     title: "Simpler & Linear",
     codeLink: "https://github.com/NishantkSingh0/Templates/blob/main/T5.html",
     templateLink: "https://NishantkSingh0.github.io/Templates/T5",
    },
    // {
    //  img: "/resume-builder-web-application/Temp/temp6.png",
    //  title: "Designed & Attractive",
    //  codeLink: "#",
    //  templateLink: "#",
    // },
    {
      img: "/resume-builder-web-application/Temp/temp7.png",
      title: "Highly Simpler & Classic",
      codeLink: "https://github.com/NishantkSingh0/Templates/blob/main/T7.html",
      templateLink: "https://NishantkSingh0.github.io/Templates/T7",
    },
  ];

  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900 p-4">
  <h3 className="mt-10 mb-2 text-3xl text-gray-500 dark:text-slate-200 font-bold">Generated Templates</h3>
  <div className="w-[200px] h-1 bg-blue-700 mb-12 mx-auto mt-1 rounded dark:bg-blue-500"></div>
  
  {/* Change grid-cols-1 to grid-cols-2 for mobile */}
  <div className="grid grid-cols-2 gap-14 sm:grid-cols-2 md:grid-cols-2 max-w-5xl mx-auto place-items-center">
    {items.map((item, index) => (
      <div key={index} className="group relative mb-6 bg-white dark:bg-slate-700 hover:shadow-2xl hover:scale-105 transition-transform border-2 dark:shadow-[0_-4px_10px_rgba(0,0,0,0.1)]  border-gray-300 dark:border-gray-700 dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-lg overflow-hidden w-40 sm:w-44 md:w-48 lg:w-64 xl:w-72 flex flex-col items-center">
        {/* Adjust image size */}
        <img src={item.img} alt={item.title} className="w-full h-auto object-cover dark:opacity-80 dark:brightness-80 dark:contrast-90" />
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 dark:bg-slate-700 p-4 rounded-md opacity-0 group-hover:opacity-100 transition-transform flex flex-col items-center">
          <div className="flex space-x-4">
            <a href={item.codeLink} className="text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md" target="_blank">View Code</a>
            <a href={item.templateLink} className="text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md" target="_blank">View Template</a>
          </div>
        </div>
        <div className="font-semibold text-gray-600 dark:text-gray-200"> {item.title} </div>
      </div>
    ))}
  </div>
</div>

  );
}