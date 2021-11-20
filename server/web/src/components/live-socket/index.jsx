import {useState  , useEffect} from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
import './index.css'
import {baseUrl} from './../../core'
import io from 'socket.io-client'


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
          <p>Africa won the toss and elected to bat first</p>
          <h2>Aus Bat</h2>
          <br />
          <br />
          <h2>124/5 ball  <span>15.5 over</span></h2>
          <br />
          <h2>John*  <span>34(17 balls)</span></h2>
          <h2>wade  <span>41(22 balls)</span></h2>

          <br /><br />
          <h2>Run rate:  <span>5 run/over</span></h2>
        </div>
        <div className="coloumn column1">
            
        <h2>Africa bowling</h2>
          <br />
          <br />
         
          <h2>waseem  <span>3.2 over,2w,23run</span></h2>
          <h2>shaheen  <span>3.2 over,2w,23run</span></h2>
          <br />
          <h2>  Target: 230 run</h2>
          
            </div>
    </div>
    </div>
   
      </div>

  );
}

export default LiveSocket;