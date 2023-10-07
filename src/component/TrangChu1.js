import React from "react";
import { Button, styled } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Typography from "@mui/material/Typography";


import Grid from "@mui/material/Grid";

import FacebookIcon from "@mui/icons-material/Facebook";

import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import SanPham from "../SanPham";
const TrangChu1 = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ maxWidth: "100%" }}>
      <div className="background-image" align="left">
        {/* Đặt ảnh dưới đây */}
        <img
          src="https://store.psg.fr/content/ws/551368/dt_trd_en.png"
          alt="Background"
          className="background-image"
          width="100%"
        />
      </div>

      <h1 align="center" style={{ color: "gray", fontSize: "45px" }}>
        SHOP BY PLAYER
      </h1>
      <Grid container>
        <Grid item xs={3}>
          <div className="background-image" align="left">
            {/* Đặt ảnh dưới đây */}
            <img
              src="https://store.psg.fr/content/ws/547132/desktop_ramos_away.png"
              alt="Background"
              className="background-image"
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="background-image" align="left">
            {/* Đặt ảnh dưới đây */}
            <img
              src="https://store.psg.fr/content/ws/552029/dt_kang.png"
              alt="Background"
              className="background-image"
            />
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className="background-image" align="left">
            {/* Đặt ảnh dưới đây */}
            <img
              src="https://store.psg.fr/content/ws/552029/dt_kang.png"
              alt="Background"
              className="background-image"
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="background-image" align="left">
            {/* Đặt ảnh dưới đây */}
            <img
              src="https://store.psg.fr/content/ws/547132/desktop_ramos_away.png"
              alt="Background"
              className="background-image"
            />
          </div>
        </Grid>
      </Grid>
      <div className="background-image" style={{ marginTop: "20px" }}>
        {/* Đặt ảnh dưới đây */}
        <img
          src="https://store.psg.fr/content/ws/551368/dt_training_en.png"
          alt="Background"
          className="background-image"
          width="100%"
        />
      </div>

      <Typography className="men" style={{ fontSize: "23px" }}>
        Men's Best Seller
      </Typography>
      {<SanPham />}

      <div className="background-image" style={{ marginTop: "10px" }}>
        {/* Đặt ảnh dưới đây */}
        <img
          src="https://store.psg.fr/content/ws/506144/aspot_en.png"
          alt="Background"
          className="background-image"
          width="100%"
        />
      </div>

      <Typography className="men" style={{ fontSize: "23px" }}>
        Kid Best Seller
      </Typography>

      {<SanPham />}

      <Grid container style={{ marginTop: "15px", marginLeft: "5px" }}>
        <Grid item xs={6}>
          <div className="background-image" align="left">
            {/* Đặt ảnh dưới đây */}
            <img
              src="https://store.psg.fr/content/ws/551368/dt_lifestyle_en.png"
              alt="Background"
              className="background-image"
              style={{ width: "99%" }}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="background-image" align="left">
            {/* Đặt ảnh dưới đây */}
            <img
              src="https://store.psg.fr/content/ws/551368/dt_aj_en.png"
              alt="Background"
              className="background-image"
              style={{ width: "99%" }}
            />
          </div>
        </Grid>
      </Grid>

      <Typography className="men" style={{ fontSize: "23px" }}>
        Women's Best Seller
      </Typography>

      {<SanPham />}
     
      
    </div>
  );
};
export default TrangChu1;
