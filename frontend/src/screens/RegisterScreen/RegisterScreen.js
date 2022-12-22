
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate  } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
// import { register } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
// import "./RegisterScreen.css";
import axios from "axios";

const RegisterScreen = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pic, setPic] = useState(
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    );
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [picMessage, setPicMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
 

    const submitHandler =async (e) => {
        e.preventDefault();
        
    
        if (password !== confirmpassword) {
          setMessage("Passwords do not match");
        } else {

            try{
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                };

                setLoading(true);
                const {data}=await axios.post("api/users",{name,email,password},config);
                setLoading(false);
                localStorage.setItem("userInfo",JSON.stringify(data));
                navigate(-1)

            }catch(error){
                setError(error.response.data.message);

            }


        }
    };
   


    

    return (
        <MainScreen title="REGISTER">
          <div className="loginContainer">
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
            {loading && <Loading />}
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  value={name}
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
    
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
    
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
    
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmpassword}
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
    
              {/* {picMessage && (
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )} */}
              <Form.Group controlId="pic">
                <Form.Label>Profile Picture</Form.Label>
                {/* <Form.File
                
                  id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                
                /> */}
                <Form.Control 
                type="file"
                //   onChange={(e) => postDetails(e.target.files[0])}

                 />
              </Form.Group>
    
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
            <Row className="py-3">
              <Col>
                Have an Account ? <Link to="/login">Login</Link>
              </Col>
            </Row>
          </div>
        </MainScreen>
      )
 
};

export default RegisterScreen;
