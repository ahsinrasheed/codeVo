"use client";
import ClientCard from "./ClientCard";
import styles from "./client.module.css";
const Client = () => {
  return (
    <div className={`p-4 ${styles.mainLayOut}`}>
      <div className="p-4 flex flex-col items-center justify-center">
        <h1 className="p-4 text-black text-center md:text-4xl sm:text-3xl  md:max-w-lg	 sm:max-w">
          Our clients knows the value we provide
        </h1>
        <p className="p-4 text-black text-center md:text-lg sm:text-xs font-normal  md:max-w-lg	 sm:max-w">
          Our clients are very satisfied with our service which can be
          understood by looking at their feedback
        </p>
      </div>
      <ClientCard />
    </div>
  );
};

export default Client;
