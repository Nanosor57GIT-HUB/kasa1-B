import React from "react";

const Logo = () => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/logoKasa.svg"} alt="logo_Kasa_logement" className="logo" />
    </div>
  );
};

export default Logo;
