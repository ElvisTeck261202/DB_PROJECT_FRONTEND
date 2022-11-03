import React, {useState, useEffect}from 'react';
import { Layout } from './Components/Layout';
import { SearchBar} from './Components/SearchBar';
import { Delete } from './Components/Delete'
import { Db } from './Components/API'

export const Rooms = () => {
  const [edit, setEdit] = useState(false)
  const [data, setData] = useState([])

  const getData = async() => {
    const res = await fetch(`${Db}/room`)
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
    <table class="table">
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
                <label for="inputR_id" class="form-label">
                  Room Id
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputR_id"
                />
              </div>

              <div class="mb-3">
                <label for="inputlocation" class="form-label">
                  Location
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputl"
                />
              </div>

              
              <div class="mb-3">
                <label for="inputsm" class="form-label">
                  Square Meters
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputsm"
                />
              </div>


              <div class="mb-3">
                <label for="inputtr" class="form-label">
                  Type of room
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputtr"
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
  <thead>
    <tr>
      <th>Room Id</th>
      <th>Location</th>
      <th>Square Meters</th>
      <th>Type of Room</th>
      <th>Class Assigned</th>
      <th> </th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
    {data.map((i) => (
    <tr KEY = {i.ID_ROOM}>
    <th>{i.ID_ROOM}</th>
    <td>{i.LOCATION}</td>
    <td>{i.SQUARE_METERS}</td>
    <td>{i.TYPE_ROOM}</td>
    <td>  </td>
    <td></td>
    <td><Delete/></td>
    </tr>
    ))
    }

  </tbody>
</table>
    </>
  )
}