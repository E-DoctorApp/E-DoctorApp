// import React from 'react'

// const ChatRooms = () => {
//   return (
//     <div>ChatRooms</div>
//   )
// }

// export default ChatRooms


import React from 'react';
import "./style.css"
// const Conversation = () => {
//   return (
//     <div className="col-md-6 col-lg-7 col-xl-8">
//       <div className="pt-3 pe-3" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '400px' }}>
//         <div className="d-flex flex-row justify-content-start">
//           <img
//             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
//             alt="avatar 1"
//             style={{ width: '45px', height: '100%' }}
//           />
//           <div>
//             <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: '#f5f6f7' }}>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//             <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
//           </div>
//         </div>
//         {/* Add more chat messages here */}
//         <div className="d-flex flex-row justify-content-start">
//           <img
//             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
//             alt="avatar 1"
//             style={{ width: '45px', height: '100%' }}
//           />
//           <div>
//             <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: 'blue', color: 'white' }}>
//               This is a response with a blue background.
//             </p>
//             <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:15 PM | Aug 13</p>
//           </div>
//         </div>
//       </div>
//       <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
//         <img
//           src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
//           alt="avatar 3"
//           style={{ width: '40px', height: '100%' }}
//         />
//         <input
//           type="text"
//           className="form-control form-control-lg"
//           id="exampleFormControlInput2"
//           placeholder="Type message"
//         />
//         <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip"></i></a>
//         <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile"></i></a>
//         <a className="ms-3" href="#!"><i className="fas fa-paper-plane"></i></a>
//       </div>
//     </div>
//   );
// };
const Conversation = () => {
  return (
    <div className="col-md-6 col-lg-7 col-xl-8">
      <div className="pt-3 pe-3" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '400px' }}>
        {/* Conversation messages from User 1 */}
        <div className="d-flex flex-row justify-content-start">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
            alt="User 1"
            style={{ width: '45px', height: '100%' }}
          />
          <div>
            <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: '#f5f6f7' }}>
              Message from User 1
            </p>
            <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
          </div>
        </div>

        {/* Conversation messages from User 2 */}
        <div className="d-flex flex-row justify-content-end">
          <div>
            <p className="small p-2 me-3 mb-1 rounded-3" style={{ backgroundColor: 'blue', color: 'white' }}>
              Message from User 2
            </p>
            <p className="small me-3 mb-3 rounded-3 text-muted text-end">12:15 PM | Aug 13</p>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
            alt="User 2"
            style={{ width: '45px', height: '100%' }}
          />
        </div>

        {/* Add more chat messages here, alternating between users */}
      </div>
      <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
          alt="User 1"
          style={{ width: '40px', height: '100%' }}
        />
        <input
          type="text"
          className="form-control form-control-lg"
          id="exampleFormControlInput2"
          placeholder="Type message"
        />
        <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip"></i></a>
        <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile"></i></a>
        <a className="ms-3" href="#!"><i className="fas fa-paper-plane"></i></a>
      </div>
    </div>
  );
};

export default Conversation;