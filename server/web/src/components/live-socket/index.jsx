import * as React from 'react';
import Box from '@mui/material/Box';
import './index.css'

 function LiveSocket() {
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
          <h1>Aus vs Africa  <span>(cricket)</span></h1>

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