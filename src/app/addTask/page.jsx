import React from 'react'
import style from './addUser.module.css'
import AddUser from '../lib/actions'
const AddUsers = async () => {
  return (
    <div className={style.container}>
        <form action={AddUser} className={style.form}>
            <input
              type="text"
              placeholder='title'
              name='title'
              required
              className={style.formInput}
            />

            <textarea
              name="description"
              cols={5}
              rows={5}

              placeholder='description'
              className={style.formInput}
            ></textarea>

            <button type='submit' className={style.formButton}>Add Task</button>
        </form>
    </div>
  )
}

export default AddUsers
