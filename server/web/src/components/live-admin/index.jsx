
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
import Stack from '@mui/material/Stack';
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
    batAruns:"",
    batAballs:"",
    batB:"",
    batBruns:"",
    batBballs:"",
    bowler: "",
    bowlerBalls:"",
    bowlerRuns:"",
    bowlerWickets:"",
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
 const clearSubmit = () =>{

 }

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
 <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Who won the Toss</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={livePost.tossWinner}
          label="Winner Team"
          // onChange={handleChange}
          onChange={(e) => {
            setlivePost((prev) => {
              return{...prev , tossWinner: e.target.value}
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

     {/* =============================Team A============================ */}
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h3" gutterBottom component="div">
      Team {livePost.teamA}
      </Typography>
      <div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
 
 
  
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Select Batsman A</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={livePost.batA}
          
          // onChange={handleChange}
          onChange={(e) => {
            setlivePost((prev) => {
              return{...prev , batA: e.target.value}
            })
        }}
        >
          <MenuItem value={"Babar Azam"}>
            <em>Babar Azam</em>
          </MenuItem>
          <MenuItem value={"Sharjeel Khan"}>Sharjeel Khan</MenuItem>
          <MenuItem value={"Sarfaraz Ahmed"}>Sarfaraz Ahmed</MenuItem>
          <MenuItem value={"Imad Waseem"}>Imad Waseem</MenuItem>
          <MenuItem value={"Shoib Malik"}>Shoib Malik</MenuItem>
          <MenuItem value={"Muhammad Rizwan"}>Muhammad Rizwan</MenuItem>
          <MenuItem value={"Hassan Ali"}>Hassan Ali</MenuItem>
          <MenuItem value={"Harish Rauf"}>Harish Rauf</MenuItem>
          <MenuItem value={"Shadab Alam"}>Shadab Alam</MenuItem>
          <MenuItem value={"Shaheen Afridi"}>Shaheen Afridi</MenuItem>
          <MenuItem value={"Muhammad Irfan"}>Muhammad Irfan</MenuItem>
        </Select>
      </FormControl>
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Select Batsman B</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={livePost.batB}
          
          // onChange={handleChange}
          onChange={(e) => {
            setlivePost((prev) => {
              return{...prev , batB: e.target.value}
            })
        }}
        >
          <MenuItem value={"Babar Azam"}>
            <em>Babar Azam</em>
          </MenuItem>
          <MenuItem value={"Sharjeel Khan"}>Sharjeel Khan</MenuItem>
          <MenuItem value={"Sarfaraz Ahmed"}>Sarfaraz Ahmed</MenuItem>
          <MenuItem value={"Imad Waseem"}>Imad Waseem</MenuItem>
          <MenuItem value={"Shoib Malik"}>Shoib Malik</MenuItem>
          <MenuItem value={"Muhammad Rizwan"}>Muhammad Rizwan</MenuItem>
          <MenuItem value={"Hassan Ali"}>Hassan Ali</MenuItem>
          <MenuItem value={"Harish Rauf"}>Harish Rauf</MenuItem>
          <MenuItem value={"Shadab Alam"}>Shadab Alam</MenuItem>
          <MenuItem value={"Shaheen Afridi"}>Shaheen Afridi</MenuItem>
          <MenuItem value={"Muhammad Irfan"}>Muhammad Irfan</MenuItem>
        </Select>
      </FormControl>
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Total Balls"
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
          id="outlined-helperText"
          label="Total Run"
          type="number"
          defaultValue="0"
          value={livePost.run}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , run:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Toal Wicket"
          type="number"
          defaultValue="0"
          inputProps={{ min: 0, max: 10 }}
          value={livePost.wicket}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , wicket:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
  <Item>
  <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Select Bowler</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={livePost.bowler}
          
          // onChange={handleChange}
          onChange={(e) => {
            setlivePost((prev) => {
              return{...prev , bowler: e.target.value}
            })
        }}
        > <MenuItem value={""}>Not Now</MenuItem>
          <MenuItem value={"Babar Azam"}>
            <em>Babar Azam</em>
          </MenuItem>

          <MenuItem value={"Sharjeel Khan"}>Sharjeel Khan</MenuItem>
          <MenuItem value={"Sarfaraz Ahmed"}>Sarfaraz Ahmed</MenuItem>
          <MenuItem value={"Imad Waseem"}>Imad Waseem</MenuItem>
          <MenuItem value={"Shoib Malik"}>Shoib Malik</MenuItem>
          <MenuItem value={"Muhammad Rizwan"}>Muhammad Rizwan</MenuItem>
          <MenuItem value={"Hassan Ali"}>Hassan Ali</MenuItem>
          <MenuItem value={"Harish Rauf"}>Harish Rauf</MenuItem>
          <MenuItem value={"Shadab Alam"}>Shadab Alam</MenuItem>
          <MenuItem value={"Shaheen Afridi"}>Shaheen Afridi</MenuItem>
          <MenuItem value={"Muhammad Irfan"}>Muhammad Irfan</MenuItem>
        </Select>
      </FormControl>
  </Item>
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Bowler Balls"
          defaultValue="0"
          value={livePost.bowlerBalls}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , bowlerBalls:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Bowler Wickets"
          defaultValue="0"
          inputProps={{min:0 , max:10}}
          value={livePost.bowlerWickets}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , bowlerWickets:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Bowler Runs "
          defaultValue="0"
          type="number"
          inputProps={{min:0 , max:120}}
          value={livePost.bowlerRuns}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , bowlerRuns:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Batsman A runs"
          type="number"
          defaultValue="0"
          inputProps={{min:0 , max:1000}}
          value={livePost.batAruns}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , batAruns:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>

  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Batsman A balls"
          defaultValue="0"
          type="number"
          inputProps={{min:0 , max:1000}}
          value={livePost.batAballs}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , batAballs:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Batsman B runs"
          type="number"
          defaultValue="0"
          inputProps={{min:0 , max:1000}}
          value={livePost.batBruns}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , batBruns:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>

  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Batsman B balls"
          defaultValue="0"
          type="number"
          inputProps={{min:0 , max:1000}}
          value={livePost.batBballs}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , batBballs:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>

</Grid>
        
       
         
      </div>
    
      
    </Box>

    {/* =============================Team B============================ */}
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h3" gutterBottom component="div">
      Team {livePost.teamB}
      </Typography>
      <div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
 
 
  
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Select Batsman A</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={livePost.batA}
          
          // onChange={handleChange}
          onChange={(e) => {
            setlivePost((prev) => {
              return{...prev , batA: e.target.value}
            })
        }}
        >
          <MenuItem value={"Babar Azam"}>
            <em>Babar Azam</em>
          </MenuItem>
          <MenuItem value={"Sharjeel Khan"}>Sharjeel Khan</MenuItem>
          <MenuItem value={"Sarfaraz Ahmed"}>Sarfaraz Ahmed</MenuItem>
          <MenuItem value={"Imad Waseem"}>Imad Waseem</MenuItem>
          <MenuItem value={"Shoib Malik"}>Shoib Malik</MenuItem>
          <MenuItem value={"Muhammad Rizwan"}>Muhammad Rizwan</MenuItem>
          <MenuItem value={"Hassan Ali"}>Hassan Ali</MenuItem>
          <MenuItem value={"Harish Rauf"}>Harish Rauf</MenuItem>
          <MenuItem value={"Shadab Alam"}>Shadab Alam</MenuItem>
          <MenuItem value={"Shaheen Afridi"}>Shaheen Afridi</MenuItem>
          <MenuItem value={"Muhammad Irfan"}>Muhammad Irfan</MenuItem>
        </Select>
      </FormControl>
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Select Batsman B</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={livePost.batB}
          
          // onChange={handleChange}
          onChange={(e) => {
            setlivePost((prev) => {
              return{...prev , batB: e.target.value}
            })
        }}
        >
          <MenuItem value={"Babar Azam"}>
            <em>Babar Azam</em>
          </MenuItem>
          <MenuItem value={"Sharjeel Khan"}>Sharjeel Khan</MenuItem>
          <MenuItem value={"Sarfaraz Ahmed"}>Sarfaraz Ahmed</MenuItem>
          <MenuItem value={"Imad Waseem"}>Imad Waseem</MenuItem>
          <MenuItem value={"Shoib Malik"}>Shoib Malik</MenuItem>
          <MenuItem value={"Muhammad Rizwan"}>Muhammad Rizwan</MenuItem>
          <MenuItem value={"Hassan Ali"}>Hassan Ali</MenuItem>
          <MenuItem value={"Harish Rauf"}>Harish Rauf</MenuItem>
          <MenuItem value={"Shadab Alam"}>Shadab Alam</MenuItem>
          <MenuItem value={"Shaheen Afridi"}>Shaheen Afridi</MenuItem>
          <MenuItem value={"Muhammad Irfan"}>Muhammad Irfan</MenuItem>
        </Select>
      </FormControl>
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Batsman A runs"
          type="number"
          defaultValue="0"
          inputProps={{min:0 , max:1000}}
          value={livePost.batAruns}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , batAruns:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>

  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Batsman A balls"
          defaultValue="0"
          type="number"
          inputProps={{min:0 , max:1000}}
          value={livePost.batAballs}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , batAballs:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>

  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Batsman B runs"
          type="number"
          defaultValue="0"
          inputProps={{min:0 , max:1000}}
          value={livePost.batBruns}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , batBruns:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>

  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Batsman B balls"
          defaultValue="0"
          type="number"
          inputProps={{min:0 , max:1000}}
          value={livePost.batBballs}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , batBballs:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Total Balls"
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
          id="outlined-helperText"
          label="Total Run"
          type="number"
          defaultValue="0"
          value={livePost.run}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , run:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Toal Wicket"
          type="number"
          defaultValue="0"
          inputProps={{ min: 0, max: 10 }}
          value={livePost.wicket}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , wicket:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
  <Item>
  <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Select Bowler</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={livePost.bowler}
          
          // onChange={handleChange}
          onChange={(e) => {
            setlivePost((prev) => {
              return{...prev , bowler: e.target.value}
            })
        }}
        > <MenuItem value={""}>Not Now</MenuItem>
          <MenuItem value={"Babar Azam"}>
            <em>Babar Azam</em>
          </MenuItem>

          <MenuItem value={"Sharjeel Khan"}>Sharjeel Khan</MenuItem>
          <MenuItem value={"Sarfaraz Ahmed"}>Sarfaraz Ahmed</MenuItem>
          <MenuItem value={"Imad Waseem"}>Imad Waseem</MenuItem>
          <MenuItem value={"Shoib Malik"}>Shoib Malik</MenuItem>
          <MenuItem value={"Muhammad Rizwan"}>Muhammad Rizwan</MenuItem>
          <MenuItem value={"Hassan Ali"}>Hassan Ali</MenuItem>
          <MenuItem value={"Harish Rauf"}>Harish Rauf</MenuItem>
          <MenuItem value={"Shadab Alam"}>Shadab Alam</MenuItem>
          <MenuItem value={"Shaheen Afridi"}>Shaheen Afridi</MenuItem>
          <MenuItem value={"Muhammad Irfan"}>Muhammad Irfan</MenuItem>
        </Select>
      </FormControl>
  </Item>
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Bowler Balls"
          defaultValue="0"

          value={livePost.bowlerBalls}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , bowlerBalls:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Bowler Wickets"
          defaultValue="0"
          inputProps={{min:0 , max:10}}
          value={livePost.bowlerWickets}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , bowlerWickets:e.target.value}
              })
          }}
        />
 </Item>
 
  </Grid>
  <Grid item xs={12} sm={4} md={3} lg={2}>
 <Item>
 <TextField
          id="outlined-helperText"
          label="Bowler Runs "
          defaultValue="0"
          type="number"
          inputProps={{min:0 , max:120}}
          value={livePost.bowlerRuns}
          onChange={(e) => {
              setlivePost((prev) =>{
                return{...prev , bowlerRuns:e.target.value}
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
    <Stack style={{margin:"20px 0px"}}>
    <Button variant="contained" width="100" onClick={submit}>Live</Button>
    </Stack>
    <Stack>
          <Button variant="contained" color="error" width="100%" onClick={clearSubmit}>clear All</Button>
      </Stack>
        
    {/* {(isMore) ? <Button onClick={loadMore}>Load More</Button> : null} */}

</div>
  );
}
export default LiveAdmin;
