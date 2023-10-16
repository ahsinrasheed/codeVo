import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div
      className={`container p-4 flex text-white justify-center ${styles.mainLayout}`}
    >
      <div className="p-4 md:max-w-3xl sm:w-full text-center">
        <h1 className="text-3xl md:text-5xl">
          Your Gateway to <br />
          Digital Discoveries
        </h1>
        <p className="p-2 md:p-4 text-center">
          Building custom software solutions that cater to the automation of
          your business processes and improve efficiency.
        </p>
        <button className="mt-3 border border-white-500 p-3">
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default Hero;
