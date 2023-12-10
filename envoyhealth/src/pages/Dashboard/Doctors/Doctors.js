import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Doctors() {
  const [AllDr, setAllDr] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:7000/doctor/doctors")
      .then((response) => {
        console.log("response : ", response.data);
        setAllDr(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error : ", error);
      });

    console.log(AllDr);
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <span className='fs-2 fw-medium'> Doctors </span>
            <Link to={"/dashboard/Adddr"} className="btn btn-primery float-end btn btn-warning text-white">Add Doctor</Link>
          </div>
        </div>


        <div className="row my-3 cart">
          <div className="col">
            <div className="table-responsive border">
              <table className="table table-hover align-middle align-middle">
                <thead className='table-dark'>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone No</th>
                    <th scope="col">mail</th>
                    <th scope="col">speciallization</th>
                    <th scope="col">education</th>
                    <th scope="col">fee</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    AllDr.map((dr, i) => {
                      return (
                        <tr>
                          <th scope="row">{i+1}</th>
                          <td>{dr.name}</td>
                          <td>{dr.phone}</td>
                          <td>{dr.email}</td>
                          <td>{dr.speciallization}</td>
                          <td>{dr.education}</td>
                          <td>$ {dr.fee}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="container paginat position-absolute bottom-0 end-0">
        <div className="row">
          <div className="col">
            <ul className="pagination modal-4 float-end">
              <li><a href="#" className="prev">
                <i className="fa fa-chevron-left"></i>
                Previous
              </a>
              </li>
              <li><a href="#">1</a></li>
              <li> <a href="#">2</a></li>
              <li> <a href="#" className="active">3</a></li>
              <li> <a href="#">4</a></li>
              <li><a href="#" className="next"> Next
                <i className="fa fa-chevron-right"></i>
              </a></li>
            </ul>
          </div>
        </div>
      </div> */}
    </>


  )
}
