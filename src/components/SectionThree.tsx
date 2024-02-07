import React from "react";
import HomeSpeaker1 from "./HomeSpeaker1";
import HomeSpeaker2 from "./HomeSpeaker2";
import HomeEarphone from "./HomeEarphone";

const SectionThree = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-8 sm:px-12 md:px-32 xl:px-52">
      <HomeSpeaker1 />
      <HomeSpeaker2 />
      <HomeEarphone />
    </div>
  );
};

export default SectionThree;
