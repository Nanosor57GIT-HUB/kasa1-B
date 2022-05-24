import React from "react";

const BannerAbout = () => {
  return (
    <div>
      <div className="bannerAbout">
        <img src={process.env.PUBLIC_URL + "/img/kalen-emsley.png"} alt="Banner_page_A-Propos" />
        <div className="maskBannerAbout"></div>
      </div>
    </div>
  );
};

export default BannerAbout;
