
const SearchBox = ({inputValue,handleInput}) => {
  
    return (
        <label >
            <span>Find contacts by name</span>
            <input type="text"
                value={inputValue}
         onChange={handleInput}   />   
      </label>
    
  )
}

export default SearchBox