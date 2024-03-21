import css from './Contact.module.css'

const Contact = ({user}) => {
  return (
      <div className={css.wrap}>
          <div className={css.contact}>
              <div>😎 {user.name}</div>
              <div>📞 {user.number}</div>
          </div>
          <button type="button">Delete</button>
    </div>
  )
}

export default Contact