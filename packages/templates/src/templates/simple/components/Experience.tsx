import ExperiencePart from "./ExperiencePart";

export const Experience = () => {
  return (
    <section>
      <h3 className="section-title">EXPERIENCE</h3>
      <ExperiencePart
        time="06/2023 - Current"
        position="FRONT-END DEVELOPER"
        company="Arades GmbH"
        location="Offenbach, Germany (Remote)"
        projects={[
          {
            description:
              "Led the development of a high-performance Front-End application for a business intelligence platform using React, Redux, and MUI.",
            listItems: [
              "Analyzed project requirements and selected the optimal technology stack for scalability and maintainability.",
              "Architected and built a reusable component library based on Material UI, reducing development time by 20%.",
              "Optimized UI performance through code refactoring and implemented responsive design to improve user experience on all devices.",
              "Contributed to the creation of Docker files and nginx configurations for streamlined deployment and server management.",
            ],
          },
          {
            description:
              "Enhanced a school event management application (ReactJS) for improved usability and performance.",
            listItems: [
              "Enhanced usability and performance by streamlining UI and layout, including mobile responsiveness.",
              "Reduced page load times by 25% through lazy loading and code splitting.",
            ],
          },
        ]}
      />
      <ExperiencePart
        time="05/2021 - 06/2023"
        position="FRONT-END DEVELOPER"
        company="AAICCO"
        location="Tehran, Iran"
        projects={[
          {
            description:
              "Spearheaded the development and maintenance of a state-of-the-art stock broker front-end for trading in Tehran Stock Exchange (TSE) utilizing Typescript, React, Redux, and a customized UI library (MUI and rollup).",
            listItems: [
              "Developed and maintained a stock broker front-end for trading in Tehran Stock Exchange (TSE), contributing to the company's growth",
              "Implemented an admin panel for managing the brokerage system, its users, and rules, ensuring efficient operation and compliance.",
              "Collaborated with the design team to create a user-friendly and functional interface, aligning with the company's branding and objectives.",
              "Developed a fast and reliable UI library upon MUI, doubling development speed in similar projects.",
            ],
          },
          {
            description:
              "Proactively maintained and enhanced an asset monitoring solution for Tehran Stock Exchange (TSE) assets.",
            listItems: [
              "Led a comprehensive performance optimization initiative, streamlining the front-end architecture and adhering to React and Redux best practices.",
              "Achieved a notable 30% improvement in website performance, enhancing the user experience and accelerating data analysis.",
              "Collaborated effectively with the back-end team to optimize API performance, resulting in a significant 5% speed increase and a substantial 10% reduction in bandwidth utilization.",
            ],
          },
        ]}
      />
      <ExperiencePart
        time="02/2019 - 05/2021"
        position="FRONT-END DEVELOPER"
        company="Freelancer"
        location="Tehran, Iran"
        projects={[
          {
            description: "",
            listItems: [
              "Collaborated on the development of a robust and secure admin panel for a DeFi application, leveraging Next.js, Tailwind, and ethersJS for seamless integration with smart contracts and APIs.",
              "Contributed to a team project to create a user-friendly and intuitive DeFi investment panel using Next.js, MUI, and ConnectWallet, facilitating seamless navigation and portfolio management.",
              "Created and deployed a progressive web app (PWA) for real-time cryptocurrency price tracking using React and the Coingecko API, ensuring responsive performance across all devices.",
              "Published an open-source React package on npmjs featuring a highly customizable expandable and accordion component with unique capabilities, enhancing the flexibility and usability of React applications.",
              "Designed and developed a comprehensive e-commerce website from scratch using React, Express, and MongoDB, encompassing product listings, shopping cart functionality, and secure payment gateways.",
              "Coded a feature-rich mobile application using React Native for managing roles and player interactions in a party game, successfully publishing it on the Google Play store.",
            ],
          },
        ]}
      />
    </section>
  );
};
