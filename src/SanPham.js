import React, { useState } from "react";
import { Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "react-multi-carousel/lib/styles.css";
import Detail from "./component/Detail";
import { Link } from "react-router-dom";


function SanPham() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsive2 = {
    sanPham: {
      imageUrl:
        "//images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-stadium-shirt-2023-24-with-gramos-9-printing_ss5_p-200479084+pv-1+u-k4hzwxcwwwitd0dv7frx+v-fnakni6tfbys3tvvdgsr.png?_hv=2&w=900",

        imageUrl2: "https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-home-stadium-shirt-2022-23-womens_ss4_p-13303222+u-i4eg5nncuznlxdgjqmow+v-8d0dd9cf41cd41e5b14a88283a522ae4.jpg?_hv=2&w=340"
    },
  };

  return (
    <Carousel responsive={responsive}>
      <Card
        sx={{
          maxWidth: 200,
          margin: 5,
          boxShadow: "none", // Đặt boxShadow thành "none" để bỏ viền
          textAlign: "center",
        }}
      >
        <img
          src={responsive2.sanPham.imageUrl}
          style={{
            width: 200,
            height: 200,
          }}
          alt="Product"
        />
        <CardContent>
        <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontFamily: "monospace", fontSize: "18px", marginRight:'100px' }}
                >
                  <span aria-hidden="true">
                    <sup>€</sup>
                    <span>112</span>
                    <sup>99</sup>
                  </span>
                </Typography>
                <Typography variant="body2" color="text">
              Maillot PSG Nike Domicile Stadium 23/24 - Enfant avec flocage
              Mbappé 7
            </Typography>
        </CardContent>
      </Card>

      <div>
        <Card
          sx={{
            maxWidth: 200,
            margin: 5,
            boxShadow: "none", // Đặt boxShadow thành "none" để bỏ viền
            textAlign: "center",
          }}
        >
          <img
            src={responsive2.sanPham.imageUrl2  }
            style={{
              width: 200,
              height: 200,
            }}
            alt="Product"
          />
          <CardContent>
          <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontFamily: "monospace", fontSize: "18px", marginRight:'100px' }}
                >
                  <span aria-hidden="true">
                    <sup>€</sup>
                    <span>112</span>
                    <sup>99</sup>
                  </span>
                </Typography>
            <Typography variant="body2" color="text">
              Maillot PSG Nike Domicile Stadium 23/24 - Enfant avec flocage
              Mbappé 7
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card
          sx={{
            maxWidth: 200,
            margin: 5,
            boxShadow: "none", // Đặt boxShadow thành "none" để bỏ viền
            textAlign: "center",
          }}
        >
          <img
            src={responsive2.sanPham.imageUrl}
            style={{
              width: 200,
              height: 200,
            }}
            alt="Product"
          />
          <CardContent>
          <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontFamily: "monospace", fontSize: "18px", marginRight:'100px' }}
                >
                  <span aria-hidden="true">
                    <sup>€</sup>
                    <span>112</span>
                    <sup>99</sup>
                  </span>
                </Typography>
            <Typography variant="body2" color="text">
              Maillot PSG Nike Domicile Stadium 23/24 - Enfant avec flocage
              Mbappé 7
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card
          sx={{
            maxWidth: 200,
            margin: 5,
            boxShadow: "none", // Đặt boxShadow thành "none" để bỏ viền
            textAlign: "center",
          }}
        >
          <img
            src={responsive2.sanPham.imageUrl}
            style={{
              width: 200,
              height: 200,
            }}
            alt="Product"
          />
          <CardContent>
          <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontFamily: "monospace", fontSize: "18px", marginRight:'100px' }}
                >
                  <span aria-hidden="true">
                    <sup>€</sup>
                    <span>112</span>
                    <sup>99</sup>
                  </span>
                </Typography>
            <Typography variant="body2" color="text">
              Maillot PSG Nike Domicile Stadium 23/24 - Enfant avec flocage
              Mbappé 7
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card
          sx={{
            maxWidth: 200,
            margin: 5,
            boxShadow: "none", // Đặt boxShadow thành "none" để bỏ viền
            textAlign: "center",
          }}
        >
          <img
            src={responsive2.sanPham.imageUrl}
            style={{
              width: 200,
              height: 200,
            }}
            alt="Product"
          />
          <CardContent>
          <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontFamily: "monospace", fontSize: "18px", marginRight:'100px' }}
                >
                  <span aria-hidden="true">
                    <sup>€</sup>
                    <span>112</span>
                    <sup>99</sup>
                  </span>
                </Typography>
            <Typography variant="body2" color="text">
              Maillot PSG Nike Domicile Stadium 23/24 - Enfant avec flocage
              Mbappé 7
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card
          sx={{
            maxWidth: 200,
            margin: 5,
            boxShadow: "none", // Đặt boxShadow thành "none" để bỏ viền
            textAlign: "center",
          }}
        >
          <img
            src={responsive2.sanPham.imageUrl}
            style={{
              width: 200,
              height: 200,
            }}
            alt="Product"
          />
          <CardContent>
          <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontFamily: "monospace", fontSize: "18px", marginRight:'100px' }}
                >
                  <span aria-hidden="true">
                    <sup>€</sup>
                    <span>112</span>
                    <sup>99</sup>
                  </span>
                </Typography>
            <Typography variant="body2" color="text">
              Maillot PSG Nike Domicile Stadium 23/24 - Enfant avec flocage
              Mbappé 7
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card
          sx={{
            maxWidth: 200,
            margin: 5,
            boxShadow: "none", // Đặt boxShadow thành "none" để bỏ viền
            textAlign: "center",
          }}
        >
          <img
            src={responsive2.sanPham.imageUrl}
            style={{
              width: 200,
              height: 200,
            }}
            alt="Product"
          />
          <CardContent>
          <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontFamily: "monospace", fontSize: "18px", marginRight:'100px' }}
                >
                  <span aria-hidden="true">
                    <sup>€</sup>
                    <span>112</span>
                    <sup>99</sup>
                  </span>
                </Typography>
            <Typography variant="body2" color="text">
              Maillot PSG Nike Domicile Stadium 23/24 - Enfant avec flocage
              Mbappé 7
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card
          sx={{
            maxWidth: 200,
            margin: 5,
            boxShadow: "none", // Đặt boxShadow thành "none" để bỏ viền
            textAlign: "center",
          }}
        >
          <img
            src={responsive2.sanPham.imageUrl}
            style={{
              width: 200,
              height: 200,
            }}
            alt="Product"
          />
          <CardContent>
          <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontFamily: "monospace", fontSize: "18px", marginRight:'100px' }}
                >
                  <span aria-hidden="true">
                    <sup>€</sup>
                    <span>112</span>
                    <sup>99</sup>
                  </span>
                </Typography>
            <Typography variant="body2" color="text">
              Maillot PSG Nike Domicile Stadium 23/24 - Enfant avec flocage
              Mbappé 7
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Carousel>
  );
}

export default SanPham;
