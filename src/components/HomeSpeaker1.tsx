/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";

const HomeSpeaker1 = () => {
  return (
    <div className="w-full md:h-[600px] bg-pattern bg-center bg-cover bg-clr-accent px-4 py-20 md:py-12 rounded-lg flex items-end">
      <div className="w-full flex flex-col md:flex-row items-center gap-20 text-center md:text-left">
        <div className="w-[200px] h-[240px] md:w-[50%] md:h-fit flex justify-center">
          <img
            src="/assets/home/tablet/image-speaker-zx9.png"
            alt="ZX9 speaker"
          />
        </div>

        <div className="max-w-[300px] flex flex-col items-center md:items-start gap-6">
          <h1 className="text-white text-4xl sm:text-6xl font-bold max-w-[25rem] w-full">
            ZX9 SPEAKER
          </h1>

          <p className="text-clr-light phones:w-[25rem] md:w-fit font-fw-bold opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <Button
            title="See product"
            className="bg-black text-white hover:bg-gray-900"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSpeaker1;
