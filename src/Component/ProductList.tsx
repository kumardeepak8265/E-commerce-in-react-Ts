import { FC } from "react";
import { itemType, ProductListProps } from "./Module";
import Product from "./Product";
const ProductList: FC<ProductListProps> = ({ item }) => {
  return (
    <div>
      <div className=" flex flex-wrap gap-2 justify-center md:grid grid-cols-3 ">
        {item.map(function (data: itemType) {
          return (
            <Product
              title={data.title}
              Price={data.price}
              img={data.thumbnail}
              key={data.id}
              id={data.id}
              rating={data.rating}
              category={data.category}
            ></Product>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
