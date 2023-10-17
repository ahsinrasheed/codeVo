"use client";
import React from "react";
import Button from "@/shared/Button/index";

const IdeaArticles = ({ srNo, details }) => {
  return (
    <>
      <div className="p-8 ">
        <h2 className="m-2">{srNo}</h2>
        <div className=" absolute h-1 rounded-lg w-8 bg-blue-500	"> </div>
        <div className="m-2 h-1 rounded-lg bg-slate-300	"> </div>
        <p className=" md:max-w-lg sm: max-w">{details}</p>
        <Button text="Explore More" />
      </div>
    </>
  );
};

export default IdeaArticles;
