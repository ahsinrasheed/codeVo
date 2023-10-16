"use Client";

import Image from "next/image";
import ClientImage from "@/assests/images/Client1.png";
import ClientImage1 from "@/assests/images/Client2.png";
import ClientImage2 from "@/assests/images/Client3.png";

const ClientCard = () => {
  return (
    <div className="p-4">
      <div className="flex flex-row  align-center gap-3">
        <Image src={ClientImage} alt="" />
        <h4 className="">Mila McSabbu</h4>
      </div>
      <p className="p-4">
        “An easy-to-use catalog manager that helps you keep your music metadata
        organized.”
      </p>
    </div>
  );
};

export default ClientCard;
