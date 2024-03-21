import Contact from "../Contact/Contact"
import css from './ContactList.module.css'


const ContactList = () => {
    const users = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
  return (
      <ul className={css.contactList}>
           {Array.isArray(users) &&
          users.map((user) => {
            return (
              <Contact
                key={user.id}
                // onDeleteUser={onDeleteUser}
                user= {user}
              />
                   );
          })}
     </ul>
  )
}

export default ContactList