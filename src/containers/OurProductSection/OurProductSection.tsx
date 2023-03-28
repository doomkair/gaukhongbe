import { twcx } from "@/shared/utils";
import { Carousel } from "antd";
import { range } from "lodash-es";
import { faker } from "@faker-js/faker";
import { ProductCard } from "@/components";

const NUM_PRODUCT = 20;

export const OurProductSection = () => {
  return (
    <section className={twcx("py-10")}>
      <h2 className={twcx("text-center text-4xl font-bold text-header mb-4")}>
        Our Product
      </h2>
      <div className="text-center text-lg text-gray-500 mb-10">
        Our Colors Matching Your Different Moods.
      </div>

      <div>
        <Carousel slidesToShow={4}>
          {range(NUM_PRODUCT).map((product) => (
            <div key={product} className="flex justify-center">
              <ProductCard
                className="w-72"
                name={faker.commerce.productName()}
                image="https://picsum.photos/200/300"
                originalPrice={faker.commerce.price(100, 200)}
                salePrice={faker.commerce.price(50, 150)}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
