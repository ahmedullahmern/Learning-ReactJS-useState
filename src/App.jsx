import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from 'autoprefixer'

function App() {
  // const [userName, setuerName] = useState("Ahmed")
  // const [counter, setsetCounter] = useState(0)
  // const [userVal, setUserVal] = useState("Ahmed")
  // const [count, setCount] = useState(0)
  // const [isRemember, setisRemember] = useState(false)
  const [isVal, setIsVal] = useState(0)
  const [isType, setIsType] = useState("income")
  const [transiction, setTransiction] = useState([])

  const handeltransiction = () => {
    setTransiction([...transiction, { isVal, isType }])
    setIsVal("")
    setIsType("income")
  }

  const totalIncome = transiction.reduce((acc, transiction) => transiction.type == "income" ? acc + Number(transiction.isVal) : acc, 0)
  const totalExpence = transiction.reduce((acc, transiction) => transiction.type == "expence" ? acc + Number(transiction.isVal) : acc, 0)

  const totalBalance = totalIncome-totalExpence

  console.log("totalIncome",totalIncome);
  console.log("totalExpence",totalExpence);
  console.log("totalBalance",totalBalance);
  


  // const handelCounter = () => {
  //   setsetCounter(counter + 1)
  //   console.log("Function==>", counter);
  // }

  // const updatedinp = (e) => setUserVal(e.target.value)

  // const handelUserName = () => {
  //   setuerName("Ahmed Aur Code");
  //   setNumber(number+1)
  //   console.log("number in function", number);
  // }
  // console.log("userVal", userVal);
  // console.log(isRemember);


  return (
    <>
      <div className='flex justify-center items-center flex-col mt-10'>
        <div className='flex my-10 gap-10'>
          <div className='p-4 border border-purple-700 rounded-md font-semibold'>
            <h1>Total Income</h1>
            <h1>1000</h1>
          </div>
          <div className='p-4 border border-purple-700 rounded-md font-semibold'>
            <h1>Total Expence</h1>
            <h1>1000</h1>
          </div>
          <div className='p-4 border border-purple-700 rounded-md font-semibold'>
            <h1>Total Balance</h1>
            <h1>1000</h1>
          </div>
        </div>
        <input type="number"
          value={isVal}
          placeholder='Add Number'
          onChange={(e) => setIsVal(e.target.value)}
          className='border border-purple-600 p-1 rounded-sm' />
        <select
          value={isType}
          onChange={(e) => setIsType(e.target.value)}
          className='border border-purple-600 p-1 rounded-sm mt-5'>
          <option value="income">income</option>
          <option value="expence">expence</option>
        </select>
        <button
          onClick={handeltransiction}
          className='border border-purple-600 p-1 rounded-lg mt-5 px-3'>
          submit
        </button>
        <div className='mt-10'>
          {transiction.map((data, ind) => {
            return (
              <div key={ind} className='flex '>
                <h1 className='font-semibold underline text-2xl w-60'>{ind + 1}{")  "}{data.isVal}</h1>
                <h1 className={`'font-bold underline text-4xl ' ${data.isType === "income" ? "text-green-800" : "text-red-800"}`}>{data.isType}</h1>
              </div>
            )
          })}
        </div>
      </div>
      {/* <div className='flex justify-center  items-center flex-col'>
        <input type="checkbox" className='flex flex-row ' onChange={(e)=> console.log(e.target.checked)} />is Remeber
      </div> */}
      {/* <div className='flex justify-center  items-center flex-col'>
        <input type="text" value={userVal} className='border border-purple-600 mt-10 px-3'
          onChange={updatedinp}
        />
      </div> */}

      {/* <div className='flex justify-center  items-center flex-col'>
        <h1 className='mt-10 rounded-full'>
          {counter}
        </h1>
        <button onClick={handelCounter} className='border border-black rounded-md bg-orange-500 text-white px-3 py-1 font-semibold mt-5'>
          Update Name
        </button>
      </div> */}


      {/* <div className='flex justify-center  items-center flex-col'>
        <h1 className='mt-10 text-3xl'>
          {userName}
        </h1>
        <button onClick={handelUserName} className='border border-black rounded-md bg-orange-500 text-white px-3 py-1 font-semibold mt-5'>
          Update Name
        </button>
      </div> */}
    </>
  )
}

export default App
