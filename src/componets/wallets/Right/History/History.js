import React from 'react'
import { transactions } from '../../../../data/data'

function History() {
    

    return (
        <div>
            {transactions.map((item)=>(
                <div>
                <table style={{width:'100%'}}>
                <tr>
                <td>
                <img src={item.img} alt='img' style={{width:17}}/>
                </td>
                <td>
                <span>{item.id}</span>
                </td>
                <td>
                <span>{item.date}</span>
                </td>
                <td>
                <span>{item.amount}</span>
                </td>
                </tr>
                </table>
                </div>
            ))}
        </div>
    )
}

export default History
