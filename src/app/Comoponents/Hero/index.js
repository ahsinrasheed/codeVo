import styles from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <div
        className={`container  p-5 text-center text-white  ${styles.mainLayout}`}
      >
        <div className="p-20">
          <h1 className="text-5xl ">
            Your Gateway to <br />
            Digital Discoveries
          </h1>
          <p className="p-4 text-center  ">
            Building custom software solutions that caters for automation of
            your business processes and improve efficiency.
          </p>
          <button className="mt-3 border border-white-500 p-3">
            Book a Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
