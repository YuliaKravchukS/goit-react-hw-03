import Contact from "../Contact/Contact"
import css from './ContactList.module.css'


const ContactList = ({users, onDeleteUser}) => {
  
  return (
      <ul className={css.contactList}>
           {Array.isArray(users) &&
          users.map((user) => {
            return (
              <Contact
                key={user.id}
                onDeleteUser={onDeleteUser}
                user= {user}
              />
                   );
          })}
     </ul>
  )
}

export default ContactList