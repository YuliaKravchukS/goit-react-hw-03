import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import usersData from './userData.json'


function App() {
  const [users, setUsers] = useState(() => {
    const stringifiedUsers= localStorage.getItem('users')
    if (!stringifiedUsers) return usersData;
    console.log('usersData: ', usersData);
    const localUsers = JSON.parse(stringifiedUsers);
    return localUsers;
  });

   useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);


    const[inputValue, setInputValue] = useState("");
    function handleInput(e) {
        setInputValue(e.target.value)
    }
    
  const filteredUsers = users.toLowerCase
  console.log('users: ', users);
  console.log('filteredUsers: ', filteredUsers);
  
  return (
<div>
  <h1>Phonebook</h1>
  <ContactForm />
      <SearchBox inputValue={ inputValue} onHandleInput={handleInput}  />
  <ContactList users = {filteredUsers} />
</div>
  )
}

export default App
