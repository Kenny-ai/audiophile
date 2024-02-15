/* eslint-disable @next/next/no-img-element */
import { Image } from "@/utils/types";
import React from "react";

interface Props {
  gallery: Image[];
}

const Gallery = ({ gallery }: Props) => {
  return (
    <div className="flex flex-col gap-8 parent-grid">
      {gallery.map((image) => (
        <div
          className={`image-grid-${gallery.indexOf(image)}`}
          key={image.mobile}
        >
          <img
            src={image.mobile}
            alt="best-gear"
            className="rounded-lg md:hidde"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
