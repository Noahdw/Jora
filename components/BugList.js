import { useState } from "react";
import Image from "next/image";
import dots from "../public/assets/images/dots.svg"

function BugItem({title, desc}) {
    return (
        <li className="bg-slate-400 rounded-md p-2 hover:bg-slate-300 active:bg-slate-200 overflow-ellipsis overflow-hidden group">
            <div className="flex flex-row justify-between">
                <h2 className="font-bold">{title}</h2>
                <button className="bg-gray-300 hover:bg-slate-100 group-hover:bg-gray-400 h-2 relative ">
                    <Image className="absolute top-1/2 w-1/2 -translate-y-1/2" src={dots} />
                </button>
            </div>
            <p>{desc}</p>
        </li>
    )
}

export default function BugList({allData}) {

   

    let allBugElements = allData.map(data => (
        <BugItem title={data.title} desc={data.desc}></BugItem>
    ))

    return (
        <div className="bg-gray-600 p-1 w-1/4">
            <ul className="m-4 space-y-1"  >
                {allBugElements}
            </ul>
        </div>
    );
}