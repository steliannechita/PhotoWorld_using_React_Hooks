import React, { useContext } from "react";
import { Context } from "../Context";
import Image from "../components/Image";
import { getClass } from "../utils";

function Photos() {
  const { allPhotos } = useContext(Context);
  const photos = allPhotos.map((image, index) => (
    <Image key={image.id} img={image} className={getClass(index)} />
  ));

  return <main className="photos">{photos}</main>;
}

export default Photos;
