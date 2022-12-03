import AddTransations from './components/addTransations';
import Total from './components/total';
import Details from './components/Details';
import TransationsHistory from "./components/transationsHistory"
import "./App.css"
import firebase from './firebase';
import React from 'react';
type toke={

requestPermission:any,
getToken:any,

}
React.useEffect(()=>{
  const msg:toke=firebase.messaging();
  msg.requestPermission().then(()=>{
    return msg.getToken();
  }).then((data:any)=>{
    console.log("token",data)
  })
})

function App() {
  return (
    <div className="App">
      <h1>Expense Tracking App</h1>
      <Total />
      <Details />
      <TransationsHistory />
      <AddTransations />


    </div>
  );
}

export default App;
