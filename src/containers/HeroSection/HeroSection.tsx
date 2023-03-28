import { FeedbackCarousel, HeroTagline } from "@/components";
import { feedbacks } from "@/data/feedbacks";
import { twcx } from "@/shared/utils";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      className={twcx("min-h-[calc(100vh-96px)] grid gap-8 grid-cols-2")}
    >
      <div className={twcx("flex flex-col gap-8")}>
        <HeroTagline />
        <FeedbackCarousel
          className={twcx("ml-6")}
          feedbacks={feedbacks}
          autoplay
        />
      </div>
      <div className={twcx("relative select-none")}>
        <Image
          className={twcx("object-contain")}
          alt="hero"
          src="/images/hero.webp"
          fill
        />
      </div>
    </section>
  );
};
