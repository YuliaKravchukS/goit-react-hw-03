import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import usersData from './userData.json'
import { nanoid } from 'nanoid'


function App() {
  const [users, setUsers] = useState(() => {
    const stringifiedUsers= localStorage.getItem('users')
    if (!stringifiedUsers) return usersData;
    const localUsers = JSON.parse(stringifiedUsers);
    return localUsers;
  });
  const [inputValue, setInputValue] = useState("");
  
    useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    }, [users]);
  
  const addUser = (formData) => {
    
    const finalUser = {
      ...formData,
      id: nanoid(),
    }
    setUsers((prevState) => [...prevState, finalUser]);
   
  }
  const onDeleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
}

 

  
  
    function handleInput(event) {
        setInputValue(event.target.value)
    }
    
  const filteredUsers = users.filter(user=>user.name.toLowerCase().includes(inputValue.toLowerCase()))
  
  return (
<div>
  <h1>Phonebook</h1>
  <ContactForm onAdd = {addUser} />
  <SearchBox inputValue = { inputValue} handleInput = {handleInput}  />
  <ContactList users = {filteredUsers} onDeleteUser = {onDeleteUser} />
</div>
  )
}

export default App
