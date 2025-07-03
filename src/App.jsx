import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/header/Header.jsx';
import Overview from './components/Overview/Overview.jsx';
import Form from './components/Form/Form.jsx';
import TransactionList from './components/TransactionList/TransactionList.jsx';

const App =()=>{

  const [transactionData,setTransactionData] = useState([]);
  const [toggle,setToggle] = useState(false);
  const [balance,setBalance] = useState(0);


function addTransactionData(data){
  setTransactionData((prevData)=>[...prevData,data]);
}

useEffect(() => {
  handleBalance(transactionData);
}, [transactionData]);


function handleBalance(){
  const income = transactionData
                  .filter(item=>item.transType === 'income')
                  .reduce((acc, curr)=> acc = acc + curr.amount,0);

  const expense = transactionData
                  .filter(item=>item.transType === 'expense')
                  .reduce((acc, curr)=> acc = acc + curr.amount,0);

  setBalance(income - expense);
}

function handleToggle(){
    setToggle(!toggle);
}

function deleteRecord(id) {
  console.log(id);
}

function paidRecord(id){
  const updatedData = transactionData.map((item)=> item.id === id ? {...item,paid:true} : item);
  setTransactionData(updatedData);
}

  return(
    <div className='app'>
      <Header />
      <Overview
        toggle={toggle}
        handleToggle={handleToggle}
        balance={balance}
      />
      {toggle ? <Form addTransactionData={addTransactionData} setToggle={setToggle}/> : null}
      <TransactionList
        transactionData={transactionData}
        deleteRecord={deleteRecord}
        paidRecord={paidRecord}
      />
    </div>
  )
}

export default App