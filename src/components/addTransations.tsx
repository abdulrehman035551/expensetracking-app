import React, { useRef } from 'react';
import "./../../src/App.css"
import {add} from "../store/history";
import { useDispatch } from 'react-redux';
import { ECDH } from 'crypto';
function AddTransations() {
    let items = useRef<HTMLInputElement | null>(null);
    let amount = useRef<HTMLInputElement | null>(null);
    
    let dispatch=useDispatch()
    function sendData(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
    
       let id=Math.random()*10;
       console.log(id);
       
        let data = {
            itemNmae: items.current?.value,
            amountTotal: amount.current?.value,
            id:id
        }
        console.log(data.amountTotal);

    
    //  console.log(data);
     
        dispatch(add(data))


    }
    return (
        <div>
            <form className='input-form' >
                <p>Add New Transaction</p>
                <input className='input-box'  ref={items} type="text" />
                <input className='input-box' ref={amount} type="number" />
                <button onClick={sendData}> Add Transations</button>
            </form>
        </div>
    );
}

export default AddTransations;