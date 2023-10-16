"use client";
import Image from "next/image";
import WorkCard from "./WorkCard";

import workImageUp from "@/assests/images/arrowUp.svg";
import workImageDown from "@/assests/images/arrowDown.svg";
import styles from "./workProcess.module.css";

const WorkProcess = () => {
  return (
    <div className={`p-4 ${styles.mainLayout}`}>
      <div className="p-4 flex justify-center">
        <h2 className=" p-4 text-white text-center md:text-4xl sm:text-3xl  md:max-w-lg	 sm:max-w	">
          We always follow the standard work process
        </h2>
      </div>
      <p className="text-black text-center md:text-lg	sm:text-xs">
        We solve clients projects in a simple & efficient way
      </p>
      <div className="flex justify-center  ">
        <WorkCard
          srNo="1"
          title="Research"
          details="We do research before we start any projects"
        />
        <div style={{ margin: "auto" }}>
          <Image src={workImageUp} alt="" width={207} height={37} />
        </div>
        <WorkCard
          srNo="2"
          title="Designing"
          details="Designed according to client's requirements"
        />
        <div style={{ margin: "auto" }}>
          <Image src={workImageDown} alt="" width={207} height={37} />
        </div>
        <WorkCard
          srNo="3"
          title="Development"
          details="Designed according to client's requirements"
        />
        <div style={{ margin: "auto" }}>
          <Image src={workImageUp} alt="" width={207} height={37} />
        </div>
        <WorkCard
          srNo="4"
          title="Live Testing"
          details="After completing the work, live test is done"
        />
      </div>
    </div>
  );
};

export default WorkProcess;
