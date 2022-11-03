import React, { useState, useEffect} from 'react'
import { Layout } from './Components/Layout';
import { SearchBar } from './Components/SearchBar';
import { Delete } from './Components/Delete';
import { Db } from './Components/API';

export const Class = () => {
  const [edit, setEdit] = useState(false)
  const [data, setData] = useState([])

  const getData = async() => {
    const res = await fetch(`${Db}/classe`)
    const data = await res.json()
    console.log(data)
    setData(data)
  }

useEffect (() => {
  getData();
}, []);
  return (
    <>
    <Layout/>
    <SearchBar/>

          {/**Modal window */}

          <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
                {
                  !edit? (
                    "Create Reservation"
                  ):(
                    "Update Reservation"
                  )
                }
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="inputR_date" class="form-label">
                  Class Id
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputC_Id"
                />
              </div>

              <div class="mb-3">
                <label for="inputR_time" class="form-label">
                  Instructor SNO
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputI_SNO"
                />
              </div>

              <div class="mb-3">
                <label for="inputR_time" class="form-label">
                  Description
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputD"
                />
              </div>

              <div class="mb-3">
                <label for="inputR_time" class="form-label">
                  Room Assigned
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputR_Assinged"
                />
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    <table class="table">
  <thead>
    <tr>
      <th>Class Id</th>
      <th>Instructor SNO</th>
      <th>Description</th>
      <th>Room Assigned</th>
      <th> </th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
                {data.map((i) => (
                   <tr key = {i.ID_CLASS}>
                    <th>{i.ID_CLASS}</th>
                    <td>{i.SNO}</td>
                    <td>{i.DESCRIPTION}</td>
                    <td></td>
                    <td> </td>
                    <td><Delete/> </td>
                    </tr>
                ))}
  </tbody>
</table>
    </>
  )
}
