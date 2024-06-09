import Link from 'next/link';

export default function Header({ createBug }) {
  return (
    <header className="flex items-center px-4 py-3 bg-gray-600 justify-between w-full">
      <div className="flex justify-start w-1/3">
        <p className="text-4xl text-white">
          website
        </p>
      </div>
      <div className="flex justify-center w-1/3">
        <button onClick={createBug} className="rounded-md text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-800 p-2">
          New bug
        </button>
      </div>
      <div className="flex justify-end w-1/3">
        <button>
          <img src='https://icons.veryicon.com/png/o/miscellaneous/icon-8/my-account-5.png' className='rounded-full w-14 h-14 bg-white hover:bg-slate-300'/>
        </button>
      </div>
    </header>
  );
}