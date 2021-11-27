import {useState  , useEffect} from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
import './index.css'
import {baseUrl} from './../../core'
import io from 'socket.io-client'
import Typography from '@mui/material/Typography';


 function LiveSocket() {

  const [livePost, setlivePost] = useState({})

  useEffect(() => {
    const socket = io("http://localhost:5001"); // to connect with locally running Socker.io server

    socket.on('connect', function () {
        console.log("connected to server")
    });
    socket.on('disconnect', function (message) {
        console.log("disconnected from server: ", message);
    });
    socket.on('LIVE', function (data) {
        console.log(data);
        setlivePost(data)
    });

    return () => {
        socket.close();
    };
}, []);


  useEffect(() => {
    axios.get(`${baseUrl}/api/v1/live`)
    .then((res)=>{
      console.log("res +++" , res.data)
      setlivePost(res.data)
    })
  }, [])
  const tossWinner =  livePost?.teamA
  return (
      <div>
    <Box
      sx={{
        width: 1000,
        height: 600,
        margin:0,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.2, 0.3, 0.9],
        },
      }}
    />
    <div className="main">
    <div className="row">
        <div className="coloumn">
          <h1>{livePost?.teamA} vs {livePost?.teamB}  <span>(cricket)</span></h1>

          <br />
          <p>{livePost?.tossWinner} won the toss and elected to first</p>
          <h2> 
          <Typography variant="h3" gutterBottom component="div">
          {livePost?.choiceOfToss}
      </Typography>  </h2>
          <br />
          <br />
          <h2>{livePost?.run}/{livePost?.wicket} <span>({livePost?.bowl} over)</span></h2>
          <br />
          <h2>{livePost?.batA}  <span>{livePost?.batAruns}({livePost?.batAballs} balls)</span></h2>
          <h2>{livePost?.batB}   <span>{livePost?.batBruns}({livePost?.batBballs} balls)</span></h2>

          <br /><br />
          <h2>Run rate:  <span>5 run/over</span></h2>
        </div>
        <div className="coloumn column1">
            
        <h2>{tossWinner === livePost?.teamA ? `${livePost?.teamB}` : `${livePost?.teamA}`
         } bowling</h2>
          <br />
          <br />
         
          <h2> {livePost?.bowler}<span> {livePost?.bowlerBalls} over, {livePost?.bowlerWickets} wickets,{livePost?.bowlerRuns} runs</span></h2>
          
          <br />
          <h2>  Target: {livePost?.target} run</h2>
          
            </div>
    </div>
    </div>
   
      </div>

  );
}

export default LiveSocket;