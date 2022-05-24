import React from "react";

const BannerHome = () => {
  return (
    <div>
      <div className="bannerHome">
        <img src={process.env.PUBLIC_URL + "/img/IMG.png"} alt="Banner_page_Accueil" />
        <div className="maskBannerHome"></div>
        <p className="titleBannerHome">Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
};

export default BannerHome;
