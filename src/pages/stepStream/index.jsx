import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import dataDigitalBestSeller from './data'
import imgGirl from '../../assets/images/defaultThumbnailBlog.jpg'

const StepStream = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'flex',
          background: 'black',
          top: '50%',
          width: '50px',
          height: '50px',
          alignItems: 'center',
          justifyContent: 'center',
          right: '-50px',
          borderRadius: '50%',
        }}
        onClick={onClick}
      />
    )
  }

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'flex',
          background: 'black',
          top: '50%',
          width: '50px',
          height: '50px',
          alignItems: 'center',
          justifyContent: 'center',
          left: '-50px',
          borderRadius: '50%',
        }}
        onClick={onClick}
      />
    )
  }

  const [defaultImage, setDefaultImage] = useState({})
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }))
  }
  console.log(dataDigitalBestSeller)

  return (
    <div className="w-[73%] my-[50px] mx-auto">
      <Slider {...settings}>
        {dataDigitalBestSeller.length &&
          dataDigitalBestSeller?.map((item) => (
            <div className="border  bg-black rounded-lg overflow-hidden h-[800px]  text-white ">
              <div className="">
                <div className="  object-cover bg-black">
                  <img
                    className="w-full h-[650px]"
                    src={
                      defaultImage[item.title] === item.title
                        ? defaultImage.linkDefault
                        : item.linkImg
                    }
                    alt={item.title}
                    onError={handleErrorImage}
                  />
                </div>
                <h1 className="text-2xl font-bold m-5 text-[#00BFFF]">
                  {item.title}
                </h1>
              </div>
              <div className="my-[10px] mx-5">
                <span className="relative before:content-none before:bg-[#ff3d3d] before:absolute before:top-[calc(100%+10px)] before:left-0 before:right-0 before:h-[2px]">
                  {item.category}
                </span>
                <a href="https://obsproject.com/" target="_blank">
                  <p className="cursor-pointer text-lg font-semibold text-purple-400 mt-2 hover:text-sky-400 underline">
                    {item.linkObs}
                  </p>
                </a>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  )
}

export default StepStream
