import './App.css'
import Client from './assets/Components/Client';
import User from './assets/Components/User';
import InvoiceCalculation from './assets/Components/InvoiceCalculation';

function App() {
  

  return (
    <div className='border border-gray-500 mx-20 my-10 rounded-lg'>
      <h1 className='text-center text-2xl m-3 font-semibold'>INVOICE GENERATOR</h1>
      <Client />
      <User />
      <InvoiceCalculation />
    </div>
  )
}

export default App
