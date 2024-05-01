"use client"

import React, { useState, useEffect } from "react";
//import Image from "next/image";
import SkeletonLoader from "./skeletonLoader";

function ImageLoader({ url, alt }) {

    const [imageLoaded, setImageLoaded] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {

        const timeOut = setTimeout(() => {

            //to handle case when images does not load
            try {
                setImageLoaded(true)
                //throw error
            } catch (e) {
                setError(true)
            }
        }, 3000)

        return () => {
            clearTimeout(timeOut)
        }


    }, [])

    return (
            <div className="relative flex justify-center items-center w-full h-full p-4">

                {
                    !imageLoaded &&
                    <div className={`absolute w-full h-full transition-opacity ease-out duration-300 ${imageLoaded || error ? 'opacity-0' : 'opacity-100'}`}>
                        <SkeletonLoader />
                    </div>
                }

                {
                    error ?
                        <p className="text-red-900 font-bold">Error loading image!!</p> :
                        <img
                            src={url}
                            alt={alt}
                            width={600}
                            height={400}
                            className={`rounded-lg object-cover transition-opacity duration-3000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        />
                }

            </div>
    )

}



export default ImageLoader

