"use client"

import React from "react"

function SkeletonLoader() {


    return (
        <div className="flex w-full h-full justify-center items-center">
            <p className="animate-bounce p-2 bg-slate-500 rounded-lg">Loading...</p>
        </div>
    )
}

export default SkeletonLoader
