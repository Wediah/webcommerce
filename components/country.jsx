import React from "react";



export function CountryName(props) {
    const { thumbnailSrc, name, rating } = props;

    return (
        <div className="w-full min-h-[6em] flex divide divide-solid divide-black  items-center pt-6 px-5">
            <div className="w-auto h-full flex ">
                <img className="w-auto h-full" src={thumbnailSrc} />
            </div>
            <div className="text-md text-black  flex  ml-10">
                {name}
            </div>
            <div className="text-md text-black  flex  float-right ml-auto">
                {rating || "N/A"}
            </div>
        </div>
    );
}