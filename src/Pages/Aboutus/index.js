import React from "react";
// import Background from "../../img/shoes.webp";
// import Typed from "react-typed";
import uib from "../../img/uib.png";

function Header() {
  return (
    <>
     {/* Hero */}
     <div id="hero">
     <div className="hero-left">
       <div className="hero-el">
         <h1>Nama Anggota</h1>
       </div>
       <div className="hero-el">
         <p>
             <ul>
                 <li>Ferdinand William 1931073</li>
                 <li>Melissa V.R 1931058</li>
                 <li>Rio Nando 1931195</li>
                 <li>Cindy 1931027</li>
                 <li>Edo Lee 1931120</li>
                 <li>Muhammad Yusuf Zhafran 1931190</li>
             </ul>
         </p>
       </div>
     </div>
     <div className="hero-right">
       <img src={uib} alt="logouib" />
     </div>
   </div>
   </>
  );
}

export default Header;