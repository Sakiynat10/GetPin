import "./style.scss"

import AboutSection from '../../../components/about-section/index';
import Articles from "@/components/article-section";
import CarouselSection from "@/components/carousel";


export default function About() {
    return (
      <>
        <AboutSection/>
        <CarouselSection/>
        <Articles/>
      </>
    );
  }