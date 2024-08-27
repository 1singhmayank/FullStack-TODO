import React from 'react';
import style from '../[id]/update.module.css';
import { UpdateUser } from '../../lib/actions';
import FetchUserId, { FetchUser } from '../../lib/fetch';

// This function generates the static paths for the dynamic route
export async function generateStaticParams() {
  const users = await FetchUser();

  return users.map((user) => ({
    id: user._id.toString(), // Ensure that id is a string
  }));
}

const UpdateUsers = async ({ params }) => {
  const { id } = params;
  const user = await FetchUserId(id);

  return (
    <div className={style.container}>
      <h2 className="ml-[17%] mb-2 font-bold">Update Task Form</h2>
      <form action={UpdateUser} method="POST" className={style.form}>
        <input type="hidden" name="id" value={id} />
        <input
          type="text"
          defaultValue={user.title} // Prefill input with the title
          name="title"
          required
          className={style.formInput}
        />
        <textarea
          name="description"
          cols={5}
          rows={5}
          defaultValue={user.description} // Prefill textarea with the description
          className={style.formInput}
        ></textarea>
        <button type="submit" className={style.formButton}>Update</button>
      </form>
    </div>
  );
};

export default UpdateUsers;
