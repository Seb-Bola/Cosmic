import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useAuth0 } from "@auth0/auth0-react";
const Signin = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};
export default Signin;
//   const navigate = useNavigate();
//   const [account, setAccount] = useState(null);
//   const { currentUser, setCurrentUser } = useContext(UserContext);

//   useEffect(() => {
//     fetch("/api/users")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setAccount(data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleChange = (key, value) => {
//     setAccount({
//       ...account,
//       [key]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     fetch("/api/signin", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username: account.name }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.status === 400) {
//           window.alert("Please enter a account");
//         } else {
//           sessionStorage.setItem("storedUser", JSON.stringify(data.data));
//           setCurrentUser(data.data);
//           navigate(`/`);
//         }
//       })
//       .catch((error) => {
//         window.alert(error);
//       });
//   };

//   if (currentUser) {
//     navigate("/");
//   }
//   return (
//     <>
//       {/* {!account ? (
//         <h1>Loading content...</h1>
//       ) : ( */}
//       <LogIn>
//         <Form onSubmit={handleSubmit}>
//           <label>Account</label>
//           <Input
//             placeholdder="Enter your name"
//             type="text"
//             id="name"
//             onChange={(event) =>
//               handleChange(event.target.id, event.target.value)
//             }
//           />
//           <label>Password</label>
//           <Input
//             placeholdder="Enter your name"
//             type="text"
//             id="name"
//             onChange={(event) =>
//               handleChange(event.target.id, event.target.value)
//             }
//           />

//           <Button type="submit">Sign in</Button>
//         </Form>
//       </LogIn>
//       {/* )} */}
//     </>
//   );
// };
// export default Signin;

// const LogIn = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;
// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   background-color: red;
//   box-shadow: 0px 0px 30px purple;
// `;
// const Input = styled.input`
//   margin: 10px;
//   opacity: 100%;
// `;

// const Button = styled.button`
//   margin: 10px;
//   opacity: 100%;
//   background-color: green;
// `;
