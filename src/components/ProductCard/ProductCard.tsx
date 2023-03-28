import { Tag } from "antd";
import Image from "next/image";

type ProductCardProps = {
  name: string;
  image: string;
  originalPrice: string;
  salePrice: string;
  className?: string;
};

export const ProductCard = ({
  image,
  name,
  originalPrice,
  salePrice,
  className,
}: ProductCardProps) => {
  return (
    <div className={className}>
      <div className="relative aspect-[2/3] rounded-3xl overflow-hidden mb-2">
        <Tag className="z-40 absolute bg-primary border-primary top-4 left-4 text-white font-semibold rounded-full px-3">
          Sale
        </Tag>
        <Image alt="image" src={image} fill />
      </div>
      <h3 className="text-2xl font-bold text-header font-sans">{name}</h3>
      <div className="flex items-end gap-1">
        <span className="text-xl font-semibold text-primary">
          {originalPrice}$
        </span>
        <span className="text-lg">/</span>
        <span className="font-semibold text-gray-400 font-sans">
          {salePrice}$
        </span>
      </div>
    </div>
  );
};
