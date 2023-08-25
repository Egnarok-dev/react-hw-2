import React from 'react';

const About = (props) => {
    const {name, photo, phone, email, city, skills} = props.about;
    return (
        <div style={{width:"900px", height:"auto", backgroundColor:"white", padding:"25px", borderRadius:"15px"}}>
            <div style={{width:"300px", borderBottom:"2px solid black", display:"flex"}}>
                <img src={photo} alt="" style={{width:"150px", marginBottom:"25px"}}/>
                <div>
                    <h1 style={{color:"black", margin:"0", textAlign:"left", padding:"0", fontSize:"24px"}}>{name}</h1>
                    <p style={{color:"black", margin:"15px 0", textAlign:"left", padding:"0", fontSize:"18px"}}>{city}</p>
                </div>
            </div>
            <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div>
                    <h2 style={{width:"70px", color:"black", margin:"15px 0", textAlign:"left", padding:"0", fontSize:"24px"}}>Skills:</h2>
                    <p style={{width:"70px", color:"black", margin:"0", textAlign:"left", padding:"0", fontSize:"18px"}}>{skills}</p>
                </div>
                <div>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-page-3100479-2583000.png" alt="" style={{width:"250px", marginRight:"250px"}}/>
                </div>
            </div>
            <div style={{width:"400px", display:"flex", justifyContent:"space-between", marginTop:"50px", borderTop:"2px solid black"}}>
                <div style={{width:"180px",display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <img src="https://pngimg.com/d/phone_PNG48927.png" alt="phone icon" style={{width:"25px"}}/>
                    <p style={{color:"black", margin:"15px 0", textAlign:"left", padding:"0", fontSize:"18px"}}>{phone}</p>
                </div>
                <div style={{width:"190px",display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="mail icon" style={{width:"25px"}}/>
                    <p style={{color:"black", margin:"15px 0", textAlign:"left", padding:"0", fontSize:"18px"}}>{email}</p>
                </div>
                
            </div>
        </div>
    );
}

export default About;
