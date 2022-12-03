import { useSelector } from 'react-redux'
import "./../../src/App.css"
function Details() {
    let total: any = useSelector((state) => (state))

    let totalAmount = 0
    let totalAmount2 = 0
    total.cards.forEach((amount: any) => {
        var parsed = parseInt(amount.amountTotal);
        if (parsed >= 0) {
            totalAmount += parsed
        }
        else {
            totalAmount2 += parsed
        }

        console.log(parsed);


    })
    return (
        <div className='details'>
            <h4>INCOME{" "}{totalAmount}$</h4>
            <h4>EXPENSE{" "}{totalAmount2}$</h4>
        </div>
    );
}

export default Details;