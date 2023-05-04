import React from 'react'
import FormInputVideo from '../../Components/FormInput/FormInputVideo'


const UploadVideo = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const streamerid = urlParams.get('streamerid')

  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-[../../assets/images/bg.jpg]">
      <h1 className="text-center text-2xl m-[2rem]">
        FORM UPLOAD VIDEO STREAMED
      </h1>
      <FormInputVideo streamerid={streamerid}/>
    </div>
  )
}

export default UploadVideo
