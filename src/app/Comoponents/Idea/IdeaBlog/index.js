"use client";
import React from "react";

import IdeaArticles from "../IdeaArticles";
import ideaImage from "@/assests/images/idea1.png";
import ideaImage0 from "@/assests/images/ideaimage0.png";
import ideaImage1 from "@/assests/images/idea2.png";
import Image from "next/image";
import styles from "./ideablog.module.css";

function IdeaBlog() {
  return (
    <>
      <div className={`flex justify-center gap-6 ${styles.mainLayout} `}>
        <IdeaArticles
          srNo="01"
          details="ElevatingCustomer Relationship Managementto the Next Level. With powerful tools and insights, we help you streamline customer interactions, personalize engagements, and make data-driven decisions."
        />
        <div>
          <Image src={ideaImage} alt="" />
        </div>
      </div>
      <div className={`flex  gap-6 ${styles.mainLayout} `}>
        <div>
          <Image src={ideaImage} alt="" />
        </div>
        <IdeaArticles
          srNo="02"
          details="Your Path to Mobile Brilliance Harness the power of cutting-edge Mobile technology, stunning design, and seamless user experiences with our expert team. Join us on the journey to redefine the future of mobile"
        />
      </div>
      <div className={`flex  gap-6 ${styles.mainLayout} `}>
        <IdeaArticles
          srNo="03"
          details="Your Journey to Online Excellence Whether you're launching a new brand, upgrading your website, boost your online performance, we're here to guide you. Join us in shaping the future of your digital journey."
        />
        <div>
          <Image src={ideaImage1} alt="" />
        </div>
      </div>
    </>
  );
}

export default IdeaBlog;
