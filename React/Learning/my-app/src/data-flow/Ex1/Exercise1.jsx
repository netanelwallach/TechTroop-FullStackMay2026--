import { useState } from "react";
import styles from "./Exercise1.module.css";

function Exercise1() {
  const [gallery, setGallery] = useState({
    images: [
      "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
    currentImg: 0,
  });

  const shiftImageBack = () => {
    let tmpGallery = { ...gallery };
    const size = tmpGallery.images.length;
    tmpGallery.currentImg = (tmpGallery.currentImg + size - 1) % size;
    setGallery(tmpGallery);
  };

  const shiftImageForward = () => {
    let tmpGallery = { ...gallery };
    const size = tmpGallery.images.length;
    tmpGallery.currentImg = (tmpGallery.currentImg + 1) % size;
    setGallery(tmpGallery);
  };

  return (
    <div className={styles["gallery-container"]}>
      <div className={styles["image-viewer"]}>
        <img src={gallery.images[gallery.currentImg]} />
      </div>

      <div className={styles["navigation-controls"]}>
        <button
          type="button"
          className={styles["btn-prev"]}
          onClick={shiftImageBack}
        >
          Previous
        </button>
        <button
          type="button"
          className={styles["btn-next"]}
          onClick={shiftImageForward}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Exercise1;
