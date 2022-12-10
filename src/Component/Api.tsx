import axios from "axios";
import { ApiParamsProps, ProductList } from "./Module";

export function getProductDataList(id: number) {
  return axios
    .get("https://dummyjson.com/products/" + id)
    .then(function (response) {
      return response.data;
    });
}

export function getProductList({
  sortBy,
  sortType,
  search,
  pagenumber,
}: ProductList) {
  let params: ApiParamsProps = {
    sortBy: "",
    sortType: "",
    search: "",
    page: 1,
  };
  if (sortBy) {
    params.sortBy = sortBy;
  }
  if (sortType) {
    params.sortType = sortType;
  }
  if (search) {
    params.search = search;
  }
  if (pagenumber) {
    params.page = pagenumber;
  }

  return axios
    .get("https://myeasykart.codeyogi.io/products", {
      params,
    })
    .then(function (responce) {
      return responce.data;
    });
}

export function getProductByIds(ids: number[]) {
  const commaSepeartedids = ids.join();
  return axios
    .get("https://myeasykart.codeyogi.io/products/bulk", {
      params: {
        ids: commaSepeartedids,
      },
    })
    .then(function (responce) {
      return responce.data;
    });
}

export function saveCart(cart) {
  return axios.post(
    "https://myeasykart.codeyogi.io/carts",
    { data: cart },
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
}

export function getCart() {
  return axios
    .get("https://myeasykart.codeyogi.io/carts", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then(function (response) {
      return response.data;
    });
}
