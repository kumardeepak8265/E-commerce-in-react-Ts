import React, { useState, useEffect, ChangeEvent } from "react";

import { getProductList } from "./Api";
import { Link, useSearchParams } from "react-router-dom";
import { range } from "lodash";
import ProductList from "./ProductList";
import { ProductDataType } from "./Module";

function ProductPage() {
  const [productData, setproductData] = useState<ProductDataType>({});
  const [loading, setLoading] = useState(true);
  let [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  let { data, meta } = productData;

  let { search, page, sort } = params;
  let pagenumber: number = +page;
  search = search || "";
  pagenumber = +page || 1;
  sort = sort || "default";

  useEffect(() => {
    let sortBy: string | undefined;
    let sortType: string | undefined;
    if (sort == "title") {
      sortBy = "title";
    } else if (sort == "pricelowtohigh") {
      sortBy = "price";
    } else if (sort == "pricehightolow") {
      sortBy = "price";
      sortType = "desc";
    }

    getProductList({ sortBy, sortType, search, pagenumber }).then(function (
      body
    ) {
      setproductData(body);
      setLoading(false);
    });
  }, [search, sort, pagenumber]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    +setSearchParams(
      { ...params, search: event.target.value, page: "1" },
      { replace: false }
    );
  };
  const onhandleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams(
      { ...params, sort: event.target.value },
      { replace: false }
    );
  };

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="bg-white m-2 rounded-md sm:px-16 sm:py-10">
      <div className="sm:flex  justify-between my-4 bg-white pb-4 ">
        <input
          className=" rounded-md border grow m-2 hover:border border-indigo-500 p-2"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
        ></input>

        <select
          className=" rounded-md border border-gray-500 m-2"
          onChange={onhandleSelect}
          value={sort}
        >
          <option value="default"> Default Sort</option>
          <option value="title"> Sort by title</option>
          <option value="pricelowtohigh">Sort by price: low to high </option>
          <option value="pricehightolow">Sort by price: high to low</option>
        </select>
      </div>

      {data.length > 0 && <ProductList item={data}></ProductList>}
      {/* {data.length == 0 && (
        <div className="text-3xl text-red-500">not found</div>
      )} */}

      <div className="h-10"></div>
      {range(1, meta.last_page + 1).map((pageNo: number) => (
        <Link
          key={pageNo}
          to={"?" + new URLSearchParams({ ...params, page: pageNo.toString() })}
          className={
            " px-3  py-3 m-2  " +
            (pageNo == pagenumber ? "bg-red-500" : "bg-red-300")
          }
        >
          {pageNo}
        </Link>
      ))}
      <div className="h-10"></div>
    </div>
  );
}
export default ProductPage;
