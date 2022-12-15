import React from "react";



export function CountryName(props) {
    const { thumbnailSrc, name } = props;

    return (
        <div className="w-full min-h-[6em] flex divide divide-solid divide-black  items-center">
            <div className="w-auto h-full flex shadow-sm">
                <img className="w-auto h-full" src={thumbnailSrc} />
            </div>
            <div className="text-md text-black  flex shadow-sm ">
                {name}
            </div>
        </div>
    );
}