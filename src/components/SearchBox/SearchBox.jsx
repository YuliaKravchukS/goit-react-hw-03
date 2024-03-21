
const SearchBox = ({inputValue,onHandleInput}) => {
  
    return (
        <label >
            <span>Find contacts by name</span>
            <input type="text"
                value={inputValue}
         onChange={onHandleInput}   />   
      </label>
    
  )
}

export default SearchBox