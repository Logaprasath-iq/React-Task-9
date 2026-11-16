export const currentUser = {
  name: "Tonald Drump",
  role: "Junior Full Stack Developer",
  department: "Technology & Engineering",
  employeeId: "11234",
  email: "Tonald@work.com",
  phone: "+62 821 0000 0000",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  verified: true,
  joinDate: "January 2023",
  workLocation: "Jakarta, Indonesia (HQ)"
};

export const onboardingSlides = [
  {
    id: 1,
    title: "Welcome to Workmate!",
    highlight: "Make Smart Decisions!",
    description: "Make Smart Decisions! Set clear timelines for projects and celebrate your achievements!",
    subtitle: "Streamline your daily workflow and tasks effortlessly."
  },
  {
    id: 2,
    title: "Manage Stress Effectively",
    highlight: "Stay Balanced!",
    description: "Stay Balanced! Track your workload and maintain a healthy stress level with ease.",
    subtitle: "AI-assisted burnout risk indicators keep you performing at your best."
  },
  {
    id: 3,
    title: "Plan for Success",
    highlight: "Your Journey Starts Here!",
    description: "Your Journey Starts Here! Earn achievement badges as you conquer your tasks. Let's get started!",
    subtitle: "Turn everyday tasks into career growth milestones."
  },
  {
    id: 4,
    title: "Navigate Your Work Journey Efficient & Easy",
    highlight: "Radical Growth",
    description: "Increase your work management & career development radically.",
    subtitle: "All-in-one HR, attendance, task tracking, expense claims & leave requests."
  }
];

export const countryCodes = [
  { code: "+1", country: "United States", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+971", country: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+1", country: "Canada", flag: "🇨🇦" }
];

export const avatarOptions = [
  { id: 1, url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80", label: "Tariqul (Default)" },
  { id: 2, url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80", label: "Alex (Creative)" },
  { id: 3, url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80", label: "Sarah (Product)" },
  { id: 4, url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80", label: "David (Engineering)" },
  { id: 5, url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80", label: "Elena (Operations)" }
];

export const departments = [
  "Product Design & UX",
  "Engineering & Technology",
  "Product Management",
  "People Operations (HR)",
  "Marketing & Communications",
  "Finance & Accounting",
  "Customer Experience"
];

export const initialAttendance = {
  isClockedIn: false,
  clockInTime: null,
  activeSeconds: 8 * 3600 + 35 * 60 + 12, // 08:35:12
  targetHours: "09:00 Hrs",
  history: [
    {
      id: 1,
      date: "11 September 2024",
      totalHrs: "08:35:00 Hrs",
      workingHrs: "09:15 AM – 05:50 PM",
      status: "On Time",
      breakHrs: "01:00 Hr",
      overtime: "00:00 Hr"
    },
    {
      id: 2,
      date: "10 September 2024",
      totalHrs: "08:30:00 Hrs",
      workingHrs: "09:30 AM – 06:00 PM",
      status: "On Time",
      breakHrs: "01:00 Hr",
      overtime: "00:00 Hr"
    },
    {
      id: 3,
      date: "09 September 2024",
      totalHrs: "08:45:00 Hrs",
      workingHrs: "09:00 AM – 05:45 PM",
      status: "On Time",
      breakHrs: "01:00 Hr",
      overtime: "00:00 Hr"
    },
    {
      id: 4,
      date: "06 September 2024",
      totalHrs: "08:20:00 Hrs",
      workingHrs: "09:40 AM – 06:00 PM",
      status: "Late (10m)",
      breakHrs: "01:00 Hr",
      overtime: "00:00 Hr"
    }
  ]
};

export const initialTasks = [
  {
    id: 1,
    title: "Visual Identity Design",
    time: "09:00 AM – 11:00 AM",
    status: "Done",
    category: "Design",
    tag: "Branding",
    progress: 100,
    priority: "Medium",
    team: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&q=80"
    ],
    moreTeamCount: 1,
    dueDate: "Today, 11:00 AM"
  },
  {
    id: 2,
    title: "Colleague Project",
    time: "11:30 AM – 01:30 PM",
    status: "Done",
    category: "Research",
    tag: "Collab",
    progress: 100,
    priority: "Low",
    team: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
    ],
    moreTeamCount: 0,
    dueDate: "Today, 01:30 PM"
  },
  {
    id: 3,
    title: "Wireframe and User Journey",
    time: "02:00 PM – 05:00 PM",
    status: "In Progress",
    category: "UX Design",
    tag: "Design",
    progress: 75,
    priority: "High",
    team: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&q=80"
    ],
    moreTeamCount: 3,
    dueDate: "Friday, 05:00 PM"
  },
  {
    id: 4,
    title: "API Dashboard Analytics Integration",
    time: "Tomorrow, 10:00 AM",
    status: "In Progress",
    category: "Frontend",
    tag: "Dev",
    progress: 50,
    priority: "High",
    team: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80"
    ],
    moreTeamCount: 2,
    dueDate: "Next Monday, 12:00 PM"
  }
];

export const initialExpenses = [
  {
    id: 1,
    title: "Flight Ticket / Travelling",
    category: "Travelling",
    date: "11 September 2024",
    totalExpense: "$150",
    rawAmount: 150,
    status: "Pending",
    receiptNumber: "REC-2024-9912",
    note: "Client onsite visit travel fare"
  },
  {
    id: 2,
    title: "Client Dinner / Meal",
    category: "Meals",
    date: "10 September 2024",
    totalExpense: "$52",
    rawAmount: 52,
    status: "Pending",
    receiptNumber: "REC-2024-9908",
    note: "Business dinner with stakeholder"
  },
  {
    id: 3,
    title: "Office Equipment & Tech",
    category: "Equipment",
    date: "09 September 2024",
    totalExpense: "$30",
    rawAmount: 30,
    status: "Pending",
    receiptNumber: "REC-2024-9894",
    note: "USB-C monitor hub connector"
  },
  {
    id: 4,
    title: "Adobe Creative Cloud Annual",
    category: "Software",
    date: "01 September 2024",
    totalExpense: "$650",
    rawAmount: 650,
    status: "Approved",
    receiptNumber: "REC-2024-9840",
    note: "Team design tool subscription"
  },
  {
    id: 5,
    title: "UX Design Conference Pass",
    category: "Conference",
    date: "28 August 2024",
    totalExpense: "$330",
    rawAmount: 330,
    status: "Approved",
    receiptNumber: "REC-2024-9812",
    note: "Professional education admission ticket"
  },
  {
    id: 6,
    title: "Weekend Personal Cab Ride",
    category: "Transport",
    date: "15 August 2024",
    totalExpense: "$85",
    rawAmount: 85,
    status: "Rejected",
    receiptNumber: "REC-2024-9762",
    note: "Non-business trip weekend commute (Rejected by HR)"
  }
];

export const initialLeaves = [
  {
    id: 1,
    title: "Annual Vacation",
    leaveTaken: "11 Sept – 14 Sept",
    totalDays: "4 Days",
    date: "12 September 2024",
    status: "Pending",
    reason: "Annual family retreat and travel",
    appliedDate: "10 Sept 2024"
  },
  {
    id: 2,
    title: "Emergency Medical Recovery",
    leaveTaken: "20 Aug – 21 Aug",
    totalDays: "2 Days",
    date: "22 August 2024",
    status: "Approved",
    reason: "Severe viral fever & prescribed doctor rest",
    appliedDate: "19 Aug 2024"
  },
  {
    id: 3,
    title: "Casual Personal Time-off",
    leaveTaken: "14 Jul – 15 Jul",
    totalDays: "2 Days",
    date: "16 July 2024",
    status: "Approved",
    reason: "Home relocation & settlement",
    appliedDate: "10 Jul 2024"
  },
  {
    id: 4,
    title: "Weekend Extension Leave",
    leaveTaken: "05 Jul – 06 Jul",
    totalDays: "2 Days",
    date: "07 July 2024",
    status: "Rejected",
    reason: "Sprint delivery deadline conflict (Manager Rejected)",
    appliedDate: "03 Jul 2024"
  },
  {
    id: 5,
    title: "Public Holiday Compensation",
    leaveTaken: "02 May – 05 May",
    totalDays: "4 Days",
    date: "06 May 2024",
    status: "Approved",
    reason: "Compensatory off for weekend deployment",
    appliedDate: "28 Apr 2024"
  }
];

export const notificationsList = [
  {
    id: 1,
    title: "Leave Approved",
    desc: "Your leave request for 20-21 August was approved by HR.",
    time: "2 hours ago",
    unread: true,
    type: "leave"
  },
  {
    id: 2,
    title: "Task Assigned",
    desc: "David added you to 'Wireframe and User Journey'.",
    time: "4 hours ago",
    unread: true,
    type: "task"
  },
  {
    id: 3,
    title: "Expense Reviewed",
    desc: "Your expense of $150 (Flight Ticket) is under review.",
    time: "Yesterday",
    unread: false,
    type: "expense"
  },
  {
    id: 4,
    title: "Clock-In Reminder",
    desc: "Don't forget to clock-in before 09:30 AM tomorrow morning.",
    time: "1 day ago",
    unread: false,
    type: "attendance"
  }
];
