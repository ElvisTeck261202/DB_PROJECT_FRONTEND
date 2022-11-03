import React, { useState, useEffect } from 'react'
import { Delete } from './Components/Delete';
import { Layout } from './Components/Layout';
import { SearchBar } from './Components/SearchBar';
import { Db } from './Components/API';

export const Member = () => {
  const  [edit, setEdit] = useState(false)
  const  [data, setData] = useState([])

  const getData = async() => {
    const res = await fetch(`${Db}/member`)
    const data = await res.json()
    console.log(data)
    setData(data)
  }
  useEffect (() => {
    getData();
  }, []);
  return (
    <>
    
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
                <label for="inputM_num" class="form-label">
                  Membership Num
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputM_num"
                />
              </div>

              <div class="mb-3">
                <label for="inputM_fn" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputM_fn"
                />
              </div>

              <div class="mb-3">
                <label for="inputM_ln" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputM_ln"
                />
              </div>

              <div class="mb-3">
                <label for="inputM_a" class="form-label">
                  Adress
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputM_a"
                />
              </div>

              <div class="mb-3">
                <label for="inputM_p" class="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputM_p"
                />
              </div>

              <div class="mb-3">
                <label for="inputM_bi" class="form-label">
                  Bank Information
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputM_bi"
                />
              </div>

              <div class="mb-3">
                <label for="inputM_pr" class="form-label">
                  Profession
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputM_pr"
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
      <th>Membership Number</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Adress</th>
      <th>Phone</th>
      <th>Bank Infromation</th>
      <th>Profession</th>
      <th>Attend Class</th>
      <th> </th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
      {data.map((i) =>(
            <tr key = {i.MEMEBERSHIP_NUM}>
            <th>{i.MEMBERSHIP_NUM}</th>
            <td>{ i.M_NAME }</td>
            <td>{ i.M_LNAME }</td>
            <td>{ i.ADRESS }</td>
            <td>{ i.M_PHONE }</td>
            <td>{ i.BANK_INFO }</td>
            <td>{ i.PROFESSION }</td>
            <td>yoga</td>
            <td><Delete/></td>
            </tr>
      ))}
  </tbody>
</table>
    </>
  )
}