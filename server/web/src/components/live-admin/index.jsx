
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
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
    tossWinner:"",
    choiceOfToss:"",
    target: "",
    batA: "",
    batB: "",
    bowler: "",
    bowl: "",
    wicket:"",
    winnerTeam:"",
    winnerBywickets :"",
    winnerByruns:""
  });
  // let { state, dispatch } = useContext(GlobalContext);
  // const [posts, setPosts] = useState([])
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
const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div style={{ margin: "1rem" , padding: "2rem" }}>

    <h1 className="heading" > Admin Panel </h1>

    {/* =============================general============================ */}
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h3" gutterBottom component="div">
      General
      </Typography>
      <div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={4} md={3} lg={2} >
 <Item>
 {/* demo-simple-select-helper-label */}

 <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Select Team A</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={livePost.teamA}
          label="Age"
          // onChange={handleChange}
          onChange={(e) => {
            setlivePost((prev) => {
              return{...prev , teamA: e.target.value}
            })
        }}
        >
          <MenuItem value={"pakistan"}>
            <em>Pakistan</em>
          </MenuItem>
          <MenuItem value={"India"}>India</MenuItem>
          <MenuItem value={"Australia"}>Australia</MenuItem>
          <MenuItem value={"England"}>England</MenuItem>
          <MenuItem value={"WestIndies"}>WestIndies</MenuItem>
          <MenuItem value={"Newzealand"}>Newzealand</MenuItem>
          <MenuItem value={"SouthAfrica"}>South Africa</MenuItem>
          <MenuItem value={"Srilanka"}>Srilanka</MenuItem>
          <MenuItem value={"Bangladesh"}>Bangladesh</MenuItem>
          <MenuItem value={"AfghaNistan"}>AfghaNistan</MenuItem>
          <MenuItem value={"Scotland"}>Scotland</MenuItem>
          <MenuItem value={"Namebia"}>Namebia</MenuItem>
        </Select>
      </FormControl>
 </Item>
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2} >
 <Item>

 <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Select Team B</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={livePost.teamB}
          label="Age"
          // onChange={handleChange}
          onChange={(e) => {
            setlivePost((prev) => {
              return{...prev , teamB: e.target.value}
            })
        }}
        >
          <MenuItem value={"India"}>
            <em>India</em>
          </MenuItem>
          <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
          <MenuItem value={"Australia"}>Australia</MenuItem>
          <MenuItem value={"England"}>England</MenuItem>
          <MenuItem value={"WestIndies"}>WestIndies</MenuItem>
          <MenuItem value={"Newzealand"}>Newzealand</MenuItem>
          <MenuItem value={"SouthAfrica"}>South Africa</MenuItem>
          <MenuItem value={"Srilanka"}>Srilanka</MenuItem>
          <MenuItem value={"Bangladesh"}>Bangladesh</MenuItem>
          <MenuItem value={"AfghaNistan"}>AfghaNistan</MenuItem>
          <MenuItem value={"Scotland"}>Scotland</MenuItem>
          <MenuItem value={"Namebia"}>Namebia</MenuItem>
        </Select>
      </FormControl>
 </Item>
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Who Won the Toss"
          defaultValue="Default Value"
          value={livePost.tossWinner}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , tossWinner:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Choose To</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={livePost.choiceOfToss}
          label="Toss"
          // onChange={handleChange}
          onChange={(e) => {
            setlivePost((prev) => {
              return{...prev , choiceOfToss: e.target.value}
            })
        }}
        >
          <MenuItem value={"Bat"}>
            <em>Batting</em>
          </MenuItem>
          <MenuItem value={"Bowl"}>Bowling</MenuItem>
        </Select>
      </FormControl>
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Target "
          defaultValue="Default Value"
          value={livePost.target}
          onChange={(e) => {
              setlivePost((prev) =>{
               return{...prev , target:e.target.value}}
                )
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Winner Team</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={livePost.winnerTeam}
          label="Winner Team"
          // onChange={handleChange}
          onChange={(e) => {
            setlivePost((prev) => {
              return{...prev , winnerTeam: e.target.value}
            })
        }}
        >
          <MenuItem value={`${livePost.teamA}`}>
            <em>{livePost.teamA}</em>
          </MenuItem>
          <MenuItem value={`${livePost.teamB}`}>{livePost.teamB}</MenuItem>
        </Select>
      </FormControl>
 </Item>
 
  </Grid>

  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Win By runs"
          value={livePost.winnerByruns}
        
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , winnerByruns:e.target.value}
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
          label="Win By Wickets"
          type="number"
          InputLabelProps={{
            shrink: true,

          }}
          inputProps={{ min: 1, max: 10 }}
          value={livePost.winnerBywickets}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , winnerBywickets:e.target.value}
              })
          }}
        />
  </Item>
  </Grid>
</Grid>
        
       
         
      </div>
    
      
    </Box>

     
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h3" gutterBottom component="div">
      Team a
      </Typography>
      <div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
 
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
          label="Who Won the Toss"
          defaultValue="Default Value"
          value={livePost.tossWinner}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , tossWinner:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="chose elected to first"
          defaultValue="Default Value"
          value={livePost.choiceOfToss}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , choiceOfToss:e.target.value}
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
        
       
         
      </div>
    
      
    </Box>

   
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <Typography variant="h3" gutterBottom component="div">
      Team B
      </Typography> 
      <div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

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
          label="Who Won the Toss"
          defaultValue="Default Value"
          value={livePost.tossWinner}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , tossWinner:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="chose elected to first"
          defaultValue="Default Value"
          value={livePost.choiceOfToss}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , choiceOfToss:e.target.value}
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
        
       
          
      </div>
    
      
    </Box>
 
{/* 
    {posts.map((eachPost, index) => (
        <Post key={index} name={eachPost.name} email={eachPost.email} text={eachPost.postText} />
    ))} */}

    <br />
    <br />
          <Button variant="contained" width="100" onClick={submit}>Live</Button>
    {/* {(isMore) ? <Button onClick={loadMore}>Load More</Button> : null} */}

</div>
  );
}
export default LiveAdmin;
