const employees = [
  {
    id: 1,
    email: "vishal.patil@company.com",
    password: "123",
    tasks: [
      {
        title: "Design Login Page",
        description:
          "Create a responsive login page with proper form validation and dark theme support.",
        date: "2025-10-18",
        category: "UI/UX",
        status: "In Progress",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Implement Authentication",
        description:
          "Set up user authentication using Firebase or local JSON data for now.",
        date: "2025-10-20",
        category: "Development",
        status: "Pending",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Navbar Responsiveness",
        description: "Adjust navbar layout for smaller screen devices.",
        date: "2025-10-19",
        category: "Frontend",
        status: "Completed",
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "rohit.sharma@company.com",
    password: "123",
    tasks: [
      {
        title: "Database Schema Design",
        description:
          "Create ER diagrams and structure tables for employee and task management.",
        date: "2025-10-17",
        category: "Backend",
        status: "Completed",
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Integrate Task API",
        description:
          "Connect frontend task components with backend API endpoints.",
        date: "2025-10-21",
        category: "Development",
        status: "In Progress",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Write Unit Tests",
        description: "Add basic unit tests for backend task routes using Jest.",
        date: "2025-10-22",
        category: "Testing",
        status: "Failed",
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    email: "kunal.s@company.com",
    password: "123",
    tasks: [
      {
        title: "Create Dashboard UI",
        description:
          "Design a minimal and clean dashboard interface for task overview.",
        date: "2025-10-20",
        category: "UI/UX",
        status: "In Progress",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Add Animations",
        description:
          "Use Framer Motion or GSAP to animate cards and transitions.",
        date: "2025-10-21",
        category: "Frontend",
        status: "Pending",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Hover Effects",
        description:
          "Refine hover effects for consistency across dashboard cards.",
        date: "2025-10-18",
        category: "Frontend",
        status: "Completed",
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "mohd.samshad@company.com",
    password: "123",
    tasks: [
      {
        title: "Setup MongoDB",
        description:
          "Initialize MongoDB Atlas database and configure connection URI.",
        date: "2025-10-17",
        category: "Backend",
        status: "Completed",
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "API Documentation",
        description:
          "Document API routes for employee and task endpoints using Swagger.",
        date: "2025-10-20",
        category: "Documentation",
        status: "In Progress",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Task Deletion Bug",
        description:
          "Resolve issue where deleting a task causes UI to not refresh properly.",
        date: "2025-10-21",
        category: "Development",
        status: "Failed",
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    email: "rudra.naik@company.com",
    password: "123",
    tasks: [
      {
        title: "Deploy Project",
        description:
          "Host the Employee Management System on Vercel or Netlify.",
        date: "2025-10-22",
        category: "Deployment",
        status: "Pending",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Optimize Performance",
        description:
          "Reduce bundle size and improve load times using code splitting.",
        date: "2025-10-20",
        category: "Performance",
        status: "In Progress",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Dark Mode Colors",
        description:
          "Adjust contrast and color tones for better dark mode visibility.",
        date: "2025-10-19",
        category: "UI/UX",
        status: "Completed",
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@company.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return{employees, admin};
};
