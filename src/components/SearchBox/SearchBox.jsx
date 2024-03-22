
const SearchBox = ({value, handleInput}) => {
  
    return (
        <label >
            <span>Find contacts by name</span>
            <input type="text"
                value={value}
         onChange={handleInput}   />   
      </label>
    
  )
}

export default SearchBox