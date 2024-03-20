import Select from 'react-select';

const Selector = ({opciones, placeholder, selectedOption, setSeleccion}) => {

    const handleChange = (selectedOption) => {
        if(selectedOption !== null){
          selectedOption.label !== "" && setSeleccion(selectedOption)
        }
      }

  return (
    <Select
      styles={{ control: (provided) => ({ ...provided, width: 170 }) }}
      className='select-dashboard'
      options={opciones}
      isSearchable // Habilita la funcionalidad de búsqueda
      placeholder={placeholder}
      value={selectedOption}
      onChange={handleChange}
    />
  )
}

export default Selector;