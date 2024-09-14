// import React, { useEffect, useState } from "react";
// import "./Nav.css";
// function Nav() {
//   const [show, handleShow] = useState(false);
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         handleShow(true);
//       } else handleShow(false);
//     });
//     return () => {
//       window.removeEventListener("scroll");
//     };
//   }, []);
//   return (
//     <div className={`nav${show && "nav_black"}`}>
//       <img
//         className="nav_logo"
//         src="https://media.idownloadblog.com/wp-content/uploads/2018/01/Netflix-Logo.png"
//         alt="Netflix Logo"
//       />
//       <img
//         className="nav_avatar"
//         src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
//         alt="avatar logo"
//       />
//     </div>
//   );
// }

// export default Nav;
import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollX > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://media.idownloadblog.com/wp-content/uploads/2018/01/Netflix-Logo.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Avatar Logo"
      />
    </div>
  );
}

export default Nav;
