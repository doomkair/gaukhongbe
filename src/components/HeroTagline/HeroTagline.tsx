import { twcx } from "@/shared/utils";
import { Button } from "@/uikit";
import { PlayCircleFilled } from "@ant-design/icons";

export const HeroTagline = () => {
  return (
    <div className={twcx("relative pt-16")}>
      <div
        className={twcx(
          "rounded-full bg-decor-pink h-52 w-52 top-0 absolute -z-10"
        )}
      />

      <h3 className={twcx("text-lg font-bold mb-4")}>
        Trendy Collection&apos;s
      </h3>
      <h1
        className={twcx(
          "text-[80px] font-extrabold text-header leading-snug mb-5"
        )}
      >
        Freshen Up Your Look Style
      </h1>
      <p className={twcx("text-gray-500 font-semibold mb-10")}>
        Lorem ipsum dolor sit amet, consectetue adipiscin elit roni dis Aenean
        comodo ligula eget dolor, aenean ena masa suma soc Lorem ipsum dolor sit
        amet.
      </p>
      <Button className={twcx("text-lg flex items-center gap-2")}>
        <span>Shop Now</span>
        <PlayCircleFilled />
      </Button>
    </div>
  );
};
