import React, { Component } from 'react';

export default function UserTable({ list, onLoad, onDelete }) {
  const handleOnLoad = (event) => {
    console.log('Clicou no load!');
    console.log(event);
    console.log(event.target);
    console.log(event.user);
    const user = event.target.value;

    console.log(user);
    console.log(user.name);
    onLoad(user);
  };

  const handleOnDelete = (event) => {
    console.log(event.target.id);
    const id = event.target.id;
    console.log(id);
    //onDelete(id);
  };

  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {' '}
        {list
          .sort((a, b) => {
            return a.id > b.id;
          })
          .map((user) => {
            return (
              <tr key={user.id}>
                <td> {user.id}</td>
                <td> {user.name}</td>
                <td> {user.email}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    value={user}
                    onClick={handleOnLoad}
                  >
                    <i className="fa fa-pencil"></i>
                  </button>
                  <button
                    className="btn btn-danger ml-2"
                    id={user.id}
                    onClick={handleOnDelete}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
