import "@fortawesome/free-regular-svg-icons";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import { Chrono } from "react-chrono";

function Timeline() {
  const items = [
    {
      title: "03/2022 - 12/2023",
      cardTitle: "SoftwareOne, Remoto",

      cardSubtitle: "React Native Developer / Flutter Developer",
      cardDetailedText:
        "I  worked on national and international projects using React Native and Flutter to build high-performance mobile apps. I implemented Redux and Flutter Bloc for efficient state management and followed SOLID principles to ensure clean, scalable, and maintainable code.",
    },
    {
      title: "09/2021- 11/2021",
      cardTitle: "Programate S.A, Remoto",

      cardSubtitle: "React Native Developer",
      cardDetailedText:
        "Mobile App Development: Creating high-quality mobile apps tailored to various platforms and devices Client and Design Requirements: Implementing customized solutions based on client needs and design guidelines, ensuring customer satisfaction and aesthetic consistency. App Maintenance and Optimization: Continuously improving and maintaining mobile apps for optimal performance and bug fixes. Client Requirements Analysis: Thorough evaluation and analysis of client needs to develop effective solutions aligned with their goals.",
    },
    {
      title: "12/2020- 08/2021",
      cardTitle: "Systemico, Remoto",

      cardSubtitle: "React Native Developer ",
      cardDetailedText:
        "Reusable and Custom Component Development: Created flexible, reusable components for mobile apps, ensuring efficiency across projects. Collaboration with Design and UX Teams: Worked closely with design and UX teams to implement best practices, ensuring an exceptional user experience.Mobile App Redesign: Redesigned existing mobile apps to enhance user experience and usability, incorporating innovations that raised quality standards.",
    },
    {
      title: "Currently",
      cardTitle: "Freelancer, Remoto",

      cardSubtitle: "React Native Developer",
      cardDetailedText:
        "E-commerce App Development: Contributed to the creation and maintenance of mobile e-commerce apps, enhancing user experience and optimizing platform performance. Medical Appointment Apps: Collaborated on developing apps for managing medical appointments, ensuring an intuitive interface and seamless integration with existing healthcare systems. Web and Mobile Layout: Designed responsive layouts for websites and mobile apps, ensuring an attractive appearance and consistent functionality across devices and resolutions.",
    },
  ];

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          enableDarkToggle
          disableToolbar
          enableOutline
          theme={{
            cardBgColor: "#212121",
            primary: "white",
            cardTitleColor: "#db3030",
            cardSubtitleColor: "white",
            cardDetailsColor: "white",
            titleColorActive	:"white",
            titleColor:"#db3030",
            secondary	:"red"
          }}
          items={items}
        />
      </div>
    </div>
  );
}

export default Timeline;
