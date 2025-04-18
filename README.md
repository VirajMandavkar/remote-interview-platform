Video Calling Interview Platform
✨ A seamless platform for conducting technical interviews, featuring real-time video calls, screen sharing, and secure authentication.

Features
🚀 Video Calls: Real-time video communication for interviews.

🖥️ Screen Sharing: Candidates can share their screens with the interviewer.

🎬 Screen Recording: Record the interview session for future review.

🔒 Authentication & Authorization: Secure user login and session management with Clerk.

💻 Real-Time Data Sync: Real-time session management and updates via Convex.

🎨 Responsive Design: Built with Tailwind CSS for a clean, responsive UI.

📈 Scalable Architecture: Built with Next.js and TypeScript for improved performance and scalability.

Technology Stack
Frontend: React, Next.js, TypeScript

Styling: Tailwind CSS, Shadcn

Real-Time Video & Messaging: Stream API

Backend: Convex (serverless backend)

Authentication: Clerk API

Other Tools: Git, NPM, Node.js

Setup and Installation
To get the platform running locally, follow the steps below.

1. Clone the Repository
bash
Copy
git clone https://github.com/your-username/video-calling-interview-platform.git
cd video-calling-interview-platform
2. Install Dependencies
Ensure that Node.js and npm are installed on your system. Then, run the following command to install the required dependencies:

bash
Copy
npm install
3. Set Up Environment Variables
Create a .env file at the root of the project and add the following keys. These keys are necessary for the Clerk, Stream, and Convex integrations.

bash
Copy
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=[your-clerk-publishable-key]
CLERK_SECRET_KEY=[your-clerk-secret-key]
CONVEX_DEPLOYMENT=[your-convex-deployment-url]
NEXT_PUBLIC_CONVEX_URL=[your-convex-url]
NEXT_PUBLIC_STREAM_API_KEY=[your-stream-api-key]
STREAM_SECRET_KEY=[your-stream-secret-key]
4. Run the Application
Once the dependencies are installed and the environment variables are configured, you can run the application locally using:

bash
Copy
npm run dev
Visit http://localhost:3000 to access the platform in your browser.

Usage
1. Register or Login
Once the app is running, navigate to the login page. Register or log in using the Clerk authentication system.

2. Start/Join an Interview
Interviewers can create and manage interview sessions by selecting time slots.

Candidates can join the interview session via a unique URL.

3. Use Features During the Interview
Video Calls: Conduct real-time interviews with live video streaming.

Screen Sharing: Share your screen to show coding solutions, slides, or other materials.

Screen Recording: Record the entire session for future review and analysis.

4. Session Management
The platform uses Convex for real-time data synchronization to ensure that changes made during the interview (e.g., new messages, session updates) are reflected instantly across all clients.

Data Structure Overview
The platform utilizes various data structures to ensure efficient operation:

Arrays: Store participant lists and screen frames.

Hash Tables: Manage session details, including user identity and roles.

Queues: Handle real-time message processing and video streaming.

Graphs: Represent relationships between users during live sessions.

Trees: Manage session routes and hierarchical session data.

Stacks: Store video frames for screen recording.

API Integrations
Stream API: Powers real-time video streaming and messaging. Stream provides low-latency communication for video calls and chat functionalities.

Clerk API: Handles user authentication, session management, and role-based access.

Convex API: Manages real-time data synchronization between the frontend and backend, ensuring smooth, live updates during interview sessions.

Contributing
We welcome contributions! If you want to contribute to this project:
Fork the repository.
Create a new branch for your feature or fix.
Commit your changes and push the branch to your fork.
Open a pull request with a clear description of your changes.

Issues
It currently some issues like Candidate interface is not ready yet, during SignIn one cannot select being a Interviewer or Candidate

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Stream API for providing the video calling and messaging infrastructure.

Clerk API for simplifying authentication and user management.

Convex for enabling real-time data sync in a serverless environment.
