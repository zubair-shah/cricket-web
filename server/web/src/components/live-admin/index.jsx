
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
  const [livePost, setlivePost] = useState({
    teamA: "",
        teamB: "",
        batA: "",
        batB: "",
        bowler: "",
        bowl: "",
        wicket:"",
        toss:"",
  });
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
useEffect(() => {
  axios.get(`${baseUrl}/api/v1/live`)
  .then((res)=>{
   console.log("res +++" , res.data)
   setlivePost(res.data)
  })
}, [])


const submit = () => {
      axios.post(`${baseUrl}/api/v1/live`, livePost)
          .then((res) => {
              console.log("res: ", res.data);
              // alert("post created");
          })
          .catch((err) =>{
            console.log(err)
          })
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
          label="Team A Name"
          defaultValue="Default Value"
          value={livePost.teamA}
          onChange={(e) => {
              setlivePost((prev) => {
                return{...prev , teamA: e.target.value}
              })
          }}
        />
 </Item>
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
    <Item>
  <TextField
          id="outlined-helperText"
          label="Team B Name"
          defaultValue="Default Value"
          value={livePost.teamB}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , teamB: e.target.value}
              })
          }}
        />
        </Item>
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Batsman One "
          defaultValue="Default Value"
          value={livePost.batA}
          onChange={(e) => {
              setlivePost((prev) =>{
               return{...prev , batA:e.target.value}}
                )
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Batsman B Name"
          defaultValue="Default Value"
          value={livePost.batB}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , batB:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="bat"
          defaultValue="Default Value"
          value={livePost.bat}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , bat:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Bowl"
          defaultValue="Default Value"
          value={livePost.bowl}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , bowl:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
  <Item>
  <TextField
        required
          id="outlined-number"
          label="Bowler"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={livePost.bowler}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , bowler:e.target.value}
              })
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
