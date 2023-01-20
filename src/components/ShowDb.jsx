import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './showDb.scss'



export const ShowDb = () => {
  const data = useSelector (state => state.data)
  const navigate = useNavigate()
  
  function handleOnClick(e, data){
    navigate('/')
  }
    return (
      <div>
        <h1>Ingresos en la base de datos</h1>
      {data.length>0 && data.map((r, i) => (
        <div key={i}>
          <div>Nombre: {r.full_name} </div>
          <div>E-mail: {r.email} </div>
          <div>Fecha de nacimiento: {r.birth_date} </div>
          <div>País de origen: {r.country_of_origin} </div>
          <hr></hr>
        </div>
      ))}
      <button className='button' onClick={handleOnClick}>Volver</button> 
    
        
      </div>
    )

}
