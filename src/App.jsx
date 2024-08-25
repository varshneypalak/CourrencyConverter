import { useState } from 'react'
import { InputBox } from './components'
import useCurencyInfo from './hooks/useCurrencyInfo'

import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from , setForm ] = useState("usd")
  const [to , setTo ] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)
  console.log(from)
  console.log(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
const currencyInfo = useCurencyInfo(from)
console.log("hello")
console.log(currencyInfo)

const options =Object.keys(currencyInfo)
console.log("helloe")
console.log(options)

const swap =() =>{
  setForm(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}
const convert = () =>{
  setConvertedAmount(amount *currencyInfo[to])
}
const imageUrl = 'https://pihttps://www.pexels.com/photo/airplane-flying-in-the-cloudy-blue-sky-11571041/xabay.com/images/search/money%20background/'
return (
  <div
      className="h-screen w-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
      style={{
          // backgroundImage: `url('https://www.pexels.com/photo/airplane-flying-in-the-cloudy-blue-sky-11571041/')`,
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert();
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=>{setForm(currency)}}
                          selectCurrency={from}
                          onAmountChange={(amount)=>setAmount(amount)}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=>{setTo(currency)}}
                          selectCurrency={to}
                          amountDisable
                          onAmountChange={(amount)=>setAmount(amount)}

                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert 
                  </button>
              </form>
          </div>
      </div>
  </div>
);


}

export default App
