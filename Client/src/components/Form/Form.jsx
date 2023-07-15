// import styles from "../Form/Form.module.css";
// import React from "react";
// import { useState, useEffect } from "react";
// import validate from "./validate";

// export default function Form({ login }) {
//   const [userData, setUserData] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({ email: "", password: "" });

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;

//     setUserData((prevUserData) => ({
//       ...prevUserData,
//       [name]: value,
//     }));

//     setErrors(validate({ ...userData, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (Object.keys(errors).length === 0) {
//       login(userData);
//     }
//   };

//   useEffect(() => {
//     console.log(userData);
//   }, [userData]);

//   return (
//     <div className={styles.container}>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email: </label>
//           <input
//             className={errors.email && styles.warning}
//             name="email"
//             value={userData.email}
//             type="text"
//             onChange={handleChange}
//             placeholder="email"
//             autoComplete="email"
//           />
//           <p className={styles.danger}>{errors.email}</p>
//         </div>

//         <div>
//           <label>Password: </label>
//           <input
//             className={errors.password && styles.warning}
//             name="password"
//             value={userData.password}
//             type="password"
//             onChange={handleChange}
//             placeholder="clave"
//             autoComplete="current-password"
//           />
//           <p className={styles.danger}>{errors.password}</p>
//         </div>
//         <button className={styles.btn} type="submit">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

import styles from "../Form/Form.module.css";
import React from "react";
import { useState } from "react";
import validate from "./validate";

export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(
      validate({
        inputs: {
          ...userData,
          [name]: value,
        },
      })
    );
  }

  function handleSubmit() {
    props.login(userData);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            className={errors.name && "warning"}
            name="email"
            value={userData.email}
            type="text"
            onChange={handleInputChange}
            placeholder="email"
          />
          <p className={styles.danger}>
            {errors.username ? errors.username : null}
          </p>
        </div>

        <div>
          <label>Password: </label>
          <input
            className={errors.name && "warning"}
            name="password"
            value={userData.password}
            type="password"
            onChange={handleInputChange}
            placeholder="clave"
          />
          <p className={styles.danger}>
            {errors.password ? errors.password : null}
          </p>
        </div>
        <button className={styles.btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
