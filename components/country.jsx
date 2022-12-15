import React from "react";



export function CountryName(props) {
    const { flag, name, capital, language, currencies } = props;

    return (
        <div className="w-full min-h-[6em] flex divide-y-2 divide-solid divide-black px-2 items-center">
            <div className="w-auto h-full flex flex-1">
                <img className="w-auto h-full" src={flag} />
            </div>
            <div className="text-md text-black ml-2 flex flex-1">
                {name}
            </div>
            <div className="text-md text-black ml-2 flex flex-1">
                {capital}
            </div>
            <div className="text-md text-black ml-2 flex flex-1">
                {language}
            </div>
            <div className="text-md text-black ml-2 flex flex-1">
                {currencies}
            </div>
        </div>
    );
}