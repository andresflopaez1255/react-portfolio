import "@fortawesome/free-regular-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import { useLanguage } from "../hooks/useContextLanguage";
import useTimelineHook from "../hooks/useTimelineHook";

function Timeline() {
   const {t,language} = useLanguage()
  const {data} = useTimelineHook(language)


  return (
    <div id="history">
      <div className="items-container">
        <h1>{t.history.title}</h1>
       {
        data.length >0 ?   <VerticalTimeline lineColor="#fff">
      {data.map((item, index) => (
      <VerticalTimelineElement
  key={index}
  date={item.title}
  contentStyle={{
    background: '#1c1c1e',
    color: '#f5f5f5', // <-- texto claro
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  }}
  contentArrowStyle={{ borderRight: '7px solid #1c1c1e' }}
  iconStyle={{ background: '#e11d48', color: '#fff' }}
>
  <h3 style={{ color: '#f87171', fontWeight: 700 }}>{item.cardTitle}</h3>
  <h4 style={{ color: '#d1d5db' }}>{item.cardSubtitle}</h4>
  <p style={{ color: '#e5e7eb' }}>{item.cardDetailedText}</p>
</VerticalTimelineElement>

      ))}
    </VerticalTimeline>: <div>cargando</div>
       }
      </div>
    </div>
  );
}

export default Timeline;
