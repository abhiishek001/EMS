
localStorage.clear();

const employees = [
  {
    id: 1,
    firstName: "Ravi",
    email: "e1@e.com",
    password: "123",
    tasks: [
      {
        taskNumber: "active1",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Prepare Sales Report",
        description: "Compile the monthly sales data and generate a detailed report.",
        date: "2024-12-25",
        category: "Reporting",
      },
      {
        taskNumber: "newTask1",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Team Meeting",
        description: "Attend the team meeting to discuss project updates.",
        date: "2024-12-26",
        category: "Meeting",
      },
      {
        taskNumber: "completed1",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Review",
        description: "Review the code submitted by team members.",
        date: "2024-12-20",
        category: "Development",
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Anjali",
    email: "e2@e.com",
    password: "123",
    tasks: [
      {
        taskNumber: "active1",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Client Call",
        description: "Discuss project requirements with the client.",
        date: "2024-12-23",
        category: "Communication",
      },
      {
        taskNumber: "newTask1",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Market Research",
        description: "Conduct research on market trends for the upcoming product launch.",
        date: "2024-12-27",
        category: "Research",
      },
      {
        taskNumber: "failed1",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Submit Expense Report",
        description: "Submit the expense report for the last quarter.",
        date: "2024-12-21",
        category: "Finance",
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 3,
    firstName: "Kiran",
    email: "e3@e.com",
    password: "123",
    tasks: [
      {
        taskNumber: "completed1",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Bug #2345",
        description: "Resolve the login issue reported by users.",
        date: "2024-12-22",
        category: "Development",
      },
      {
        taskNumber: "active1",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Database Optimization",
        description: "Optimize the database queries for faster performance.",
        date: "2024-12-24",
        category: "Database",
      },
      {
        taskNumber: "newTask1",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Presentation",
        description: "Create slides for the quarterly business review.",
        date: "2024-12-28",
        category: "Presentation",
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Priya",
    email: "e4@e.com",
    password: "123",
    tasks: [
      {
        taskNumber: "active1",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Code Deployment",
        description: "Deploy the new feature to the production server.",
        date: "2024-12-29",
        category: "Deployment",
      },
      {
        taskNumber: "completed1",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write Documentation",
        description: "Document the new APIs for internal use.",
        date: "2024-12-20",
        category: "Documentation",
      },
      {
        taskNumber: "failed1",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Schedule Maintenance",
        description: "Schedule maintenance downtime for server updates.",
        date: "2024-12-21",
        category: "Maintenance",
      },
    ],
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 5,
    firstName: "Vikas",
    email: "e5@e.com",
    password: "123",
    tasks: [
      {
        taskNumber: "active1",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "UI Design Review",
        description: "Review the updated UI design for the mobile app.",
        date: "2024-12-30",
        category: "Design",
      },
      {
        taskNumber: "newTask1",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Test Cases",
        description: "Develop test cases for the new module.",
        date: "2024-12-27",
        category: "Testing",
      },
      {
        taskNumber: "failed1",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Update Training Materials",
        description: "Update the training materials for the HR team.",
        date: "2024-12-22",
        category: "Training",
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
  },
];


const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
  },
];

  
  export const  setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
    
  }

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    
    return {employees, admin};
    
  }