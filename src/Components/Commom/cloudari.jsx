import React from 'react'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { CloudinaryVideo } from '@cloudinary/url-gen'
import { AdvancedVideo } from '@cloudinary/react'
import { byAngle } from '@cloudinary/url-gen/actions/rotate'
import { scale } from '@cloudinary/url-gen/actions/resize'

const Cloudari = () => {
  const myImage = new CloudinaryVideo('2023-04-18_00-53-28_kaavzb')
    .rotate(byAngle(45))
    .resize(scale().width(500))

  return (
    <div>
      <AdvancedVideo cldVid={myImage} />
    </div>
  )
}

export default Cloudari
// This SDK requires imports from @cloudinary/url-gen. Learn more in the SDK docs.
// This SDK requires imports from @cloudinary/url-gen. Learn more in the SDK docs.
