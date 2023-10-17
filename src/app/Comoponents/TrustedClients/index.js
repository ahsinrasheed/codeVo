"use Client";

import Image from "next/image";
import TrutedClientImage1 from "@/assests/images/TrustedClient1.png";
import TrutedClientImage2 from "@/assests/images/TrustedClient2.png";
import TrutedClientImage3 from "@/assests/images/TrustedClient3.png";
import TrutedClientImage4 from "@/assests/images/TrustedClient4.png";
import TrutedClientImage5 from "@/assests/images/TrustedClient5.png";
import TrutedClientImage6 from "@/assests/images/TrustedClient6.png";

const TrustedClients = () => {
  return (
    <div className="p-4 ">
      <h2 className="uppercase text-center font-medium">
        Some of Our Trusted Clients
      </h2>
      <div className="p-4 flex flex-wrap gap-8 justify-center">
        <Image src={TrutedClientImage1} alt="" />
        <Image src={TrutedClientImage2} alt="" />
        <Image src={TrutedClientImage3} alt="" />
        <Image src={TrutedClientImage4} alt="" />
        <Image src={TrutedClientImage5} alt="" />
        <Image src={TrutedClientImage6} alt="" />
      </div>
    </div>
  );
};

export default TrustedClients;
