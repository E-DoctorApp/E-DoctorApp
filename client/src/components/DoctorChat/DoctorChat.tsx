// import React from 'react'
// import SideBar from '../DoctorProfile/SideBar'
// // import { Outlet } from "react-router";
// import "./style.css"


// const DoctorChat = () => {
//   return (
//     <div>
//         <section style={{ backgroundColor: '#CDC4F9' }}>
//       <div className="container py-5">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="card chat-card" style={{ borderRadius: '15px' }}>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 bordered">
//                     <div className="p-3">
//                       <div className="input-group rounded mb-3">
//                         <input
//                           type="search"
//                           className="form-control rounded"
//                           placeholder="Search"
//                           aria-label="Search"
//                           aria-describedby="search-addon"
//                         />
//                         <span className="input-group-text border-0" id="search-addon">
//                           <i className="fas fa-search"></i>
//                         </span>
//                       </div>
//                       <div data-mdb-perfect-scrollbar="true" className='container_rooms '   style={{ position: 'relative', height: '400px' }}>
//                         <ul className="list-unstyled mb-0 ">
//                           <li className="p-2 border-bottom">
//                             <a href="#!" className="d-flex justify-content-between">
//                               <div className="d-flex flex-row">
//                                 <div>
//                                   <img
//                                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                                     alt="avatar"
//                                     className="d-flex align-self-center me-3"
//                                     width="60"
//                                   />
//                                   <span className="badge bg-success badge-dot"></span>
//                                 </div>
//                                 <div className="pt-1">
//                                   <p className="fw-bold mb-0">Marie Horwitz</p>
//                                   <p className="small text-muted">Hello, Are you there?</p>
//                                 </div>
//                               </div>
//                               <div className="pt-1">
//                                 <p className="small text-muted mb-1">Just now</p>
//                                 <span className="badge bg-danger rounded-pill float-end">3</span>
//                               </div>
//                             </a>
//                           </li>
//                           <li className="p-2 border-bottom">
//                             <a href="#!" className="d-flex justify-content-between">
//                               <div className="d-flex flex-row">
//                                 <div>
//                                   <img
//                                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                                     alt="avatar"
//                                     className="d-flex align-self-center me-3"
//                                     width="60"
//                                   />
//                                   <span className="badge bg-success badge-dot"></span>
//                                 </div>
//                                 <div className="pt-1">
//                                   <p className="fw-bold mb-0">Marie Horwitz</p>
//                                   <p className="small text-muted">Hello, Are you there?</p>
//                                 </div>
//                               </div>
//                               <div className="pt-1">
//                                 <p className="small text-muted mb-1">Just now</p>
//                                 <span className="badge bg-danger rounded-pill float-end">3</span>
//                               </div>
//                             </a>
//                           </li>
//                           <li className="p-2 border-bottom">
//                             <a href="#!" className="d-flex justify-content-between">
//                               <div className="d-flex flex-row">
//                                 <div>
//                                   <img
//                                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                                     alt="avatar"
//                                     className="d-flex align-self-center me-3"
//                                     width="60"
//                                   />
//                                   <span className="badge bg-success badge-dot"></span>
//                                 </div>
//                                 <div className="pt-1">
//                                   <p className="fw-bold mb-0">Marie Horwitz</p>
//                                   <p className="small text-muted">Hello, Are you there?</p>
//                                 </div>
//                               </div>
//                               <div className="pt-1">
//                                 <p className="small text-muted mb-1">Just now</p>
//                                 <span className="badge bg-danger rounded-pill float-end">3</span>
//                               </div>
//                             </a>
//                           </li>
//                           <li className="p-2 border-bottom">
//                             <a href="#!" className="d-flex justify-content-between">
//                               <div className="d-flex flex-row">
//                                 <div>
//                                   <img
//                                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                                     alt="avatar"
//                                     className="d-flex align-self-center me-3"
//                                     width="60"
//                                   />
//                                   <span className="badge bg-success badge-dot"></span>
//                                 </div>
//                                 <div className="pt-1">
//                                   <p className="fw-bold mb-0">Marie Horwitz</p>
//                                   <p className="small text-muted">Hello, Are you there?</p>
//                                 </div>
//                               </div>
//                               <div className="pt-1">
//                                 <p className="small text-muted mb-1">Just now</p>
//                                 <span className="badge bg-danger rounded-pill float-end">3</span>
//                               </div>
//                             </a>
//                           </li>
//                           <li className="p-2 border-bottom">
//                             <a href="#!" className="d-flex justify-content-between">
//                               <div className="d-flex flex-row">
//                                 <div>
//                                   <img
//                                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                                     alt="avatar"
//                                     className="d-flex align-self-center me-3"
//                                     width="60"
//                                   />
//                                   <span className="badge bg-success badge-dot"></span>
//                                 </div>
//                                 <div className="pt-1">
//                                   <p className="fw-bold mb-0">Marie Horwitz</p>
//                                   <p className="small text-muted">Hello, Are you there?</p>
//                                 </div>
//                               </div>
//                               <div className="pt-1">
//                                 <p className="small text-muted mb-1">Just now</p>
//                                 <span className="badge bg-danger rounded-pill float-end">3</span>
//                               </div>
//                             </a>
//                           </li>
//                           <li className="p-2 border-bottom">
//                             <a href="#!" className="d-flex justify-content-between">
//                               <div className="d-flex flex-row">
//                                 <div>
//                                   <img
//                                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                                     alt="avatar"
//                                     className="d-flex align-self-center me-3"
//                                     width="60"
//                                   />
//                                   <span className="badge bg-success badge-dot"></span>
//                                 </div>
//                                 <div className="pt-1">
//                                   <p className="fw-bold mb-0">Marie Horwitz</p>
//                                   <p className="small text-muted">Hello, Are you there?</p>
//                                 </div>
//                               </div>
//                               <div className="pt-1">
//                                 <p className="small text-muted mb-1">Just now</p>
//                                 <span className="badge bg-danger rounded-pill float-end">3</span>
//                               </div>
//                             </a>
//                           </li>
//                           <li className="p-2 border-bottom">
//                             <a href="#!" className="d-flex justify-content-between">
//                               <div className="d-flex flex-row">
//                                 <div>
//                                   <img
//                                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                                     alt="avatar"
//                                     className="d-flex align-self-center me-3"
//                                     width="60"
//                                   />
//                                   <span className="badge bg-success badge-dot"></span>
//                                 </div>
//                                 <div className="pt-1">
//                                   <p className="fw-bold mb-0">Marie Horwitz</p>
//                                   <p className="small text-muted">Hello, Are you there?</p>
//                                 </div>
//                               </div>
//                               <div className="pt-1">
//                                 <p className="small text-muted mb-1">Just now</p>
//                                 <span className="badge bg-danger rounded-pill float-end">3</span>
//                               </div>
//                             </a>
//                           </li>
//                           <li className="p-2 border-bottom">
//                             <a href="#!" className="d-flex justify-content-between">
//                               <div className="d-flex flex-row">
//                                 <div>
//                                   <img
//                                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
//                                     alt="avatar"
//                                     className="d-flex align-self-center me-3"
//                                     width="60"
//                                   />
//                                   <span className="badge bg-warning badge-dot"></span>
//                                 </div>
//                                 <div className="pt-1">
//                                   <p className="fw-bold mb-0">Alexa Chung</p>
//                                   <p className="small text-muted">Lorem ipsum dolor sit.</p>
//                                 </div>
//                               </div>
//                               <div className="pt-1">
//                                 <p className="small text-muted mb-1">5 mins ago</p>
//                                 <span className="badge bg-danger rounded-pill float-end">2</span>
//                               </div>
//                             </a>
//                           </li>
//                           {/* Add the remaining list items here */}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6 col-lg-7 col-xl-8">
//                     <div className="pt-3 pe-3" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '400px' }}>
//                       <div className="d-flex flex-row justify-content-start">
//                         <img
//                           src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
//                           alt="avatar 1"
//                           style={{ width: '45px', height: '100%' }}
//                         />
//                         <div>
//                           <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: '#f5f6f7' }}>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                           </p>
//                           <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
//                         </div>
//                       </div>
//                       {/* Add more chat messages here */}
//                     </div>
//                     <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
//                       <img
//                         src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
//                         alt="avatar 3"
//                         style={{ width: '40px', height: '100%' }}
//                       />
//                       <input
//                         type="text"
//                         className="form-control form-control-lg"
//                         id="exampleFormControlInput2"
//                         placeholder="Type message"
//                       />
//                       <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip"></i></a>
//                       <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile"></i></a>
//                       <a className="ms-3" href="#!"><i className="fas fa-paper-plane"></i></a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     </div>
//   )
// }

// export default DoctorChat
import React from 'react';
import SideBar from '../DoctorProfile/SideBar'
import "./style.css"
import ChatList from './ChatRooms';
import ChatRoom from './Conversation';

const DoctorChat = () => {
  return (
    <div>
      <section style={{ backgroundColor: '#CDC4F9' }}>
        <div className="container py-5">
          <div className="row">
            <ChatList />
            <ChatRoom />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorChat;
