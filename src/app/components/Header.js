"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <main>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        dynamicHeight={false}
        interval={5000}
        swipeable
      >
        <div>
          <img
            src="https://wallpapers.com/images/featured/fundo-de-basquete-4k-6kdg85ia8zm4jpqc.jpg"
            alt="Banner 1"
            className={styles.carouselImage}
          />
        </div>
        <div>
          <img
            src="https://wallpapers.com/images/hd/4k-basketball-background-9gewjath3cxlyu3y.jpg"
            alt="Banner 2"
            className={styles.carouselImage}
          />
        </div>
      </Carousel>
    </main>
  );
}
