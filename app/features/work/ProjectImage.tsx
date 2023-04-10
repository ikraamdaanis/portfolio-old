import Image from "next/image";
import { MutableRefObject } from "react";

interface Props {
  image1: string;
  image2: string;
  imageCover1: MutableRefObject<HTMLDivElement>;
  imageCover2: MutableRefObject<HTMLDivElement>;
}

/** Images for the Projects */
export const ProjectImage = ({
  image1,
  image2,
  imageCover1,
  imageCover2
}: Props) => {
  return (
    <>
      <div className="project-image-mobile-container cover-top">
        <Image
          src={image1}
          alt="Screenshot of the project"
          width={window.innerWidth}
          height={((window.innerWidth * 0.85) / 16) * 10}
        />
        <div
          className="project-image-mobile-container-cover "
          ref={imageCover1}
        ></div>
      </div>
      <div className="project-image-mobile-container">
        <Image
          src={image2}
          alt="Screenshot of the project"
          width={window.innerWidth}
          height={((window.innerWidth * 0.85) / 16) * 10}
        />
        <div
          className="project-image-mobile-container-cover"
          ref={imageCover2}
        ></div>
      </div>
    </>
  );
};