export type ProductList = {
  sortBy?: string;
  sortType?: string;
  search: string;
  pagenumber: number;
};
// export type ParamsProps = {
//   search: string;
//   page: number;
//   sort: number;
// };
export type ProductDataType = {
  meta: { last_page: number };
  data: datatype;
};

export type datatype = [
  {
    brand: string;
    category: string;
    description: string;
    discount_percentage: number;
    id: number;
    images: string;
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
  }
];
// type ProductListProps={
//    title:string
//               Price={data.price}
//               img={data.thumbnail}
//               key={data.id}
//               id={data.id}
//               rating={data.rating}
//               category={data.category}
// }
export type ProductProps = {
  title: string;
  Price: number;
  img: string;
  key: number;
  id: number;
  rating: number;
  category: string;
};
export type itemType = {
  title: string;
  price: number;
  thumbnail: string;
  id: number;
  rating: number;
  category: string;
};

export type ProductListProps = {
  item: [
    {
      brand: string;
      category: string;
      description: string;
      discount_percentage: number;
      id: number;
      images: string;
      price: number;
      rating: number;
      stock: number;
      thumbnail: string;
      title: string;
    }
  ];
};
export type ApiParamsProps = {
  sortBy: string;
  sortType: string;
  search: string;
  page: number;
};
