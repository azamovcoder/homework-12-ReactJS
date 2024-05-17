import React from "react";
import axios from "../../api";

const UserEditModule = ({ setData, data, setReload }) => {
  const handleUpdatedUser = (e) => {
    e.preventDefault();
    let updateUser = {
      name: data.name,
      surname: data.surname,
      phone: data.username,
    };

    axios
      .put(`users/${data.id}`, updateUser)
      .then((res) => {
        setData(null);
        setReload((prev) => !prev);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <div className="overlay" onClick={() => setData(null)}></div>
        <form action="" className="edit-model" onSubmit={handleUpdatedUser}>
          <h2>Edit User</h2>
          <input
            required
            value={data.name}
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            type="text"
          />
          <input
            required
            value={data.surname}
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                surname: e.target.value,
              }))
            }
            type="text"
          />
          <input
            required
            value={data.username}
            onChange={(e) =>
              setData((prev) => ({ ...prev, username: e.target.value }))
            }
            type="text"
          />
          <button>Save</button>
          <button onClick={() => setData(null)}>Cancel</button>
        </form>
      </div>
    </>
  );
};

export default UserEditModule;
