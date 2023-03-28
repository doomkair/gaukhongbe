import { twcx } from "@/shared/utils";
import { Button } from "@/uikit";
import { PlayCircleFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Carousel } from "antd";
import { range } from "lodash-es";
import Image from "next/image";
import { useState } from "react";

const CarouselWrapper = styled.div`
  .ant-carousel,
  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide div {
    height: 100%;
  }
`;

const NUM_SLIDE = 5;

export const CategorySection = () => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  console.log(
    "%c [ currentSlideIdx ]-23",
    "font-size:13px; background:pink; color:#bf2c9f;",
    currentSlideIdx
  );

  return (
    <div className={twcx("py-8 px-8 relative")}>
      <div
        className={twcx(
          "w-20 h-20 absolute bottom-1/3 -translate-x-1/2 translate-y-1/2 select-none"
        )}
      >
        <Image
          className="object-contain"
          src="/images/decor-bubble.webp"
          alt="bubble"
          fill
        />
      </div>

      <div
        className={twcx(
          "w-12 h-12 absolute top-1/3 -translate-y-1/2 right-2 select-none"
        )}
      >
        <Image
          className="object-contain"
          src="/images/decor-flower.webp"
          alt="bubble"
          fill
        />
      </div>

      <div
        className={twcx("bg-dark p-6 rounded-3xl grid grid-cols-10 text-white")}
      >
        <div className={twcx("col-span-3 p-4")}>
          <h3 className={twcx("text-4xl font-bold mb-4")}>Category</h3>
          <p className={twcx("leading-loose mb-8")}>
            Lorem ipsum dolor sit amet, consectetue elit roni dis Aenean comodo
            ligula eget dolor, aenean ena masa suma soc Loramet.
          </p>
          <Button className={twcx("flex items-center gap-2")}>
            <span>Shop Now</span>
            <PlayCircleFilled />
          </Button>
        </div>
        <div className={twcx("col-span-7 flex gap-6")}>
          <div className={twcx("w-1 h-full rounded-full shrink-0")} />
          <div className={twcx("w-[calc(100%-28px)]")}>
            <CarouselWrapper className={twcx("h-full")}>
              <Carousel
                dots={false}
                autoplay
                slidesToShow={3}
                beforeChange={(_, nextSlideIdx) =>
                  setCurrentSlideIdx(nextSlideIdx)
                }
              >
                {range(NUM_SLIDE).map((item, idx) => (
                  <div
                    key={item}
                    className={twcx("h-full flex flex-col p-8 relative", {
                      ["bg-gradient-to-b from-purple-700 to-primary rounded-lg"]:
                        idx === (currentSlideIdx + 1) % NUM_SLIDE,
                    })}
                  >
                    <div className={twcx("relative h-1/3 w-1/3")}>
                      <Image
                        className="object-contain"
                        alt="category"
                        src="/images/category.webp"
                        fill
                      />
                    </div>
                    <h3
                      className={twcx(
                        "font-bold my-3 text-3xl font-sans text-white"
                      )}
                    >
                      Test category {item}
                    </h3>

                    <button className="w-max text-white">Shop now</button>
                  </div>
                ))}
              </Carousel>
            </CarouselWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};
