import React from "react";
import ItemProduct from "../Commom/itemProduct";

const FeedProduct = () => {
  return (
    <>
      <div className="bg-black text-white px-6">
        <div>
          <a href="/">
            <div className="flex gap-2 py-4 ">
              <span className="text-3xl font-bold  hover:text-gray-500">
                HOT
              </span>
              <div className="flex gap-1 text-gray-400 text-base">
                <span>Thêm</span>
                <i className="fa-solid fa-chevron-right mt-1"></i>
              </div>
            </div>
          </a>
        </div>
        <div className="flex gap-4 grid flex-wrap grid-cols-5">
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
        </div>
      </div>
    </>
  );
};

export default FeedProduct;
