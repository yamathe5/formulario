import React from 'react';
import FormsSidebar from '../components/forms-sidebar.jsx';
import Card from '../components/card-form.jsx';
import './my-forms-page.css';



export default function MyFormsPage() {
  const [allForms, setAllForms] = React.useState([
    { id: 1,title: "ZXCA 1", respuestas: 1, star: true },
    { id: 2,title: "ASDB 2", respuestas: 2, star: true },
    { id: 3,title: "WQEB 3", respuestas: 3, star: false }
  ]);

  const [filteredForms, setFilteredForms] = React.useState([...allForms]);


  const [value, setValue]  = React.useState('')

  function handleSortByTitle() {
    const sortedForms = [...filteredForms].sort((a, b) => a.title.localeCompare(b.title));
    setFilteredForms(sortedForms);
  }


  function functionBuscar (e) {
    let tempValue = e.target.value
    setValue(tempValue)
    let filteredArr = allForms.filter((item) => {
      return item.title.toLocaleLowerCase().includes(tempValue.toLocaleLowerCase())
    })

    setFilteredForms(filteredArr)
  }

  return (
    <div className="main-container">
      <FormsSidebar />
      <div className='main-content'>
        <h1>Formularios</h1>
        <button>Crear Formulario</button>

        <input type="text" placeholder='Buscar' onChange={(e) => functionBuscar(e)} value={value}/>
        <button onClick={handleSortByTitle}>Ordenar por Título (A-Z)</button>

        <div className='card__container'>
          {
            // Mapeamos sobre el estado 'forms' para renderizar cada tarjeta
            filteredForms.map((form, index) => (
              <Card 
                key={index} 
                id={form.id} 
                title={form.title} 
                respuestas={form.respuestas} 
                star={form.star} 
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}