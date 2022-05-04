import React from "react";
import './Footer.scss'


const Footer = (props) => {   //props is an object
    console.log(props);
    console.log(props.year);
    let companyName = 'Tata Elxsi';

    return (
        <footer className='text-center'>
            <hr></hr>
            
            <p className="copyright">Copyright {props.year} |{companyName}</p>
            <p style={{color:"black",backgroundColor: "white", textAlign:"center"}}>Amazon Prime Demo Project</p>
        </footer>
    )
}
export default Footer;
