import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  const authStatus = useSelector((state) => state.auth.status);

  // useEffect(() => {
  //   // todo : make it more easy
  //   if (authentication && authStatus !== authentication) {
  //     navigate("/login");
  //   } else if (!authentication && authStatus !== authentication) {
  //     navigate("/");
  //   }
  //   setLoader(false);
  // }, [authStatus, navigate, authentication]);
  useEffect(() => {
    let authValue = authStatus === true ? true : false;

    if (authValue) {
      navigate("/"); // If authenticated, navigate to home
    } else {
      navigate("/login");
      console.log("you need to login first "); // If not authenticated, navigate to login
    }

    setLoader(false);
  }, [authStatus, navigate]);
  return loader ? <h1>loading...</h1> : <>{children}</>;
}

// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// export default function Protected({ children, authentication = true }) {
//   const navigate = useNavigate();
//   const authStatus = useSelector((state) => state.auth.status);

//   useEffect(() => {
//     if (authentication && authStatus !== authentication) {
//       // If authentication is required and user is not authenticated
//       navigate("/login");
//     } else if (!authentication && authStatus === true) {
//       // If authentication is NOT required but user is authenticated
//       navigate("/");
//     }
//   }, [authStatus, navigate, authentication]);

//   // Show loading until auth status is determined
//   if (authStatus === null) {
//     return <h1>Loading...</h1>;
//   }

//   return <>{children}</>;
// }
