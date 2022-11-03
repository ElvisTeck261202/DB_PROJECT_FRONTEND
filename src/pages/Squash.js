import React, {useState, useEffect} from 'react'
import { Delete } from './Components/Delete';
import { Layout } from './Components/Layout';
import { SearchBar } from './Components/SearchBar';
import { Db } from './Components/API'

export const Squash = () => {
 const [edit, setEdit] = useState(false)
 const [data, setData] = useState([])

 const getData = async() => {
  const res = await fetch(`${Db}/court`)
  const data = await res.json()
  console.log(data)
  setData(data)
 }

 useEffect(() => {
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
                <label for="inputsc_id" class="form-label">
                  Squash Court Id
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputsc_id"
                />
              </div>

              <div class="mb-3">
                <label for="inputl_id" class="form-label">
                  Location 
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputl_id"
                />
              </div>

              <div class="mb-3">
                <label for="inputc" class="form-label">
                  Condition
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputc"
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
      <th>Squash Court Id</th>
      <th>Location</th>
      <th>Condition</th>
      <th> </th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
                {data.map((i) => (
                      <tr key = {i.ID_SQUASH}>
                      <th>{i.ID_SQUASH}</th>
                      <td>{i.LOCATION}</td>
                      <td>{i.S_CONDITION}</td>
                      <td></td>
                      <td><Delete/></td>
                      </tr>
                ))}
  </tbody>
</table>
    </>
  )
}