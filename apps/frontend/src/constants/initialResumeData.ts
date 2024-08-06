import { TemplatePropsInputs } from "@templates/index";

export const RESUME_VERSION = "1.0.0";

export const initialResumeData: TemplatePropsInputs = {
  personalInfo: {
    title: "Personal Details",
    data: {
      firstName: "John",
      lastName: "Smith",
      jobTitle: "Fullstack Developer",
      phone: "123456789",
      email: "john.smith@example.com",
      address: "1234 Elm St, San Francisco, CA 94102",
      links: ["https://linkedin.com/in/john-smith"],
    },
  },
  summary: {
    title: "Summary",
    data: "<p>Highly skilled <strong>Fullstack Developer </strong>with 5+ years of experience in developing and maintaining web applications using a wide range of frontend and backend technologies. Adept at problem-solving and delivering high-quality code in fast-paced environments. Strong background in collaborative team projects and agile methodologies.</p>",
  },
  educations: {
    title: "Educations",
    data: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Colorado",
        location: "Boulder, CO",
        endDate: new Date("2016-05-31T19:30:00.000Z"),
      },
    ],
  },
  experiences: {
    title: "Experiences",
    data: [
      {
        title: "Senior Fullstack Developer",
        company: "Tech Solutions Inc.",
        location: "San Francisco, CA",
        startDate: new Date("2020-04-30T19:30:00.000Z"),
        endDate: null,
        currentPosition: true,
        description:
          '<ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Lead the development of a highly scalable e-commerce platform, resulting in a 30% increase in user engagement and a 25% boost in sales.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Collaborated with the design team to create a responsive, mobile-first UI using React and Redux.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Implemented microservices architecture with Node.js and Docker, improving system performance and reliability.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Managed CI/CD pipelines with Jenkins, reducing deployment time by 40%.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Mentored junior developers and conducted code reviews to ensure adherence to best practices.</li></ol>',
      },
      {
        title: "Fullstack Developer",
        company: "Innovatech Labs",
        location: "Austin, TX",
        startDate: new Date("2017-03-31T19:30:00.000Z"),
        endDate: new Date("2020-04-30T19:30:00.000Z"),
        currentPosition: false,
        description:
          '<ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Developed and <em>maintained </em>web applications using Angular and Express.js, enhancing user experience and application performance.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Designed and implemented RESTful APIs, facilitating seamless communication between frontend and backend systems.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Optimized database queries and schema design in PostgreSQL, resulting in a 20% improvement in data retrieval times.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Participated in agile ceremonies, including sprint planning and retrospectives, to drive continuous improvement in the development process.</li></ol>',
      },
    ],
  },
  languages: {
    title: "Languages",
    data: [
      {
        language: "English",
        proficiency: "native",
        proficiencyText: "Native or Bilingual Proficiency",
      },
    ],
  },
  skills: {
    title: "Skills",
    data: [
      "HTML",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Docker",
      "AWS",
      "Git",
      "RESTful APIs",
      "WebSockets",
    ],
  },
};
