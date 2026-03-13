import React from 'react'


const Client = () => {
  return (
    <div className="flex flex-col gap-6 p-6 mt-5 ml-10">
      <input type='text' placeholder='Bill To:' className='p-2 w-1/4 border border-transparent rounded focus:outline-blue-500'></input>
      <input
        type="text"
        placeholder="Enter your userName..."
        className="p-2 w-1/4 border border-transparent rounded focus:outline-blue-500"
      />
      <input
        type="text"
        placeholder="Enter your City..."
        className="p-2 w-1/4 border border-transparent rounded focus:outline-blue-500"
      />
      <input
        type="text"
        placeholder="Enter your PinCode..."
        className="p-2 w-1/4 border border-transparent rounded focus:outline-blue-500"
      />
      <input
        type="date"
        className="p-2 w-1/4 border border-transparent rounded focus:outline-blue-500"
      />
    </div>
  )
}

export default Client