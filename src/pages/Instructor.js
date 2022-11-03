import React , { useState, useEffect } from 'react'
import { Layout} from './Components/Layout';
import { SearchBar } from './Components/SearchBar';
import { Db } from './Components/API';

export const Instructor = () => {
  const [edit, setEdit] = useState(false)
  const [data, setData] = useState ([])
  const [sno, setSno] = useState("")
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [phone, setPhone] = useState("")
  const [degree, setDegree] = useState("")
  const [pexp, setPexp] = useState("") 
 
  const getData = async() => {
    const res = await fetch(`${Db}/instructor`)
    const data = await res.json()
    console.log(data)
    setData(data)
  }

  const DeleteData = async(sno) => {
    await fetch(`${Db}/instructor/${sno}`,{ 
      method: 'DELETE'
    })

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
                <label for="inputI_SNO" class="form-label">
                  Instructor SNO
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputR_date"
                />
              </div>

              <div class="mb-3">
                <label for="inputI_fn" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputI_fn"
                />
              </div>

              <div class="mb-3">
                <label for="inputI_ln" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputI_ln"
                />
              </div>

              <div class="mb-3">
                <label for="inputI_ph" class="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputI_ph"
                />
              </div>

              <div class="mb-3">
                <label for="inputI_d" class="form-label">
                  Degree
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputI_d"
                />
              </div>

              <div class="mb-3">
                <label for="inputI_pe" class="form-label">
                  Professional Experience
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputI_pe"
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
      <th>Istructor SNO</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Phone</th>
      <th>Degree</th>
      <th>Professional Experience</th>
      <th> </th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
     {data.map((i) => (
          <tr key= { i.SNO }>
          <th>{ i.SNO }</th>
          <td>{ i.FNAME }</td>
          <td>{ i.LNAME }</td>
          <td>{ i.PHONE }</td>
          <td>{ i.DEGREE }</td>
          <td>{ i.PROFESIONAL_EXP }</td>
          <th></th>
          <th><button type="button" class="btn btn-danger" onClick={DeleteData(i.SNO)}>Delete</button></th>
          </tr>
     ))}           
  </tbody>
</table>
</>
  )
}