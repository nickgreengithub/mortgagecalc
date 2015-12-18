import React from 'react';

export default ({actions, monthlyOverpayment, overpayments, years, className })=> (
  <div className={className}>
    <div>
      <h2>Overpayment</h2>
      <label>Monthly</label>
      <input type="text" maxLength="5" value={monthlyOverpayment} onChange={actions.setMonthlyOverpayment}/>
    </div>
    <div>
        <label>Year</label>
        <label>Month</label>
        <label>Amount</label>
    </div>
    {overpayments.map((payment, i)=>(
      <div key={i}>
        <input type="number" min="0" max={years} value={payment.year} onChange={(e)=>actions.updateOverpayment(i, "year", e)} />
        <input type="number" min="1" max="12" value={payment.month} onChange={(e)=>actions.updateOverpayment(i, "month", e)} />
        <input type="text" value={payment.amount} onChange={(e)=>actions.updateOverpayment(i, "amount", e)} />
        
        {i===overpayments.length-1 ?
          <button className="btn btn-xs" onClick={actions.addOverpayment}>+</button> : 
          <button className="btn btn-xs" onClick={()=>actions.deleteOverpayment(i)}>X</button>}
      </div>))
    }

  </div>
);