import React from 'react'

const InvoiceCalculation = () => {
  return (
    <div>
       <h3 className='text-center text-xl mt-10 font-bold'>INVOICE CALCULATION</h3>
       <heading className='flex p-5 w-full bg-black justify-between mt-3'>
          <h3 className='text-white'>ITEM NAME</h3>
          <h3 className='text-white'>Quantity</h3>
          <h3 className='text-white'>Rate</h3>
          <h3 className='text-white'>Amount</h3>
       </heading>
    </div>
  )
}

export default InvoiceCalculation