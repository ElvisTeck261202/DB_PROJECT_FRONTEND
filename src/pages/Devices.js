import React, {useState, useEffect} from 'react'
import { Delete } from './Components/Delete';
import { Layout } from './Components/Layout';
import { SearchBar } from './Components/SearchBar';
import { Db } from './Components/API'

export const Devices = () => {
const [edit, setEdit] = useState(false)
const [data, setData] = useState([])

const getData = async () => {
  const res = await fetch(`${Db}/device`)
  const data = await res.json()
  console.log(data)
  setData(data)
}
useEffect (() => {
  getData()
}, []);
  return (
    <>
    
    <SearchBar/>

    {/** Modal Window */}
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
                    "Create Device"
                  ):(
                    "Update Device"
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
                <label for="inputR_time" class="form-label">
                  Device Id
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputR_time"
                />
              </div>

              <div class="mb-3">
                <label for="inputR_date" class="form-label">
                  Room Id
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputR_date"
                />
              </div>

              <div class="mb-3">
                <label for="inputR_time" class="form-label">
                  Description
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputR_time"
                />
              </div>

              <div class="mb-3">
                <label for="inputR_time" class="form-label">
                  Conservation Status
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputR_time"
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

    {/** Table */}
    <table class="table">
  <thead>
    <tr>
      <th>Device Id</th>
      <th>Room Id</th>
      <th>Description</th>
      <th>Conservation Status</th>
      <th> </th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
                {data.map((i) =>(
                      <tr key ={i.ID_DEVICE}>
                      <th>{i.ID_DEVICE}</th>
                      <td>{i.ID_ROOM}</td>
                      <td>{i.DESCRIPTION}</td>
                      <td>{i.CONSERVATION_STATUS}</td>
                      <th><Delete/></th>
                      </tr>
                ))}
  </tbody>
</table>
    </>
  )
  }