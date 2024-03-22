import css from './Contact.module.css'

const Contact = ({user, onDeleteUser}) => {
 
  return (
      <div className={css.wrap}>
          <div className={css.contact}>
              <div>😎 {user.name}</div>
              <div>📞 {user.number}</div>
          </div>
          <button type="button" onClick={() => onDeleteUser(user.id)}>Delete</button>
         
          
    </div>
  )
}

export default Contact