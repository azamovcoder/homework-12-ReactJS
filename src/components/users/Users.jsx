import "../products/products.scss";

import React, { useState } from "react";

import Loading from "../loading/Loading";
import UserEditModule from "../userEditModule";
import axios from "../../api";

const Users = ({ data, isAdmin, setReload, loading }) => {
  const [editUser, setEditUser] = useState(null);
  const handleDelete = (id) => {
    if (confirm("Are you sure")) {
      axios
        .delete(`users/${id}`)
        .then((res) => {
          setReload((p) => !p);
          console.log(res);
        })
        .catch((res) => console.log(res));
    }
  };
  const handleEdit = (user) => {
    setEditUser(user);
  };

  let userItem = data?.map((user) => (
    <div className="products__card" key={user.id}>
      <div className="products__img">
        <img src={user.img} alt="" />
      </div>
      <h3>{user.name}</h3>
      <p>{user.surname}</p>
      <p>{user.age}</p>
      <p>{user.username}</p>
      {isAdmin ? (
        <>
          <button className="btn__edit" onClick={() => handleEdit(user)}>
            Edit
          </button>
          <button onClick={() => handleDelete(user.id)} className="btn__delete">
            Delete
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  ));
  return (
    <div>
      <div className="users products">{loading ? <Loading /> : userItem}</div>
      {editUser ? (
        <UserEditModule
          setData={setEditUser}
          data={editUser}
          setReload={setReload}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Users;
