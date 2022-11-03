import React, {useState, useEffect} from "react";
import { Delete } from "./Components/Delete";
import { Layout } from "./Components/Layout";
import { SearchBar } from "./Components/SearchBar";
import { Db } from './Components/API';


 
export const Reservation = () => {
  const [edit, setEdit] = useState(false)
  const [data, setData] = useState([])

  
  
  const getData = async() => {
    const res = await fetch(`${Db}/reservation`)
    const data = await res.json()
    console.log(data)
    setData(data)
  }
useEffect (() => {
  getData();
}, []);

  return (
    <>
     
      <SearchBar />
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
                  Reservation Date
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputR_date"
                />
              </div>

              <div class="mb-3">
                <label for="inputR_time" class="form-label">
                  Reservation Time
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
      <table class="table">
        <thead>
          <tr>
            <th>Reservation Id</th>
            <th>Squash Court Id</th>
            <th>Memebrship Num</th>
            <th>Reservation Date</th>
            <th>Reservation Time</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
            {data.map((i) =>(
              <tr key={i.RESERVATION_ID}>
                 <th>{i.RESERVATION_ID}</th>
               <td>{i.ID_SQUASH}</td>
               <td>{i.MEMBERSHIP_NUM}</td>
               <td>{i.R_DATE}</td>
               <td>{i.R_TIME}</td>
               <td></td>
               <th>
                 <Delete />
               </th>
              </tr>
              
            ))
            }
           
        
        </tbody>
      </table>
    </>
  );
};
