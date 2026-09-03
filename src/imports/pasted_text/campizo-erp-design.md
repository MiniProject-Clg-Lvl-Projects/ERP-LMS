Design a complete, high-fidelity, responsive web-based ERP system ui called **CAMPIZO** based on the workflow described below.

CAMPIZO is an **Educational ERP / Learning Management System** with two primary user roles:

1. **FACULTY**
2. **STUDENT**

Create the design as a **fully connected clickable prototype**, where buttons, cards, navigation items, forms, dropdowns, and actions lead to the appropriate screens. Do not create only a static dashboard. Create all screens required by the workflow.

---

# 1. OVERALL DESIGN DIRECTION

Create a modern, professional college ERP interface.

Brand name:
**CAMPIZO**

Style:

- Modern educational technology / SaaS dashboard
- Clean and professional
- Dark navy/charcoal overall interface
- Purple as the primary brand/accent color
- Teal/green for secondary actions and course-related elements
- White/light cards for readable content
- Rounded cards and buttons
- Subtle shadows
- Clear typography
- Spacious layouts
- Responsive desktop-first design
- Consistent sidebar navigation
- Consistent header across authenticated screens

Use a polished UI suitable for an engineering college/university ERP.

The interface should feel like a combination of a modern LMS and institutional ERP.

---

# 2. ENTRY / AUTHENTICATION

Create a CAMPIZO landing/login experience.

Screens:

- Campizo Landing Page
- Login
- Register
- Role Selection / Login as Faculty or Student

After login:

Faculty → Faculty Dashboard

Student → Student Dashboard

Include:

- CAMPIZO logo
- Email/username field
- Password field
- Login button
- Register option
- Forgot password
- Faculty/Student role selection

---

# 3. FACULTY WORKFLOW

Create a dedicated Faculty interface with a left sidebar containing:

- Dashboard
- My Learning
- Course List Approval
- Created Courses
- Profile
- Settings
- Logout

## Faculty Dashboard

Create a dashboard containing:

- Welcome message
- Total courses
- Courses awaiting approval
- Courses in progress
- Total learners
- Recent courses
- Recent activity
- Quick actions

Quick actions:

- Create Course
- View Created Courses
- Assign Students
- View Course Approvals

---

# 4. FACULTY — MY LEARNING

Create a **My Learning** page for faculty.

Show:

- Enrolled courses
- Course cards
- Course title
- Course status
- Progress
- Course instructor
- Continue Learning button

Clicking a course should open the relevant Course Information / Course Content screen.

---

# 5. FACULTY — COURSE LIST APPROVAL

Create a **Course List Approval** screen.

Display courses that require faculty/admin approval.

Each course should appear as a card/table row containing:

- Course title
- Course code
- Faculty
- Status
- Date
- Approval status
- View Course
- Approve / Reject actions where appropriate

Clicking a course opens the Course Information page.

---

# 6. FACULTY — CREATED COURSES

Create a **Created Courses** page.

Show all courses created by the logged-in faculty member.

Each course card should contain:

- Course title
- Course code
- Status
- Number of students
- Progress
- Approval status
- View Course
- Edit Course

Include a prominent:

**+ Create Course**

button.

---

# 7. CREATE COURSE

Create a complete **Create Course** workflow.

The faculty should be able to create a new course.

Create a form containing relevant course information such as:

- Course title
- Course code
- Description
- Syllabus
- Experiments
- Course category
- Course level
- Other basic course information

Include:

- Save
- Cancel
- Create Course

After creation, the course should appear under **Created Courses**.

The created course data should conceptually be stored in the Campizo database.

---

# 8. FACULTY — GRID OF FETCHED COURSES

Create a **Grid of Fetched Courses** screen.

Display available courses in a grid layout.

Each course card should show:

- Course title
- Course code
- Faculty
- Course status
- View Course button

When faculty selects a course:

Grid of Fetched Courses
→ Select Course
→ Course Information

---

# 9. COURSE INFORMATION

Create a detailed **Course Information** page.

Include:

- Course title
- Course code
- Description
- Faculty
- Course status
- Syllabus
- Experiments
- Number of learners
- Course content
- Course preview

Provide navigation/actions for:

- Course Content
- Course Preview
- Learners

---

# 10. COURSE CONTENT

Create a **Course Content** management page.

The faculty should be able to manage the contents of the selected course.

Include:

- Course title
- Course overview
- Units/modules
- Content list
- Syllabus
- Experiments

Create an **Actions** section containing:

### Request for Approval

Allow faculty to request approval for the course.

### Mark as In Progress

Allow faculty to mark the course as in progress.

After selecting **Mark as In Progress**, show a selected course page.

---

# 11. SELECTED COURSE PAGE

Create a detailed **Selected Course Page**.

Include:

- Course title
- Course code
- Course status
- Progress
- Course content
- Units
- Syllabus
- Experiments

Include a prominent:

**+ Add Unit**

button.

---

# 12. ADD UNIT POPUP

When faculty clicks **Add Unit**, display a modal/popup.

The popup must contain:

**Title**

Input field for unit title.

Buttons:

- Confirmation / Add Unit
- Cancel

After confirming, the new unit should appear in the course content list.

---

# 13. SYLLABUS AND EXPERIMENTS

Within the selected course, create separate sections for:

### Syllabus

Display syllabus information and allow faculty to manage it.

### Experiments

Display experiment information and allow faculty to manage it.

After Syllabus and Experiments, create an **Action** section containing:

- Add
- Edit
- Delete

These actions should visually update the corresponding records.

---

# 14. COURSE PREVIEW

Create a **Course Preview** page.

This should show how the course appears to students.

Include:

- Course title
- Course description
- Instructor
- Syllabus
- Units
- Course content
- Experiments
- Course progress/structure

Include:

**List of Content**

Clicking content should open:

**Document Preview**

Create a clean document/content preview screen showing:

- Document title
- Course/unit name
- Content
- Previous / Next navigation
- Close / Back

---

# 15. FACULTY — LEARNERS

Create a **Learners** page for each course.

Show:

- Student list
- Student name
- Student ID
- Email
- Enrollment status
- Course progress
- Completion status

Include:

**Assign Students**

button.

---

# 16. ASSIGN STUDENTS

Create an **Assign Students** interface.

Allow faculty to:

- Search students
- Select students
- Assign students to the course
- View already assigned students

After assignment, show the selected students in the student list.

Also support the concept of **self-enrolled students**.

---

# 17. STUDENT WORKFLOW

Create a completely separate Student interface.

Student sidebar:

- Dashboard
- Global / Institute Level Courses
- Search Courses
- My Learning
- Profile
- Settings
- Logout

---

# 18. STUDENT DASHBOARD

Create a Student Dashboard containing:

- Welcome message
- Total Courses
- Completed Courses
- In Progress Courses
- Not Yet Started Courses
- Recently accessed courses
- Recommended/available courses
- Progress overview

Use visually distinct statistic cards.

---

# 19. GLOBAL / INSTITUTE LEVEL COURSE

Create a **Global / Institute Level Course** screen.

Allow students to browse courses available at:

- Global level
- Institute level

Show courses using attractive course cards.

Each card should contain:

- Course title
- Course code
- Instructor
- Course level
- Description
- Enrollment status
- Enroll button

---

# 20. SEARCH FOR COURSE

Create a dedicated **Search for Course** interface.

Include:

- Large search bar
- Search icon
- Filters
- Course category
- Course level
- Institute/global filter

Display search results as course cards.

Each course should have:

**Enroll**

button.

After clicking Enroll, update the student's My Learning area.

---

# 21. STUDENT SELF-ENROLLMENT

Support this flow:

Student
→ Global / Institute Level Course
→ Search for Course
→ Select Course
→ Enroll
→ My Learning

The prototype should visually demonstrate the enrollment interaction.

Show confirmation such as:

**"Successfully enrolled in this course."**

---

# 22. STUDENT — MY LEARNING

Create the main **My Learning** screen.

At the top, display four large statistic cards:

### Total Courses

### Completed Courses

### In Progress Courses

### Not Yet Started

Below these cards, provide corresponding course sections.

---

# 23. TOTAL COURSES

Create:

**Total Courses**

screen/list.

Show all courses enrolled by the student.

Each course card should contain:

- Course title
- Course code
- Instructor
- Progress
- Status
- Continue/View Course button

---

# 24. COMPLETED COURSES

Create:

**Completed Courses**

screen.

Display all completed courses.

Each card should show:

- Course title
- Completion status
- Completion date
- Course information
- View Course

---

# 25. IN PROGRESS COURSES

Create:

**In Progress Courses**

screen.

Display courses currently being studied.

Each card should contain:

- Course title
- Progress percentage
- Progress bar
- Current unit
- Continue Learning button

---

# 26. NOT YET STARTED COURSES

Create:

**Not Yet Started Courses**

screen.

Display enrolled courses that the student has not started.

Each card should contain:

- Course title
- Course information
- Instructor
- Start Course button

---

# 27. DATABASE / DATA FLOW

The flowchart contains a central **DB** representing the Campizo database.

Do not display the database as a visible user-facing screen.

Instead, represent it through realistic UI interactions and state changes.

The prototype should conceptually support:

Faculty:

- Create course → DB
- Fetch courses ← DB
- Fetch course content ← DB
- Add unit → DB
- Edit record → DB
- Delete record → DB
- Assign students → DB
- Fetch learners ← DB

Student:

- Search/fetch courses ← DB
- Enroll course → DB
- Fetch enrolled courses ← DB
- Fetch all courses ← DB
- Fetch completed courses ← DB
- Fetch in-progress courses ← DB
- Fetch not-yet-started courses ← DB

The UI does not need to expose technical database operations, but the prototype navigation/state should reflect these relationships.

---

# 28. PROTOTYPE CONNECTIONS

Make the prototype clickable and connect the screens according to this overall flow.

MAIN FLOW:

CAMPIZO
→ Login/Register
→ Select Role

FACULTY:
Login
→ Faculty Dashboard
→ My Learning
→ Course List Approval
→ Created Courses
→ Create Course
→ Grid of Fetched Courses
→ Select Course
→ Course Information
→ Course Content
→ Course Preview
→ Document Preview
→ Learners
→ Assign Students
→ Selected Course Page
→ Add Unit
→ Syllabus
→ Experiments
→ Add / Edit / Delete
→ Database state update

STUDENT:
Login
→ Student Dashboard
→ Global / Institute Level Course
→ Search for Course
→ Select Course
→ Enroll
→ My Learning
→ Total Courses
→ Completed Courses
→ In Progress Courses
→ Not Yet Started Courses

---

# 29. NAVIGATION

Use a persistent sidebar for authenticated users.

Faculty sidebar:
Dashboard
My Learning
Course List Approval
Created Courses

Student sidebar:
Dashboard
Global / Institute Courses
Search Course
My Learning

Use breadcrumbs on detailed pages.

Example:

Dashboard / Created Courses / Course Name / Course Content

Include:

- Back navigation
- Notifications
- User profile
- Logout
- Search where appropriate

---

# 30. COMPONENT SYSTEM

Create reusable Figma components for:

- Sidebar
- Header
- Buttons
- Course cards
- Statistic cards
- Tables
- Search bars
- Dropdowns
- Status badges
- Progress bars
- Modals
- Forms
- Tabs
- Breadcrumbs
- Toast notifications
- Empty states
- Confirmation dialogs

Create reusable variants for:

- Primary button
- Secondary button
- Danger/Delete button
- Approve button
- Status states
- Course progress states

---

# 31. IMPORTANT DESIGN REQUIREMENT

Do NOT simplify the project into only a dashboard.

The goal is to create a **complete front-end prototype of the entire CAMPIZO ERP system represented in the supplied workflow diagram**.

Every major node in the workflow should correspond to a screen, component, modal, section, or interaction.

The final Figma prototype should allow a user to realistically navigate through both:

**FACULTY WORKFLOW**

and

**STUDENT WORKFLOW**

while maintaining a consistent CAMPIZO design system.

Create enough screens and connected prototype interactions to demonstrate the entire workflow from login → dashboard → course management/enrollment → learning → database-driven states.

Use realistic sample course/student data instead of lorem ipsum.

Make the final result polished enough to present as a **college mini-project / ERP product prototype**.