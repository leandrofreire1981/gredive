import React, { useState } from 'react'
import db from '../db.json'


export default function Form() {
    console.log('db: ', db.items)
    const [ input, setInput ] = useState()

    function handleOnSubmit(e){
        e.preventDefault()
        console.log('form: ', e.target)
    }

    function handleOnChange(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

  return (
    <form onSubmit={handleOnSubmit}>
        {db.items.map(r => (
            <div>
                <label>{r.label} </label>
                <input type={r.type} name={r.type} onChange={handleOnChange} value={input && input[r.type]}/>
            </div>
        ))}
    </form>
  )
}
