import React from 'react';
import { 
} from 'react-bootstrap';
const divStyle = {
    textAlign: 'center',
   
  };
function Footer() {
  return (<>
    <footer className="footer">
         <div style={divStyle}>
         This project is <a href="https://github.com/shahidhk/zakatcalculator">open source</a>.
         </div>
    </footer> 
  </>);
}

export default Footer;
