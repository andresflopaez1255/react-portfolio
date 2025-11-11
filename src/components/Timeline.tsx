import "@fortawesome/free-regular-svg-icons";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import { Chrono } from "react-chrono";
import useTimelineHook from "../hooks/useTimelineHook";

function Timeline() {
  const {data} = useTimelineHook()
  
console.log(data)
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <Chrono
         
          mode="VERTICAL_ALTERNATING"
          enableDarkToggle
          disableToolbar
          enableOutline
          hasNestedItems	
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
         
          items={data}
        />
      </div>
    </div>
  );
}

export default Timeline;
