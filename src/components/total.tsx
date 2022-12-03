import { useSelector } from 'react-redux'

function Total() {
    let total:any = useSelector((state) => (state))

    let totalAmount = 0
    total.cards.forEach((amount: any) => {
        var parsed = parseInt(amount.amountTotal);
        totalAmount += parsed
        console.log(totalAmount);


    })
    return (
        <div>
            {
                <h2>Current Balance {" "}{totalAmount}$</h2>
            }
        </div>
    );
}

export default Total;