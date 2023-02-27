import React from 'react'

const Rank = () => {
  return (
    <>
      <div className="bg-black px-2 text-white">
        <div>
          <a href="/">
            <div className="flex gap-2 py-4 hover:text-gray-500">
              <span className="text-3xl font-bold ">Bảng xếp hạng</span>
              <div className="flex gap-1 text-gray-500 text-base">
                <span>Thêm</span>
                <i className="fa-solid fa-chevron-right mt-1"></i>
              </div>
            </div>
          </a>
          <div className="grid grid-cols-2 pr-4 flex gap-4">
            {/* Bxh kim cuong */}
            <div className="bg-zinc-700 rounded-xl">
              <div className="text-base flex items-center pl-5 h-24 font-bold bg-[url('/public/rank.png')] bg-no-repeat bg-cover rounded-xl">
                <span>BXH Kim Cương</span>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-4 pl-5 items-center mt-4 mb-1">
                  <i class="fa-solid fa-1"></i>
                  <div className="flex gap-3 pb-4 items-center p-1 ">
                    <div className="">
                      <img
                        className="border rounded-full object-cover w-16"
                        src="https://th.bing.com/th/id/R.20089d63e4b4b604b6470a5c14a5ca3c?rik=PLGgNhL5N3Merw&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f03%2fcute-Cute-Wallpapers.jpg&ehk=t10GTQLp3c83AcQJfFc42zDnhMImfaePLUkiFsqYtp0%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col gap-2 ">
                      <span className="font-bold">GD Anh2</span>
                      <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-gem mx-1 text-sky-400"></i>
                        <div className=" ">
                          <span>25k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 pl-5 items-center mb-1">
                  <i class="fa-solid fa-2"></i>
                  <div className="flex gap-3 pb-4 items-center p-1 ">
                    <div className="">
                      <img
                        className="border rounded-full object-cover w-16"
                        src="https://th.bing.com/th/id/R.20089d63e4b4b604b6470a5c14a5ca3c?rik=PLGgNhL5N3Merw&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f03%2fcute-Cute-Wallpapers.jpg&ehk=t10GTQLp3c83AcQJfFc42zDnhMImfaePLUkiFsqYtp0%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col gap-2 ">
                      <span className="font-bold">GD Anh2</span>
                      <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-gem mx-1 text-sky-400"></i>
                        <div className=" ">
                          <span>25k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 pl-5 items-center mb-1">
                  <i class="fa-solid fa-3"></i>
                  <div className="flex gap-3 pb-4 items-center p-1 ">
                    <div className="">
                      <img
                        className="border rounded-full object-cover w-16"
                        src="https://th.bing.com/th/id/R.20089d63e4b4b604b6470a5c14a5ca3c?rik=PLGgNhL5N3Merw&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f03%2fcute-Cute-Wallpapers.jpg&ehk=t10GTQLp3c83AcQJfFc42zDnhMImfaePLUkiFsqYtp0%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col gap-2 ">
                      <span className="font-bold">GD Anh2</span>
                      <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-gem mx-1 text-sky-400"></i>
                        <div className=" ">
                          <span>25k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bxh giau co */}
            <div className="bg-zinc-700 rounded-xl">
              <div className="text-base flex items-center pl-5 h-24 font-bold bg-[url('/public/rankrich.png')] bg-repeat bg-cover rounded-xl">
                <span>BXH Giàu có</span>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-4 pl-5 items-center mt-4 mb-1">
                  <i class="fa-solid fa-1"></i>
                  <div className="flex gap-3 pb-4 items-center p-1 ">
                    <div className="">
                      <img
                        className="border rounded-full object-cover w-16"
                        src="https://th.bing.com/th/id/R.20089d63e4b4b604b6470a5c14a5ca3c?rik=PLGgNhL5N3Merw&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f03%2fcute-Cute-Wallpapers.jpg&ehk=t10GTQLp3c83AcQJfFc42zDnhMImfaePLUkiFsqYtp0%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col gap-2 ">
                      <span className="font-bold">GD Anh2</span>
                      <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-gem mx-1 text-sky-400"></i>
                        <div className=" ">
                          <span>25k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 pl-5 items-center mb-1">
                  <i class="fa-solid fa-2"></i>
                  <div className="flex gap-3 pb-4 items-center p-1 ">
                    <div className="">
                      <img
                        className="border rounded-full object-cover w-16"
                        src="https://th.bing.com/th/id/R.20089d63e4b4b604b6470a5c14a5ca3c?rik=PLGgNhL5N3Merw&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f03%2fcute-Cute-Wallpapers.jpg&ehk=t10GTQLp3c83AcQJfFc42zDnhMImfaePLUkiFsqYtp0%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col gap-2 ">
                      <span className="font-bold">GD Anh2</span>
                      <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-gem mx-1 text-sky-400"></i>
                        <div className=" ">
                          <span>25k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 pl-5 items-center mb-1">
                  <i class="fa-solid fa-3"></i>
                  <div className="flex gap-3 pb-4 items-center p-1 ">
                    <div className="">
                      <img
                        className="border rounded-full object-cover w-16"
                        src="https://th.bing.com/th/id/R.20089d63e4b4b604b6470a5c14a5ca3c?rik=PLGgNhL5N3Merw&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f03%2fcute-Cute-Wallpapers.jpg&ehk=t10GTQLp3c83AcQJfFc42zDnhMImfaePLUkiFsqYtp0%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col gap-2 ">
                      <span className="font-bold">GD Anh2</span>
                      <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-gem mx-1 text-sky-400"></i>
                        <div className=" ">
                          <span>25k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rank
