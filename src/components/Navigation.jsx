import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div style={{width:"600px"}}>
            <div style={{width:"600px", display:"flex", justifyContent:"space-between", padding:"25px 0"}}>
                <Link to="/favotite-movie" style={{textDecoration:"none", color:"white", fontSize:"32px"}}>My favorite movie</Link>
                <Link to="/about" style={{textDecoration:"none", color:"white", fontSize:"32px"}}>About</Link>
                <Link to="/clock" style={{textDecoration:"none", color:"white", fontSize:"32px"}}>Clock</Link>
                <Link to="/my-pet" style={{textDecoration:"none", color:"white", fontSize:"32px"}}>My pet</Link>
            </div>
            <div style={{width:"600px", height:"1px", backgroundColor:"white", boxShadow:"0 0 7px 2px rgb(255, 211, 211)", marginBottom:"25px", borderRadius:"100px"}}></div>
        </div>
    );
}

export default Navigation;
