import React, { useState, useEffect } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people,setPeople]=useState(data)
  const [btnName,setBtnName]=useState('Clear All')
  const [inputValue,setInputValue ] = useState('')
  
  let serachedList = (e)=>{
    let date = e.target.value
    setInputValue(date)
    let searchedBirthDay = data.filter(people=> people.birthdate===date )
      setPeople(searchedBirthDay) 
  }

  let clearAll =()=> {
    console.log(inputValue)
    if(people.length===0){
      setPeople(data)
      setBtnName('Clear All')
      setInputValue('')
    }
    else{
      setPeople([])
      setBtnName("Show All Todays Birthday")
      setInputValue('')
    }
  }

  let date =()=>{
         let calculatedAge = people.map(people=>{
           let year =  people.birthdate.split('-')[0]
           let age = new Date().getFullYear() - parseInt(year)
             people.age = age
             return people       
         })

         setPeople(calculatedAge)
  }

  useEffect(()=>{date()},[])
   
  return (
    <main>
      <section className="container">
        <h3>Birthday Calender</h3>
        <div className="date">
        <label> <h4>Search by Date</h4> </label>
        <input type='date' id='name' name="serach" value={inputValue} onInput={e=> serachedList(e)} />
        </div>

        <List people={people}/>
        <button onClick={()=> clearAll()}> {btnName}</button>
      </section>
    </main>
  )
}

export default App;
