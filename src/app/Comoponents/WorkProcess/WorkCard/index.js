"use client";
import styles from "./workCard.module.css";

const WorkCard = ({ srNo, title, details }) => {
  return (
    <div className="p-4">
      <div
        className={`p-4 flex justify-center	items-center  flex-col	text-white ${styles.innerLayout} `}
      >
        <span className="p-2">{srNo}</span>
        <h4 className="p-2 text-xl">{title}</h4>
        <p className="w-52 text-xs text-center	">{details}</p>
      </div>
    </div>
  );
};

export default WorkCard;
