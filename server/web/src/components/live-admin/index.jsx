
import { useState, useEffect, useRef } from "react"
import liveSocket from "../live-socket";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import { Formik, Field, Form, useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { baseUrl } from "./../../core"
import Box from '@mui/material/Box';

import { GlobalContext } from '../../context/Context';
import { useContext } from "react";
import io from 'socket.io-client';



function LiveAdmin() {
  let history = useHistory();
  const [inputText, setInputText] = useState("");
  let { state, dispatch } = useContext(GlobalContext);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const socket = io("http://localhost:5001"); // to connect with locally running Socker.io server

    socket.on('connect', function () {
        console.log("connected to server")
    });
    socket.on('disconnect', function (message) {
        console.log("disconnected from server: ", message);
    });
    socket.on('POSTS', function (data) {
        console.log(data);
        setPosts((prev) => [data, ...prev])
    });

    return () => {
        socket.close();
    };
}, []);

const submit = () => {
  if (inputText !== "") {
      axios.post(`${baseUrl}/api/v1/post`, {
          postText: inputText
      }, {
          withCredentials: true
      })
          .then((res) => {
              console.log("res: ", res.data);
            
              // alert("post created");

          })
  }
}

  return (
    <div style={{ margin: "1rem" }}>

    <h1> Admin Panel </h1>

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          value={inputText}
          onChange={(e) => {
              setInputText(e.target.value)
          }}
        />
           <br />
          <Button variant="contained" width="100" onClick={submit}>Live</Button>
      </div>
    
      
    </Box>


 
{/* 
    {posts.map((eachPost, index) => (
        <Post key={index} name={eachPost.name} email={eachPost.email} text={eachPost.postText} />
    ))} */}

    <br />

    {/* {(isMore) ? <Button onClick={loadMore}>Load More</Button> : null} */}

</div>
  );
}
export default LiveAdmin;
