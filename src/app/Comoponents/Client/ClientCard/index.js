import Image from "next/image";
import React from "react";
import styles from "./clientCard.module.css";

const ClientCard = ({ title, imageUrl, details, backgroundColor }) => {
  return (
    <div
      className="p-4 max-w-sm"
      style={{
        background: backgroundColor,
      }}
    >
      <div
        className={`p-4 flex flex-row align-center  gap-3 ${styles.customStyle}`}
      >
        <Image src={imageUrl} alt="" width={100} height={100} />
        <h4 className="mt-8 text-lg font-bold text-center">{title}</h4>
      </div>
      <p className="p-4">{details}</p>
    </div>
  );
};

export default ClientCard;
