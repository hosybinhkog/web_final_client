import React from "react";

const ItemProduct = () => {
  return (
    <>
      <div className="">
        <div className="relative">
          <a href="/">
            <img
              className="object-cover rounded-lg relative"
              src="https://th.bing.com/th/id/R.20089d63e4b4b604b6470a5c14a5ca3c?rik=PLGgNhL5N3Merw&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f03%2fcute-Cute-Wallpapers.jpg&ehk=t10GTQLp3c83AcQJfFc42zDnhMImfaePLUkiFsqYtp0%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </a>
          <span className="rounded-lg px-1 bg-gray-800 absolute left-3 top-3">
            LMHT
          </span>
        </div>
        <div>
          <a
            href="/"
            className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1">
            <div className="">
              <img
                className="border rounded-full object-cover w-16"
                src="https://th.bing.com/th/id/R.20089d63e4b4b604b6470a5c14a5ca3c?rik=PLGgNhL5N3Merw&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f03%2fcute-Cute-Wallpapers.jpg&ehk=t10GTQLp3c83AcQJfFc42zDnhMImfaePLUkiFsqYtp0%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 text-white font-bold">
              <a href="/">
                {" "}
                <span className="hover:text-blue-700">uoc but tang qua</span>
              </a>
              <div className="flex gap-32 text-gray-500">
                <span>GD Anh</span>
                <div className=" flex gap-1 items-center">
                  <i class="fa-solid fa-users"></i>
                  <span>25k</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ItemProduct;
