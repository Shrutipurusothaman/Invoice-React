import React, { useState } from 'react';

const InvoiceCalculation = () => {
  const [items, setItems] = useState([
    { id: Date.now(), description: '', quantity: 0, rate: 0, amount: 0 }
  ]);
  
  const [gstPercent, setGstPercent] = useState(0);

  const handleInputChange = (id, field, value) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        const numValue = (field === 'quantity' || field === 'rate') ? parseFloat(value) || 0 : value;
        const updatedItem = { ...item, [field]: numValue };
        updatedItem.amount = updatedItem.quantity * updatedItem.rate;
        return updatedItem;
      }
      return item;
    });
    setItems(updatedItems);
  };
  
  const subTotal = items.reduce((acc, item) => acc + item.amount, 0);
  const gstAmount = (subTotal * gstPercent) / 100;
  const grandTotal = subTotal + gstAmount;

  const addItem = () => {
    setItems([...items, { id: Date.now(), description: '', quantity: 0, rate: 0, amount: 0 }]);
  };

  const deleteItem = (idToDelete) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== idToDelete));
    } else {
      alert("At least one item is required!");
    }
  };

  return (
    <div className="p-4">
      <h3 className='text-center text-xl mt-10 font-bold'>INVOICE CALCULATION</h3>
      
      {/* Header */}
      <div className='flex p-5 w-full bg-black justify-between mt-3 text-white'>
        <h3 className='w-1/4'>ITEM NAME</h3>
        <h3 className='w-1/4 text-center'>Quantity</h3>
        <h3 className='w-1/4 text-center'>Rate</h3>
        <h3 className='w-1/4 text-right pr-10'>Amount</h3>
      </div>

      {/* Item Rows */}
      {items.map((item) => (
        <main key={item.id} className='flex flex-row justify-between mt-5 gap-4 border-b pb-2 items-center'>
          <textarea
            placeholder='Item description...'
            className='border p-2 w-1/4 rounded-lg'
            value={item.description}
            onChange={(e) => handleInputChange(item.id, 'description', e.target.value)}
          />
          <input
            type='number'
            className='border p-2 w-1/4 text-center rounded-lg'
            value={item.quantity}
            onChange={(e) => handleInputChange(item.id, 'quantity', e.target.value)}
          />
          <input
            type='number'
            className='border p-2 w-1/4 text-center rounded-lg'
            value={item.rate}
            onChange={(e) => handleInputChange(item.id, 'rate', e.target.value)}
          />
          <input
            type='number'
            className='border p-2 w-1/4 text-right rounded-lg bg-gray-100'
            value={item.amount.toFixed(2)}
            readOnly
          />
          <button onClick={() => deleteItem(item.id)} className="text-red-500 font-bold text-xl px-2">✕</button>
        </main>
      ))}

      <button className="px-4 py-2 mt-10 font-semibold text-white bg-blue-600 rounded-lg" onClick={addItem}>
        ADD ITEM +
      </button>

      {/* Summary Section */}
      <div className='grid grid-cols-2 gap-4 w-1/3 ml-auto mt-10 p-5 border-t'>
        <h4 className="font-semibold self-center">SubTotal</h4>
        <div className='p-2 text-right bg-gray-50 border rounded-lg'>{subTotal.toFixed(2)}</div>

        <h4 className="font-semibold self-center">GST (%)</h4>
        <input 
          type='number' 
          className='border p-2 text-right rounded-lg' 
          value={gstPercent}
          onChange={(e) => setGstPercent(parseFloat(e.target.value) || 0)}
        />

        <h4 className="font-bold text-lg self-center">Total</h4>
        <div className='border p-2 text-right font-bold bg-yellow-50 rounded-lg'>{grandTotal.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default InvoiceCalculation;