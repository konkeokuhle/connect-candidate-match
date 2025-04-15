
# ConnectMatch Wireframes & Screen Flow

This document outlines the screen-to-screen flow and wireframes for the ConnectMatch application, designed for both Graduate and Employer user journeys.

## Screen Flow Overview

### Entry Points

- **Screen 0: Home Page** → Leads to:
  - Screen 1: Sign In
  - Screen 1.1: Graduate Sign Up
  - Screen 1.2: Employer Sign Up

### Graduate Journey

- **Graduate Dashboard** → Leads to:
  - CV Creation
  - Profile Creation
  - Job Search → Leads to:
    - Job Application
    - Direct Message with Employer
  - Direct Message
  - Application Tracker

### Employer Journey

- **Employer Dashboard** → Leads to:
  - Profile Management
  - Candidate Search → Leads to:
    - Candidate View
    - Bookmark Candidate
    - Direct Message
  - Job Posting
  - Direct Message
  - Analytics Board
  - Job Application Inbox → Leads to:
    - View Candidate
    - Update Status

## Detailed Wireframes

### Screen 0: Home Page
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
|  [Logo] ConnectMatch                    [Login] [Register] |
+------------------------------------------------------+
|                                                      |
|       +----------------------------------------+     |
|       |                                        |     |
|       |          HERO IMAGE/ANIMATION          |     |
|       |                                        |     |
|       +----------------------------------------+     |
|                                                      |
|       CONNECTING GRADUATES AND EMPLOYERS             |
|       Find your perfect match with our intelligent   |
|       matching platform                              |
|                                                      |
|       [GRADUATE SIGN UP]    [EMPLOYER SIGN UP]       |
|                                                      |
+------------------------------------------------------+
|                                                      |
|  FEATURED STATS                                      |
|  +-------------+  +-------------+  +-------------+   |
|  | X Graduates |  | Y Companies |  | Z Job       |   |
|  | Placed      |  | Registered  |  | Postings    |   |
|  +-------------+  +-------------+  +-------------+   |
|                                                      |
+------------------------------------------------------+
|                                                      |
|  HOW IT WORKS                                        |
|  +-------------+  +-------------+  +-------------+   |
|  | 1. Create   |  | 2. Match    |  | 3. Connect  |   |
|  | Profile     |  | with Jobs   |  | & Apply     |   |
|  +-------------+  +-------------+  +-------------+   |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
| About | Contact | For Graduates | For Employers      |
+------------------------------------------------------+
```

### Screen 1: Sign In
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
+------------------------------------------------------+
|                                                      |
|       +----------------------------------------+     |
|       |                SIGN IN                 |     |
|       |                                        |     |
|       |  [Email Address]                       |     |
|       |  [Password]          [Forgot Password] |     |
|       |                                        |     |
|       |  [Remember Me]                         |     |
|       |                                        |     |
|       |  [SIGN IN BUTTON]                      |     |
|       |                                        |     |
|       |  ------------- OR ---------------      |     |
|       |                                        |     |
|       |  [Sign in with Google]                 |     |
|       |  [Sign in with LinkedIn]               |     |
|       |                                        |     |
|       |  Don't have an account? Sign Up        |     |
|       +----------------------------------------+     |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### Screen 1.1: Graduate Sign Up
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
+------------------------------------------------------+
|                                                      |
|       +----------------------------------------+     |
|       |           GRADUATE SIGN UP             |     |
|       |                                        |     |
|       |  [Full Name]                           |     |
|       |  [Email Address]                       |     |
|       |  [Password]                            |     |
|       |  [Confirm Password]                    |     |
|       |                                        |     |
|       |  [Graduation Year]                     |     |
|       |  [Field of Study]                      |     |
|       |                                        |     |
|       |  [Terms and Conditions Checkbox]       |     |
|       |                                        |     |
|       |  [CREATE ACCOUNT]                      |     |
|       |                                        |     |
|       |  ------------- OR ---------------      |     |
|       |                                        |     |
|       |  [Sign up with Google]                 |     |
|       |  [Sign up with LinkedIn]               |     |
|       |                                        |     |
|       |  Already have an account? Sign In      |     |
|       +----------------------------------------+     |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### Screen 1.2: Employer Sign Up
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
+------------------------------------------------------+
|                                                      |
|       +----------------------------------------+     |
|       |           EMPLOYER SIGN UP             |     |
|       |                                        |     |
|       |  [Company Name]                        |     |
|       |  [Industry]                            |     |
|       |  [Company Size]                        |     |
|       |  [Contact Person Name]                 |     |
|       |  [Contact Email]                       |     |
|       |  [Password]                            |     |
|       |  [Confirm Password]                    |     |
|       |                                        |     |
|       |  [Terms and Conditions Checkbox]       |     |
|       |                                        |     |
|       |  [CREATE ACCOUNT]                      |     |
|       |                                        |     |
|       |  ------------- OR ---------------      |     |
|       |                                        |     |
|       |  [Sign up with Google]                 |     |
|       |  [Sign up with LinkedIn]               |     |
|       |                                        |     |
|       |  Already have an account? Sign In      |     |
|       +----------------------------------------+     |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### Graduate Dashboard
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
| [Logo]              [Search]   [Messages] [Profile]  |
+------------------------------------------------------+
|                                                      |
| +--------+                                           |
| |        |  Welcome, [Name]!                         |
| | Profile|                                           |
| | Picture|  Profile Completion: [Progress Bar]       |
| |        |                                           |
| +--------+                                           |
|                                                      |
+------------------------------------------------------+
|                                                      |
| +-------------+  +-------------+  +-------------+    |
| | Job         |  | Applications|  | Direct      |    |
| | Search      |  | Tracker     |  | Messages    |    |
| +-------------+  +-------------+  +-------------+    |
|                                                      |
| +-------------+  +-------------+  +-------------+    |
| | CV          |  | Profile     |  | Career      |    |
| | Builder     |  | Management  |  | Resources   |    |
| +-------------+  +-------------+  +-------------+    |
|                                                      |
+------------------------------------------------------+
|                                                      |
| RECOMMENDED JOBS                                     |
| +--------------------------------------------------+ |
| | Job Title - Company                              | |
| | Location | Job Type | Match Score: 85%           | |
| | [VIEW] [APPLY NOW]                               | |
| +--------------------------------------------------+ |
| | Job Title - Company                              | |
| | Location | Job Type | Match Score: 78%           | |
| | [VIEW] [APPLY NOW]                               | |
| +--------------------------------------------------+ |
|                                                      |
+------------------------------------------------------+
|                                                      |
| RECENT ACTIVITY                                      |
| • Application to [Job] was viewed                    |
| • New message from [Employer]                        |
| • [Job] saved to favorites                           |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### CV Creation
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
+------------------------------------------------------+
|                                                      |
| CV BUILDER                                           |
| +--------------------------------------------------+ |
| |                                                  | |
| | [Upload Existing CV] or [Build from Scratch]     | |
| |                                                  | |
| +--------------------------------------------------+ |
|                                                      |
| PERSONAL INFORMATION                                 |
| +--------------------------------------------------+ |
| | [Full Name]                                      | |
| | [Email]                                          | |
| | [Phone]                                          | |
| | [Location]                                       | |
| | [LinkedIn]                                       | |
| +--------------------------------------------------+ |
|                                                      |
| EDUCATION                                            |
| +--------------------------------------------------+ |
| | [+ Add Education]                                | |
| | • Institution:                                   | |
| | • Degree:                                        | |
| | • Field of Study:                                | |
| | • Graduation Date:                               | |
| | • Achievements:                                  | |
| +--------------------------------------------------+ |
|                                                      |
| EXPERIENCE                                           |
| +--------------------------------------------------+ |
| | [+ Add Experience]                               | |
| | • Company:                                       | |
| | • Position:                                      | |
| | • Duration:                                      | |
| | • Responsibilities:                              | |
| +--------------------------------------------------+ |
|                                                      |
| SKILLS                                               |
| +--------------------------------------------------+ |
| | [+ Add Skills]                                   | |
| | [Skill Tags with Proficiency Levels]             | |
| +--------------------------------------------------+ |
|                                                      |
| [SAVE AS DRAFT] [PREVIEW] [FINALIZE CV]              |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### Profile Creation
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
+------------------------------------------------------+
|                                                      |
| PROFILE CREATION                                     |
|                                                      |
| [Upload Profile Picture]                             |
|                                                      |
| BASIC INFORMATION                                    |
| +--------------------------------------------------+ |
| | [Full Name]                                      | |
| | [Headline/Title]                                 | |
| | [Summary/Bio]                                    | |
| +--------------------------------------------------+ |
|                                                      |
| EDUCATION & CERTIFICATIONS                           |
| +--------------------------------------------------+ |
| | [Education details from CV]                      | |
| | [+ Add More]                                     | |
| +--------------------------------------------------+ |
|                                                      |
| WORK EXPERIENCE                                      |
| +--------------------------------------------------+ |
| | [Experience details from CV]                     | |
| | [+ Add More]                                     | |
| +--------------------------------------------------+ |
|                                                      |
| SKILLS & EXPERTISE                                   |
| +--------------------------------------------------+ |
| | [Skills from CV]                                 | |
| | [+ Add More]                                     | |
| +--------------------------------------------------+ |
|                                                      |
| PREFERENCES                                          |
| +--------------------------------------------------+ |
| | Job Types: [Checkboxes]                          | |
| | Industry Preferences: [Multi-select]             | |
| | Location Preferences: [Multi-select]             | |
| | Salary Expectations: [Range slider]              | |
| +--------------------------------------------------+ |
|                                                      |
| PRIVACY SETTINGS                                     |
| +--------------------------------------------------+ |
| | Profile Visibility: [Public/Private/Selective]   | |
| | Contact Preferences: [Options]                   | |
| +--------------------------------------------------+ |
|                                                      |
| [SAVE PROFILE]                                       |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### Job Search
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
+------------------------------------------------------+
|                                                      |
| JOB SEARCH                                           |
|                                                      |
| +--------------------------------------------------+ |
| | [Search Keywords]  [Location]  [SEARCH]          | |
| +--------------------------------------------------+ |
|                                                      |
| FILTERS                                              |
| +---------------+                                    |
| | Job Type      |                                    |
| | Industry      |                                    |
| | Experience    |                                    |
| | Posted Date   |                                    |
| | Salary Range  |                                    |
| |               |                                    |
| | [APPLY]       |                                    |
| +---------------+                                    |
|                                                      |
| RESULTS (125 jobs found)                             |
|                                                      |
| +--------------------------------------------------+ |
| | Job Title                                        | |
| | Company Name | Location                          | |
| | Match Score: 92% | Posted: 2 days ago            | |
| |                                                  | |
| | • Requirement highlights                         | |
| | • Salary range                                   | |
| |                                                  | |
| | [SAVE] [APPLY]                                   | |
| +--------------------------------------------------+ |
|                                                      |
| +--------------------------------------------------+ |
| | Job Title                                        | |
| | Company Name | Location                          | |
| | Match Score: 85% | Posted: 5 days ago            | |
| |                                                  | |
| | • Requirement highlights                         | |
| | • Salary range                                   | |
| |                                                  | |
| | [SAVE] [APPLY]                                   | |
| +--------------------------------------------------+ |
|                                                      |
| [LOAD MORE]                                          |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### Job Application
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
+------------------------------------------------------+
|                                                      |
| JOB APPLICATION                                      |
|                                                      |
| +--------------------------------------------------+ |
| | Job Title                                        | |
| | Company Name | Location                          | |
| | Salary Range | Job Type                          | |
| +--------------------------------------------------+ |
|                                                      |
| APPLICATION FORM                                     |
|                                                      |
| PERSONAL INFORMATION                                 |
| +--------------------------------------------------+ |
| | [Pre-filled from Profile]                        | |
| +--------------------------------------------------+ |
|                                                      |
| RESUME/CV                                            |
| +--------------------------------------------------+ |
| | [Use Existing CV] or [Upload Different CV]       | |
| +--------------------------------------------------+ |
|                                                      |
| COVER LETTER                                         |
| +--------------------------------------------------+ |
| | [Use Template] or [Write Custom]                 | |
| | [Cover Letter Text Editor]                       | |
| +--------------------------------------------------+ |
|                                                      |
| ADDITIONAL QUESTIONS                                 |
| +--------------------------------------------------+ |
| | [Company-specific questions]                     | |
| +--------------------------------------------------+ |
|                                                      |
| AVAILABILITY                                         |
| +--------------------------------------------------+ |
| | [Start Date]                                     | |
| | [Interview Availability]                         | |
| +--------------------------------------------------+ |
|                                                      |
| [SAVE AS DRAFT] [SUBMIT APPLICATION]                 |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### Direct Message (Graduate View)
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
+------------------------------------------------------+
|                                                      |
| MESSAGES                                             |
|                                                      |
| +--------------+-------------------------------+     |
| | CONVERSATIONS|                               |     |
| |              |                               |     |
| | Company A    |  [Company Name]               |     |
| | Company B    |                               |     |
| | Company C    |  [Date/Time]                  |     |
| |              |                               |     |
| |              |  +-------------------------+  |     |
| |              |  | Message from employer   |  |     |
| |              |  +-------------------------+  |     |
| |              |                               |     |
| |              |  +-------------------------+  |     |
| |              |  | Your reply              |  |     |
| |              |  +-------------------------+  |     |
| |              |                               |     |
| |              |  +-------------------------+  |     |
| |              |  | Message from employer   |  |     |
| |              |  +-------------------------+  |     |
| |              |                               |     |
| |              |                               |     |
| |              |                               |     |
| |              |  +-------------------------+  |     |
| |              |  | [Message input]     [↑] |  |     |
| |              |  +-------------------------+  |     |
| +--------------+-------------------------------+     |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### Application Tracker
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
+------------------------------------------------------+
|                                                      |
| APPLICATION TRACKER                                  |
|                                                      |
| FILTERS: [All] [Submitted] [In Review] [Interview]   |
|          [Offer] [Rejected]                          |
|                                                      |
| +--------------------------------------------------+ |
| | Job Title - Company                              | |
| | Applied: Jan 15, 2023                            | |
| | Status: In Review                                | |
| |                                                  | |
| | [VIEW JOB] [VIEW APPLICATION] [MESSAGE]          | |
| +--------------------------------------------------+ |
|                                                      |
| +--------------------------------------------------+ |
| | Job Title - Company                              | |
| | Applied: Jan 10, 2023                            | |
| | Status: Interview Scheduled                      | |
| |                                                  | |
| | Interview: Jan 25, 2023 at 2:00 PM               | |
| | [PREPARE] [RESCHEDULE] [MESSAGE]                 | |
| +--------------------------------------------------+ |
|                                                      |
| +--------------------------------------------------+ |
| | Job Title - Company                              | |
| | Applied: Dec 5, 2022                             | |
| | Status: Rejected                                 | |
| |                                                  | |
| | [VIEW FEEDBACK] [FIND SIMILAR JOBS]              | |
| +--------------------------------------------------+ |
|                                                      |
| APPLICATION STATISTICS                               |
| +--------+ +--------+ +--------+ +--------+         |
| | 15     | | 3      | | 2      | | 1      |         |
| | Applied| | In     | | Inter- | | Offers |         |
| |        | | Review | | view   | |        |         |
| +--------+ +--------+ +--------+ +--------+         |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### Employer Dashboard
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
| [Logo]              [Search]   [Messages] [Profile]  |
+------------------------------------------------------+
|                                                      |
| +--------+                                           |
| |        |  Welcome, [Company Name]!                 |
| | Company|                                           |
| | Logo   |  Subscription: [Plan Type]                |
| |        |  [UPGRADE PLAN]                           |
| +--------+                                           |
|                                                      |
+------------------------------------------------------+
|                                                      |
| +-------------+  +-------------+  +-------------+    |
| | Post        |  | Candidate   |  | Job         |    |
| | a Job       |  | Search      |  | Applications|    |
| +-------------+  +-------------+  +-------------+    |
|                                                      |
| +-------------+  +-------------+  +-------------+    |
| | Company     |  | Analytics   |  | Direct      |    |
| | Profile     |  | Dashboard   |  | Messages    |    |
| +-------------+  +-------------+  +-------------+    |
|                                                      |
+------------------------------------------------------+
|                                                      |
| ACTIVE JOB POSTINGS                                  |
| +--------------------------------------------------+ |
| | Job Title                                        | |
| | Posted: 5 days ago | Applications: 27            | |
| | [VIEW] [EDIT] [PAUSE]                            | |
| +--------------------------------------------------+ |
| | Job Title                                        | |
| | Posted: 12 days ago | Applications: 43           | |
| | [VIEW] [EDIT] [PAUSE]                            | |
| +--------------------------------------------------+ |
|                                                      |
+------------------------------------------------------+
|                                                      |
| TOP CANDIDATES                                       |
| +--------------------------------------------------+ |
| | [Candidate Name] - [Qualification]               | |
| | Match Score: 95% for [Job Title]                 | |
| | [VIEW PROFILE] [MESSAGE] [SHORTLIST]             | |
| +--------------------------------------------------+ |
| | [Candidate Name] - [Qualification]               | |
| | Match Score: 92% for [Job Title]                 | |
| | [VIEW PROFILE] [MESSAGE] [SHORTLIST]             | |
| +--------------------------------------------------+ |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### Profile Management (Employer)
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
+------------------------------------------------------+
|                                                      |
| COMPANY PROFILE MANAGEMENT                           |
|                                                      |
| [Upload/Change Company Logo]                         |
|                                                      |
| BASIC INFORMATION                                    |
| +--------------------------------------------------+ |
| | [Company Name]                                   | |
| | [Industry]                                       | |
| | [Company Size]                                   | |
| | [Founded Year]                                   | |
| | [Website]                                        | |
| | [Headquarters Location]                          | |
| +--------------------------------------------------+ |
|                                                      |
| COMPANY DESCRIPTION                                  |
| +--------------------------------------------------+ |
| | [Rich Text Editor for Company Description]       | |
| +--------------------------------------------------+ |
|                                                      |
| COMPANY CULTURE                                      |
| +--------------------------------------------------+ |
| | [Work Environment]                               | |
| | [Values]                                         | |
| | [Benefits & Perks]                               | |
| +--------------------------------------------------+ |
|                                                      |
| MEDIA                                                |
| +--------------------------------------------------+ |
| | [Upload Photos] [Add Video Links]                | |
| +--------------------------------------------------+ |
|                                                      |
| SOCIAL MEDIA                                         |
| +--------------------------------------------------+ |
| | [LinkedIn] [Twitter] [Facebook] [Instagram]      | |
| +--------------------------------------------------+ |
|                                                      |
| CONTACT INFORMATION                                  |
| +--------------------------------------------------+ |
| | [Primary Contact Name]                           | |
| | [Contact Email]                                  | |
| | [Contact Phone]                                  | |
| +--------------------------------------------------+ |
|                                                      |
| [SAVE CHANGES] [PREVIEW PROFILE]                     |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### Candidate Search
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
+------------------------------------------------------+
|                                                      |
| CANDIDATE SEARCH                                     |
|                                                      |
| +--------------------------------------------------+ |
| | [Skills/Keywords]  [Location]  [SEARCH]          | |
| +--------------------------------------------------+ |
|                                                      |
| FILTERS                                              |
| +---------------+                                    |
| | Qualification |                                    |
| | Experience    |                                    |
| | Field of Study|                                    |
| | Availability  |                                    |
| | Graduation    |                                    |
| | Year          |                                    |
| |               |                                    |
| | [APPLY]       |                                    |
| +---------------+                                    |
|                                                      |
| RESULTS (45 candidates found)                        |
|                                                      |
| +--------------------------------------------------+ |
| | [Candidate Name]                                 | |
| | [Degree] at [University] | Graduated: 2023       | |
| | Match Score: 92%                                 | |
| |                                                  | |
| | • Key skills highlight                           | |
| | • Brief experience summary                       | |
| |                                                  | |
| | [VIEW PROFILE] [BOOKMARK] [MESSAGE]              | |
| +--------------------------------------------------+ |
|                                                      |
| +--------------------------------------------------+ |
| | [Candidate Name]                                 | |
| | [Degree] at [University] | Graduated: 2022       | |
| | Match Score: 87%                                 | |
| |                                                  | |
| | • Key skills highlight                           | |
| | • Brief experience summary                       | |
| |                                                  | |
| | [VIEW PROFILE] [BOOKMARK] [MESSAGE]              | |
| +--------------------------------------------------+ |
|                                                      |
| [LOAD MORE]                                          |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### Candidate View
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
+------------------------------------------------------+
|                                                      |
| CANDIDATE PROFILE                                    |
|                                                      |
| +--------+                                           |
| |        |  [Candidate Name]                         |
| | Profile|  [Current/Desired Position]               |
| | Picture|  [Location]                               |
| |        |                                           |
| +--------+  Match Score: 94% for [Job Title]         |
|                                                      |
| [MESSAGE] [BOOKMARK] [DOWNLOAD RESUME]               |
|                                                      |
| ABOUT                                                |
| +--------------------------------------------------+ |
| | [Candidate's self-description/summary]           | |
| +--------------------------------------------------+ |
|                                                      |
| EDUCATION                                            |
| +--------------------------------------------------+ |
| | [University Name]                                | |
| | [Degree and Field of Study]                      | |
| | [Graduation Date]                                | |
| | [Achievements/GPA]                               | |
| +--------------------------------------------------+ |
|                                                      |
| EXPERIENCE                                           |
| +--------------------------------------------------+ |
| | [Position] at [Company]                          | |
| | [Duration]                                       | |
| | [Responsibilities and Achievements]              | |
| +--------------------------------------------------+ |
|                                                      |
| SKILLS                                               |
| +--------------------------------------------------+ |
| | [Skill Bars/Tags with Proficiency Levels]        | |
| +--------------------------------------------------+ |
|                                                      |
| CERTIFICATIONS                                       |
| +--------------------------------------------------+ |
| | [Certification Name]                             | |
| | [Issuing Organization]                           | |
| | [Date]                                           | |
| +--------------------------------------------------+ |
|                                                      |
| PORTFOLIO/PROJECTS                                   |
| +--------------------------------------------------+ |
| | [Project Name]                                   | |
| | [Description]                                    | |
| | [Link]                                           | |
| +--------------------------------------------------+ |
|                                                      |
| [INVITE TO APPLY] [SCHEDULE INTERVIEW]               |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### Job Posting
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
+------------------------------------------------------+
|                                                      |
| POST A JOB                                           |
|                                                      |
| JOB DETAILS                                          |
| +--------------------------------------------------+ |
| | [Job Title]                                      | |
| | [Department]                                     | |
| | [Location] [Remote Option Checkbox]              | |
| | [Job Type] (Full-time, Part-time, Contract)      | |
| | [Salary Range] [Negotiable Checkbox]             | |
| +--------------------------------------------------+ |
|                                                      |
| JOB DESCRIPTION                                      |
| +--------------------------------------------------+ |
| | [Rich Text Editor]                               | |
| | • Overview                                       | |
| | • Responsibilities                               | |
| | • Requirements                                   | |
| | • Benefits                                       | |
| +--------------------------------------------------+ |
|                                                      |
| SKILLS & QUALIFICATIONS                              |
| +--------------------------------------------------+ |
| | [Required Skills] (Tags)                         | |
| | [Preferred Skills] (Tags)                        | |
| | [Minimum Education]                              | |
| | [Experience Level]                               | |
| +--------------------------------------------------+ |
|                                                      |
| APPLICATION SETTINGS                                 |
| +--------------------------------------------------+ |
| | [Application Deadline]                           | |
| | [Screening Questions] (Add custom questions)     | |
| | [Notification Preferences]                       | |
| +--------------------------------------------------+ |
|                                                      |
| [SAVE AS DRAFT] [PREVIEW] [POST JOB]                 |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### Analytics Board
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
+------------------------------------------------------+
|                                                      |
| ANALYTICS DASHBOARD                                  |
|                                                      |
| DATE RANGE: [Last 7 days ▼] [CUSTOM] [EXPORT]        |
|                                                      |
| OVERVIEW METRICS                                     |
| +--------+ +--------+ +--------+ +--------+         |
| | 175    | | 42     | | 12     | | 3      |         |
| | Total  | | New    | | Inter- | | Hires  |         |
| | Applic-| | Applic-| | views  | |        |         |
| | ations | | ations | |        | |        |         |
| +--------+ +--------+ +--------+ +--------+         |
|                                                      |
| APPLICATION TRENDS                                   |
| +--------------------------------------------------+ |
| | [Line chart showing application volume over time]| |
| +--------------------------------------------------+ |
|                                                      |
| TOP PERFORMING JOB POSTINGS                          |
| +--------------------------------------------------+ |
| | [Bar chart comparing applications by job posting]| |
| +--------------------------------------------------+ |
|                                                      |
| APPLICANT SOURCES                                    |
| +--------------------------------------------------+ |
| | [Pie chart showing where applicants come from]   | |
| +--------------------------------------------------+ |
|                                                      |
| CANDIDATE QUALIFICATIONS                             |
| +--------------------------------------------------+ |
| | [Visualization of candidate education/experience]| |
| +--------------------------------------------------+ |
|                                                      |
| RECRUITMENT FUNNEL                                   |
| +--------------------------------------------------+ |
| | [Funnel chart: Views → Applications → Interviews | |
| | → Offers → Hires]                                | |
| +--------------------------------------------------+ |
|                                                      |
| TIME-TO-HIRE METRICS                                 |
| +--------------------------------------------------+ |
| | [Average days from posting to hiring, by role]   | |
| +--------------------------------------------------+ |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

### Job Application Inbox
```
+------------------------------------------------------+
|                    HEADER/NAVBAR                     |
+------------------------------------------------------+
|                                                      |
| JOB APPLICATION INBOX                                |
|                                                      |
| FILTER BY JOB: [All Jobs ▼] [Status ▼] [SEARCH]      |
|                                                      |
| +---------------+-------------------------------+     |
| | JOB LISTINGS  |                               |     |
| |               |  [Selected Job Title]         |     |
| | • Job Title A |                               |     |
| |   (15 apps)   |  APPLICANTS (12)              |     |
| |               |                               |     |
| | • Job Title B |  SORT BY: [Date ▼]            |     |
| |   (12 apps)   |                               |     |
| |               |  +-------------------------+  |     |
| | • Job Title C |  | [Candidate Name]        |  |     |
| |   (8 apps)    |  | [Qualification]         |  |     |
| |               |  | Applied: Jan 15, 2023   |  |     |
| |               |  | Match Score: 93%        |  |     |
| |               |  |                         |  |     |
| |               |  | Status: [Dropdown ▼]    |  |     |
| |               |  | [VIEW] [MESSAGE]        |  |     |
| |               |  +-------------------------+  |     |
| |               |                               |     |
| |               |  +-------------------------+  |     |
| |               |  | [Candidate Name]        |  |     |
| |               |  | [Qualification]         |  |     |
| |               |  | Applied: Jan 14, 2023   |  |     |
| |               |  | Match Score: 87%        |  |     |
| |               |  |                         |  |     |
| |               |  | Status: [Dropdown ▼]    |  |     |
| |               |  | [VIEW] [MESSAGE]        |  |     |
| |               |  +-------------------------+  |     |
| +---------------+-------------------------------+     |
|                                                      |
+------------------------------------------------------+
|                      FOOTER                          |
+------------------------------------------------------+
```

## Predictive Location Features

The application will use geolocation services to:

1. Detect the user's location and prefill location fields
2. Suggest nearby jobs for graduates
3. Suggest nearby candidates for employers
4. Show distance/commute information between candidate location and job location
5. Filter search results by distance radius
6. Show DUT campus locations on maps

## DUT Specific Features

1. Showcase DUT branding and colors throughout the interface
2. Include DUT-specific fields in graduate profiles:
   - Faculty/Department
   - Student Number
   - Graduation Year
   - Academic Achievements
3. Feature DUT industry partners in employer recommendations
4. Include DUT career events calendar
5. Integrate with DUT academic verification system
6. Feature success stories of DUT graduates
7. Provide DUT-specific career resources

This document provides a comprehensive overview of the ConnectMatch application's user interface and screen flow. These wireframes will guide the development process to ensure a consistent and user-friendly experience for both graduates and employers.
