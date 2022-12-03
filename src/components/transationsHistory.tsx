import { useSelector,useDispatch } from 'react-redux'
import "./../../src/App.css"
import { remove } from "../../src/store/history"

function TransationsHistory() {
    let  dispatch=useDispatch()
    let total: any = useSelector((state) => (state))
    function handelDelete(value:number)
    {
        dispatch(remove(value))
    }
    return (
        <div id='transation-history'>
            <h2>TransationsHistory</h2>
            {
                total.cards.map((value:any)=>
                {
                    console.log(value);
                    
                    return <div>
                         <ul className='hsi-li' key={value.id}>
                            {
                                <><li>{value.itemNmae}</li><li>{value.amountTotal}</li><button onClick={() => handelDelete(value.id)}>X</button></>
                            }
                        </ul>
                    </div>
                       
                    
                })
            }
        </div>
    );
}

export default TransationsHistory;