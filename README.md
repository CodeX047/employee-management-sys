# Employee Management System

A modern web application for efficient task and employee management, built with React and Tailwind CSS.

## ✨ Features

### 👨‍💼 Admin Dashboard

- Create and assign tasks to specific employees
- Track employee performance metrics
- View comprehensive task statistics
- Monitor task completion rates
- Real-time updates of task status

### 👤 Employee Dashboard

- Personalized task overview
- Task status management workflow:
  - New → In Progress → Completed/Failed
- Visual task categorization
- Real-time task statistics
- Individual performance tracking

## 🛠️ Tech Stack

- **Frontend:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **State Management:** React Context API
- **Data Persistence:** Local Storage
- **Code Quality:** ESLint

## 📦 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/CodeX047/employee-management-sys.git
cd employee-management-sys
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## 🔐 Authentication

### Admin Credentials

```
Email: admin@company.com
Password: 123
```

### Sample Employee Credentials

```
Email: vishal.patil@company.com
Password: 123
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Auth/           # Authentication components
│   ├── Dashboard/      # Admin and Employee dashboards
│   └── TaskList/       # Task management components
├── context/
│   └── AuthProvider.jsx    # Authentication context
├── Other/              # Shared components
├── utils/              # Helper functions
└── main.jsx           # Application entry point

```

## 🎯 Core Functionality

### Task Management

- Create new tasks with title, description, due date
- Assign tasks to specific employees
- Track task status (New/In Progress/Completed/Failed)
- View task details and history

### User Management

- Secure authentication system
- Role-based access control (Admin/Employee)
- Personal dashboard for each user
- Task performance tracking

## 🚀 Deployment

1. Build the project:

```bash
npm run build
```

2. Preview the build:

```bash
npm run preview
```

The `dist` folder will contain the production-ready files.

## 📝 Development Notes

- Uses Vite for fast development experience
- Implements modern React patterns and hooks
- Follows ESLint code quality standards
- Responsive design with Tailwind CSS
- Local storage for data persistence
