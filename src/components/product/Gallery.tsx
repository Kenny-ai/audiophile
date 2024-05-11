/* eslint-disable @next/next/no-img-element */
import { Image } from "@/utils/types";
import React from "react";

interface Props {
  gallery: any;
}

const Gallery = ({ gallery }: Props) => {
  console.log(gallery);
  return (
    <div className="flex flex-col gap-8 parent-grid">
      {gallery.map((image) => (
        <div className={`image-grid-${gallery.indexOf(image)}`} key={image._id}>
          <img
            src={image.mobile}
            alt="best-gear"
            className="rounded-lg w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
