import React from 'react'
import style from '../[id]/update.module.css'
import AddUser, { UpdateUser } from '../../lib/actions'
import FetchUser from '../../lib/fetch'
import FetchUserId from '../../lib/fetch'
const UpdateUsers = async ({params}) => {

  const {id}  = params
  const users = await FetchUserId(id)

  return (
    <div className={style.container}>
      <h2 className='ml-[17%] mb-2 font-bold '>Update Task Form</h2>
        <form action={UpdateUser} className={style.form}>
          <input type='hidden' name='id' value={id} />
            <input
              type="text"
              placeholder={users.title}
              name='title'
              required
              className={style.formInput}
            />

            <textarea
              name="description"
              cols={5}
              rows={5}

              placeholder={users.description}
              className={style.formInput}
            ></textarea>

            <button type='submit' className={style.formButton}>Update</button>
        </form>
    </div>



  )
}

export default UpdateUsers;
