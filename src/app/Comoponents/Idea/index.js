import React from "react";
import styles from "./idea.module.css";
import IdeaBlog from "./IdeaBlog";

const Idea = () => {
  return (
    <div className="styles.idea">
      <div
        className={`flex justify-center container mx-auto ${styles.mainLayout}`}
      >
        <h1 className="text-3xl md:text-5xl max-w-4xl text-center">
          We Specialize in
          <span className="text-blue-600"> Transforming Your Idea</span> or
          Business in The Current Digital Era.
        </h1>
      </div>
      <IdeaBlog />
    </div>
  );
};

export default Idea;
