<h1 align="center">
   INTERNATIONAL SCHOOL MANAGEMENT SYSTEM
</h1>

<h3 align="center">
Streamline school administration, class arrangement, student records, and teachers.<br>
Effortlessly monitor attendance, evaluate performance, and provide feedback. <br>
Access records, examine markings, and communicate with ease.
</h3>

<br>

https://www.youtube.com/channel/UC7M2nENRZ0MdvuyHWZL_P4g

# About

The School Management System is a web-based application developed on the MERN stack (MongoDB, Express.js, React.js, and Node.js). It strives to improve school management, class organization, and communication among students, instructors, and administrators.

## Features

- User Role: The system has three user roles: administrator, teacher, and student. Each role has distinct functions and access levels.

- Admin Dashboard: Administrators can add new students and teachers, create classes and subjects, manage user accounts, and control system settings.

- Attention Tracking: Teachers may quickly take attendance in their classrooms, designate students as present or absent, and create attendance reports.


- Performance Assessment: Teachers can evaluate students' performance by providing grades and feedback. Students can see their grades and monitor their progress over time.

- Data Visualization: Students can view their performance statistics via interactive charts and tables, which help them comprehend their academic success at a glance.

- Communication: Users can communicate seamlessly with the system. Teachers can send notes to pupils, and vice versa, encouraging good communication and teamwork.
.

## Technologies Used

- Frontend: React.js, Material UI, Redux
- Backend: Node.js, Express.js
- Database: MongoDB

<br>

# Installation

```sh
git clone https://github.com/naimehawlader/ISMS-TGU.git
```
Open 2 terminals in separate windows/tabs.

Terminal 1: Setting Up Backend 
```sh
cd backend
npm install
npm start
```
The Backend API will be running at `localhost:5050`.

1. Create a.env file in the backend folder. Within it, write this:

MONGO_URL = mongodb://127.0.0.1/school/
{MONGO_URL = mongodb://localhost:27017/mern-tgu-school-management-system (Mine)}

2. If you use MongoDB Compass, you can use this database link; however, if you use MongoDB Atlas, you should create your own database link.


Terminal 2: Setting Up Frontend
```sh
cd frontend
npm install
npm start
```
Now, navigate to `localhost:3003` in your browser. 


1. After following these instructions, try joining up again. If the problem persists, take these additional actions to fix it:

Navigate to the frontend > src > redux > userRelated > userHandle.js file.

Add the following line after the import statements:

const REACT_APP_BASE_URL = "http://localhost:5050";

2. IMPORTANT: Repeat the process for any other files having "Handle" in the name.

For example, in the redux folder, there are additional directories such as userRelated. In the teacher-related folder, there is a file called teacherHandle. Similarly, additional folders include files named "Handle". Make sure to keep these files updated as well.

The problem arises because the.env file in the front end may not work for all users, although it does for me.

Additionally:

When testing the project, sign up rather than checking in as a guest or using a standard login if you have not yet registered an account.


To use guest mode, go to LoginPage.js and enter an email and password from a previously created project in the system. This makes the login procedure easier, and you can use your credentials after creating your account.

These procedures should fix the network fault in the front end. If the problem persists, please feel free to contact me for additional assistance.

	 

<br>

# Deployment
* (not yet)Render - server-side
* not yet(Netlify) - client-side

