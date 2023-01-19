import React, { useRef, useState } from 'react'
import db from '../db.json'


export default function Form() {
    console.log('db: ', db.items)
    const [ input, setInput ] = useState()
    const errorRef = useRef(null);

    function handleOnSubmit(e){
        e.preventDefault()
        console.log('form')
        for (let i = 0; i < db.items.length - 1; i++) {
            if(db.items[i].type !== 'submit' && db.items[i].required && input && input[db.items[i].name]){
                console.log('cooorrecto', input[db.items[i].name])
                continue
            }
            if(db.items[i].type !== 'submit' && db.items[i].required && input && input[db.items[i].name] === 'on')
                console.log('cooorrecto', db.items[i].name)
            else {
                errorRef.current.innerHTML = `Faltan ingresar ${db.items[i].label}`
                return
            }
        }
        console.log('enviando a Database')
 
    }

    function handleOnChange(e){
        let aux = []
         if(e.target.type === 'text'){
            if(!/[a-zA-ZñÑ´' ]+/gi.test(e.target.value.charAt(e.target.value.length - 1)))
                errorRef.current.innerHTML = 'Solo se permiten letras y numeros'
            else    
                errorRef.current.innerHTML = ''
            e.target.value = e.target.value.match(/[a-zA-ZñÑ´' ]+/gi)
            aux = []
            aux.push(e.target.value)
            aux.flat()
            e.target.value=aux[0].slice(0,50)
        } 
        console.log('asdfasdfasdf',e.target.checked)
        if( e.target.type === 'checkbox')
            setInput({...input, [e.target.name]: e.target.checked})
        else
            setInput({...input, [e.target.name]: e.target.value})
    }

    function handleOnSelect(e){
        setInput({...input, [e.target.name]: e.target.value})
    }
  return (
    <form onSubmit={handleOnSubmit}>
        {db.items.map((r, i) => {
            if(r.type === 'select')
                return(
                    <div key = {i + 'a'}>
                        <label>{r.label}</label>
                        <select onChange={handleOnSelect} name={r.name}>
                            <option value='Seleccione un pais'>Seleccione un pais</option>
                            {
                                r.options.map((r2, i) => 
                                    <option key={i} value={r2.value}>{r2.label}</option>
                                )
                            }
                        </select>
                    </div>
                )
            else
                return (
                    <div key={i}>
                        <label>{r.label} </label>
                        <input type={r.type} name={r.name} onChange={handleOnChange} value={input && input[r.name]}/>
                        <div ref={errorRef} ></div>
                    </div>
                    )
        }
        )}
    </form>
  )
}
