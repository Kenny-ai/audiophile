/* eslint-disable @next/next/no-img-element */
import { GalleryType } from "@/utils/types";
import React from "react";

interface Props {
  gallery: GalleryType[];
}

const extractSlug = (imageString: string) => {
  const splitted = imageString.split("-");
  const result = [];
  for (let i = 1; i < splitted.length; i++) {
    if (i === splitted.length - 1) {
      result.push(splitted[i].split("/")[0]);
    } else {
      result.push(splitted[i]);
    }
  }
  return result.join("-");
};

const Gallery = ({ gallery }: Props) => {
  return (
    <div className="flex flex-col gap-8 parent-grid">
      {gallery.map((image) => (
        <div className={`image-grid-${gallery.indexOf(image)}`} key={image._id}>
          <img
            src={image.mobile}
            alt={extractSlug(image.mobile)}
            className="rounded-lg w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
