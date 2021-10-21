import { useEffect, useState } from 'react'

// Loads low quality image first with a blur effect over it, then displays high quality when done loading
const useProgressiveImg: (
   lowQualitySrc: string,
   highQualitySrc: string
) => any[] = (lowQualitySrc, highQualitySrc) => {
   const [src, setSrc] = useState(lowQualitySrc)

   useEffect(() => {
      setSrc(lowQualitySrc)

      const img = new Image()
      img.src = highQualitySrc

      img.onload = () => {
         setSrc(highQualitySrc)
      }
   }, [lowQualitySrc, highQualitySrc])

   return [src, { blur: src === lowQualitySrc }]
}

export default useProgressiveImg
