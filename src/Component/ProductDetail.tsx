import { ChangeEvent, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductDataList } from "./Api";
import { MdArrowBack } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import Loading from "./Loading";
type countProps = number | string;
type Productdata = {
  thumbnail: string;
  title: string;
  price: number;
  description: string;
  category: string;
};
const ProductDetail = () => {
  const [Product, setProduct] = useState<Productdata>();
  const [count, setCount] = useState<countProps>(0);
  const [loading, setLoading] = useState(true);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value);
  };
  const handleOnClick = () => {
    console.log("count,id", count, id);
    setCount("");
  };
  const params = useParams();
  const id: number = Number(params.id);
  const productToken = getProductDataList(id);
  useEffect(
    function () {
      setLoading(true);
      productToken.then(function (prodata) {
        setProduct(prodata);
        setLoading(false);
      });
    },
    [id]
  );
  if (loading) {
    return <Loading />;
  }

  return (
    <div className=" sm:flex gap-4 bg-white sm:p-10  m-2 sm:m-10">
      <Link to="/">
        <MdArrowBack />
      </Link>
      <div className="  "></div>
      <div className="sm:w-1/2 aspect-square">
        <img className="w-full h-full" src={Product.thumbnail} />
      </div>
      <div className="sm:w-1/2 flex flex-col p-4 ">
        <div className="space-y-4">
          <h1 className="text-4xl">{Product.title}</h1>
          <h1 className="text-3xl">$ {Product.price}</h1>
          <p className="text-gray-800"> {Product.description}</p>
          <h1 className="text-2xl"> {Product.category}</h1>
        </div>
        <div className="flex m-10">
          <input
            className="p-2 rounded-md w-10 m-2 border border-gray-800"
            type="number"
            onChange={handleOnChange}
            value={count}
          ></input>
          <button
            className="bg-indigo-600 p-2 text-white rounded-md m-2 "
            onClick={handleOnClick}
          >
            ADD TO CART
          </button>
        </div>
        <div className="flex justify-between items-center ">
          {id > 1 && (
            <Link
              className="p-2  text-2xl hover:text-4xl"
              to={"/ProductDetail/" + (id - 1)}
            >
              <BsArrowLeftShort />
            </Link>
          )}
          <Link
            className=" p-2 hover:text-4xl text-2xl"
            to={"/ProductDetail/" + (+id + 1)}
          >
            <BsArrowRightShort />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
