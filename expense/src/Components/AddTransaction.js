import React,{useState} from 'react'

function AddTransaction() {
    const [text, settext] = useState('');
    const [amount, setamount] = useState(0);
  return (
    <>
        <h3>Add new transaction</h3>
        <form className='form'>
          <div className='form-control' >
             <label htmlFor="text">Text</label>
             <input type="text" value={text} onChange={(e)=> settext(e.target.value)} placeholder='Enter text...' />
          </div>
          <div className="formcontrol">
            <label htmlFor="amount">
                Amount <br />
                (negative - expense,positive - income)
            </label>
            <input value={amount} onChange={(e)=> setamount(e.target.value)}  type="text" id='amount' placeholder='Enter amount...' />
          </div>
        </form>
    </>
  )
}

export default AddTransaction