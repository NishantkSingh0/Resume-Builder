# Resume Builder Web Application

I’m excited to showcase our Resume Builder Application, designed to solve real-world problems and address common issues faced by users on existing resume builders.





# What Motivated us to build it:-
- **74%** of job seekers feels confused about what information to include or what to leave out. **(Zety Resume Report, 2023)**
- **68%** of peoples Don't know what recruiters care about most. **(LinkedIn Hiring Insights, 2024)**
- **76%** of resumes are eliminated by Applicant Tracking Systems (ATS) before reaching a human recruiter, often due to formatting issues or missing keywords.  **(Jobscan ATS Compatibility Report, 2024)**
- **88%** of resumes are rejected because they include a photo, which can introduce unconscious bias. **(TeamStage, 2024)**
- **63%** of recruiters prefer resumes that are customized to the specific job position. **(TeamStage, 2024)**
- **68%** of rejected resumes in the tech industry had inconsistent formatting, such as using multiple fonts or sizes. **(Better Resume, 2024)**
- Only **2–3%** of resumes result in an interview, emphasizing the need for a well-crafted and tailored resume. **(Prosperity for America, 2025)**


# Well there are existing resume builders that claim to build ATS friendly resumes but..
- **Limited Customization Options:** Most resume builders rely on rigid, LaTeX-based templates that generate static PDFs with minimal flexibility. While LaTeX ensures clean formatting, it’s notoriously difficult for over 95% of users to understand or modify. As a result, even minor edits require repurchasing or rebuilding resumes from zero. making the process unnecessarily frustrating, time-consuming, and much expensive.
- **Low quality and unprofessional template in free tier:** Most popular resume builders offer only basic, low-quality templates in their free tier. **often outdated, unprofessional, or lacking modern design elements.** Users are then prompted to pay $1–$2 per resume download, even after spending time building it.
- **Frustrating Form Flow:** Most resume builders use a rigid, step-by-step form that hides the full scope of required information. Fields appear one by one, forcing users to keep clicking “Next” without a clear overview of what they are doing. wasting time and causing confusion for those who want to prepare content in advance.
- **Laggy and complex interface:** Many resume builders are slow and laggy, with unresponsive previews. creating friction for users who just want to build or update resumes quickly
- **Data Privacy Concerns:** Most resume builders compromise user privacy by using sensitive data without consent. They often collect personal information and use it for purposes beyond just resume building, including selling it to third parties for targeted ads and other uses.
- **Login and Cookie Hassles:** Many resume builders require users to sign in and manage unwanted cookies, leading to unnecessary frustration and security concerns. This not only disrupts the user experience but also exposes personal data to potential risks.

# What we provide with this resume builder application :-
- **Multi-format Export:** Instantly download resumes in .pdf or editable (.html, .json) formats. flexible for any need.
- **Intuitive UI:** Clean and user-friendly interface with smooth navigation across all resume sections.
- **Smart Assistant Bot:** A personal assistant guides users through the form-filling process, ensuring user don't feel alone.
- **Live, Lag-Free Preview:** Instantly see changes with a real-time preview system, without any delays.
- **Premium Templates for Free:** Access high-quality, modern templates. without any charges in any feature.
- **No Login or cookies:** Build your resume without the hassle of account creation or cookies.
- **ATS-Friendly by Design:** Every template is built with at least an 85+ ATS score, increasing your chances of selection.
- **Efficient Editing:** Initial resume setup takes just 8–10 minutes. Re-edit later in seconds using your saved .json file and customize further. 
- **Live Suggestions Engine:** Smart suggestion tips and error checks reduce formatting issues and save valuable time.
- **Lightweight & Fast:** Consumes ~1.8MB of RAM and virtually no CPU, ensuring seamless performance on any device.
- **Light & Dark Mode:** Choose the theme that suits your comfort for distraction-free editing. by default it choosed randomly to explore both modes.
- **No Data Storage:** We prioritize user privacy and do not store any personal data, 'not even names'. Resume details are sensitive and can be misused by third-party apps for misleading ads or cyber fraud. Our builder ensures complete confidentiality and peace of mind.


# 🎨 User Interface Overview

## ✅ Desktop View:  

* A clean header with a Night/Day mode toggle and navigation buttons.  
* The center displays Some resume generated sliding samples.  
* At the bottom, a Type.js animation highlights the app's key features.  

## ✅ Mobile View:

* A simplified header with essential navigation options.  
* The feature showcase is placed centrally for easy readability.
* You can view Generated Temps by clicking button downside of type.js animation
* At the bottom, a **About Us** text links to the Developers introduction page.


# 🛠️ Tech Stack
## - Frontend

| Technology     | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| React.js       | JavaScript library used to create a dynamic, fast, and interactive UI       |
| Tailwind CSS   | Utility-first CSS framework for building responsive and modern UI designs   |
| JSON           | Lightweight data format used to manage and structure user resume inputs     |


## - Backend

| Technology     | Description                                                                                   |
|----------------|-----------------------------------------------------------------------------------------------|
| Flask          | Lightweight Python web framework that handles PDF generation efficiently                      |
| WeasyPrint     | Powerful tool to convert styled HTML templates into high-quality, printable PDF documents     |


## - Database

| Technology | Description                                                                                   |
|------------|-----------------------------------------------------------------------------------------------|
| Firebase   | Backend-as-a-Service platform used to track total users, monitor resume builds, and analytics |

# Application WorkFlow:

Watch demmo on <a href="https://www.linkedin.com/posts/nishantksingh1_resumebuilder-atsfriendly-careertips-activity-7320307626867585024--Ts8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXIrSMB1Q-v6W50Fho8DNLDqC0GfNeMxQQ" target="_blank">Linkedin</a>    


# 📥 Installation & Setup
We’ve made this project open-source with the hope of fostering learning, growth, and collaboration within the developer community. Our goal is to create a space where developers of all levels can explore, experiment, and improve. and we’d love for you to be a part of it. Feel free to fork, download, and use the code, knowing that this is a shared space for education and creativity. We believe in the power of open collaboration, and we hope this project helps you learn something new and encourages you to build with kindness and curiosity!

# 🔒 License Reminder
This project is licensed under the GNU General Public License v3.0.
You are free to use, modify, and distribute the code under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">terms</a> of this license. just make sure to include the original license and give proper credit. Let’s build open, and build fair. ❤️

## 1. Clone the Repository:  

```bash
git clone https://github.com/nishantksingh0/Resume-Builder.git
cd Resume-Builder
```


## 2. Install Dependencies:  
```bash
pip install -r ./Backend/requirements.txt 
npm install
```

## 3. Run Backend:

```
python ./Backend/app.py
```


## 4. Run Frontend:

```
npm start
```



The app will now be available at `http://localhost:5173/Resume-Builder` 🚀



# 💡 Lessons Learned

## This project helped us:

* Understand real-world challenges in resume building.  
* Work collaboratively as a team to develop an efficient solution.  
* Improve UI/UX design skills for better user engagement.


# 📢 Have Questions?

Feel free to ask any question about this project and suggest improvements. reach us out at:

🔹 Email: <a href="mailto:nishantsingh.talk@gmail.com" target="_blank">nishantsingh.talk@gmail.com</a> 

🔹 LinkedIn: <a href="https://www.linkedin.com/in/nishantksingh1" target="_blank">NishantkSingh1</a>    


