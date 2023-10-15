// import React from 'react'

// const Conversation = () => {
//   return (
//     <div>Conversation</div>
//   )
// }

// export default Conversation

import React from 'react';
import "./style.css"
const ChatRooms = () => {
  return (
    <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 bordered">
      <div className="p-3">
        <div className="input-group rounded mb-3">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <div data-mdb-perfect-scrollbar="true" className='container_rooms' style={{ position: 'relative', height: '400px' }}>
          <ul className="list-unstyled mb-0">
      
          <li className="p-2 border-bottom">
                       <a href="#!" className="d-flex justify-content-between">
                               <div className="d-flex flex-row">
                                 <div>
                                   <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar"
                                    className="d-flex align-self-center me-3"
                                    width="60"
                                  />
                                  <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">Marie Horwitz</p>
                                  <p className="small text-muted">Hello, Are you there?</p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">Just now</p>
                                <span className="badge bg-danger rounded-pill float-end">3</span>
                              </div>
                            </a>
                          </li>
          <li className="p-2 border-bottom">
                       <a href="#!" className="d-flex justify-content-between">
                               <div className="d-flex flex-row">
                                 <div>
                                   <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar"
                                    className="d-flex align-self-center me-3"
                                    width="60"
                                  />
                                  <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">Marie Horwitz</p>
                                  <p className="small text-muted">Hello, Are you there?</p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">Just now</p>
                                <span className="badge bg-danger rounded-pill float-end">3</span>
                              </div>
                            </a>
                          </li>
          <li className="p-2 border-bottom">
                       <a href="#!" className="d-flex justify-content-between">
                               <div className="d-flex flex-row">
                                 <div>
                                   <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar"
                                    className="d-flex align-self-center me-3"
                                    width="60"
                                  />
                                  <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">Marie Horwitz</p>
                                  <p className="small text-muted">Hello, Are you there?</p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">Just now</p>
                                <span className="badge bg-danger rounded-pill float-end">3</span>
                              </div>
                            </a>
                          </li>
          <li className="p-2 border-bottom">
                       <a href="#!" className="d-flex justify-content-between">
                               <div className="d-flex flex-row">
                                 <div>
                                   <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar"
                                    className="d-flex align-self-center me-3"
                                    width="60"
                                  />
                                  <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">Marie Horwitz</p>
                                  <p className="small text-muted">Hello, Are you there?</p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">Just now</p>
                                <span className="badge bg-danger rounded-pill float-end">3</span>
                              </div>
                            </a>
                          </li>
          <li className="p-2 border-bottom">
                       <a href="#!" className="d-flex justify-content-between">
                               <div className="d-flex flex-row">
                                 <div>
                                   <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar"
                                    className="d-flex align-self-center me-3"
                                    width="60"
                                  />
                                  <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">Marie Horwitz</p>
                                  <p className="small text-muted">Hello, Are you there?</p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">Just now</p>
                                <span className="badge bg-danger rounded-pill float-end">3</span>
                              </div>
                            </a>
                          </li>
          <li className="p-2 border-bottom">
                       <a href="#!" className="d-flex justify-content-between">
                               <div className="d-flex flex-row">
                                 <div>
                                   <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar"
                                    className="d-flex align-self-center me-3"
                                    width="60"
                                  />
                                  <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">Marie Horwitz</p>
                                  <p className="small text-muted">Hello, Are you there?</p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">Just now</p>
                                <span className="badge bg-danger rounded-pill float-end">3</span>
                              </div>
                            </a>
                          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatRooms;
