
import { useState, useEffect, useRef } from "react"
import './index.css'
import LiveSocket from "../live-socket";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { baseUrl } from "./../../core"
// import { GlobalContext } from '../../context/Context';
// import { useContext } from "react";
import io from 'socket.io-client';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




function LiveAdmin() {
  let history = useHistory();
  const [inputText, setInputText] = useState("");
  // let { state, dispatch } = useContext(GlobalContext);
  // const [posts, setPosts] = useState([])

//   useEffect(() => {
//     const socket = io("http://localhost:5001"); // to connect with locally running Socker.io server

//     socket.on('connect', function () {
//         console.log("connected to server")
//     });
//     socket.on('disconnect', function (message) {
//         console.log("disconnected from server: ", message);
//     });
//     socket.on('POSTS', function (data) {
//         console.log(data);
//         setPosts((prev) => [data, ...prev])
//     });

//     return () => {
//         socket.close();
//     };
// }, []);

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

    <h1 className="heading"> Admin Panel </h1>

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12} sm={4} md={3} lg={2} >
 <Item>
 <TextField 
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          value={inputText}
          onChange={(e) => {
              setInputText(e.target.value)
          }}
        />
 </Item>
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
    <Item>
  <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          value={inputText}
          onChange={(e) => {
              setInputText(e.target.value)
          }}
        />
        </Item>
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          value={inputText}
          onChange={(e) => {
              setInputText(e.target.value)
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          value={inputText}
          onChange={(e) => {
              setInputText(e.target.value)
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          value={inputText}
          onChange={(e) => {
              setInputText(e.target.value)
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          value={inputText}
          onChange={(e) => {
              setInputText(e.target.value)
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
  <Item>
  <TextField
        required
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
  </Item>
  </Grid>
</Grid>
        
       
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
