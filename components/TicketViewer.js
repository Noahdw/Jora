import close from '../public/assets/images/close.svg'
import Image from 'next/image'
import { useState } from "react"

export default function TicketViewer({submit, cancel}) {

    function handleChange(e) {
        const {name, value} = e.target
        setBugData(prev => ({...prev,[name]: value}))
    }

    function submitIfValid() {
        if (bugData.title.trim().length != 0) {
            submit(bugData)
        }
    }

    let [bugData, setBugData] = useState({title: "", desc: ""})

    return (
        <main className="flex flex-col  bg-gray-400 max-w-[600px] min-w-96 shadow-xl rounded-md p-4 space-y-3 pointer-events-auto">
            <div className='flex justify-between'>
                <label>Title</label>
                <button onClick={cancel}>
                    <Image src={close}></Image>
                </button>
            </div>
            <input
                className='' 
                type="text"
                name="title"
                value={bugData.title}
                onChange={handleChange}
            />
            <textarea
                name="desc"
                value={bugData.desc}
                onChange={handleChange}
            />
            <button onClick={() => submitIfValid()} className="bg-gray-800 hover:bg-gray-600 text-white w-1/4 rounded-sm">
            Submit
            </button>
        </main>
    )
}