import { QuoteIcon } from "@/icons";
import { twcx } from "@/shared/utils";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Carousel, CarouselProps } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useRef } from "react";

type FeedbackCarouselProps = CarouselProps & {
  className?: string;
  feedbacks: Array<{
    avatar?: string;
    name?: string;
    major?: string;
    content?: string;
  }>;
};

export const FeedbackCarousel = ({
  className,
  feedbacks = [],
  ...rest
}: FeedbackCarouselProps) => {
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <div className={className}>
      <Carousel ref={carouselRef} {...rest}>
        {feedbacks.map((feedback) => (
          <div key={feedback.name} className={twcx("flex gap-8 font-sans")}>
            <div className={twcx("flex flex-col gap-2 items-center shrink-0")}>
              <Avatar
                className={twcx("border-4 drop-shadow-md border-white")}
                size={72}
                icon={<UserOutlined />}
                src={feedback.avatar}
              />
              <span className={twcx("font-semibold text-header")}>
                {feedback.name}
              </span>
            </div>

            <div className={twcx("grow flex flex-col")}>
              <QuoteIcon className={twcx("text-6xl")} />
              <p
                className={twcx(
                  "text-header font-semibold leading-8 text-base mb-4"
                )}
              >
                {feedback.content}
              </p>

              <span className={twcx("text-lg font-bold text-header")}>
                {feedback.major}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
      <div className={twcx("flex justify-end gap-5")}>
        <CaretLeftOutlined
          className={twcx(
            "cursor-pointer w-10 h-10 flex justify-center items-center shadow-lg rounded-full"
          )}
          onClick={carouselRef.current?.prev}
        />
        <CaretRightOutlined
          className={twcx(
            "cursor-pointer w-10 h-10 flex justify-center items-center shadow-lg rounded-full"
          )}
          onClick={carouselRef.current?.next}
        />
      </div>
    </div>
  );
};
