import { useState } from 'react'
import './App.css'
import countryData from './resources/countryData.json'

function App() {

  const [inputValue, setInputValue] = useState()
  const [dropDown, setDropDown] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)


  const handleChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setInputValue(inputValue);

    const filteredCountries = countryData.filter((country) => {
      return country.name.toLowerCase().startsWith(inputValue);
    });

    setDropDown(filteredCountries);
    setShowSuggestions(filteredCountries.length > 0);
  };

  const handleEscapeButton = (button) => {
    if (button.keyCode == 27) {
      console.log('Escape')
      setShowSuggestions(false)
    }
  }

  return (
    <div className='container'>
      <h1>Search Box</h1>
      <div>
        <input type="text" onChange={handleChange} onKeyDown={handleEscapeButton} list='suggest' />
        <datalist id='suggest' >
          {showSuggestions && dropDown.map((element, index) => (
            <option key={index} value={element.name}></option>
          ))}
        </datalist>
      </div>
    </div>
  )
}

export default App
