import React, { useState } from "react";
import {
  Typography,
  Button,
  Grid,
  Avatar,
  Box,
  RadioGroup,
  
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Carousel from "react-material-ui-carousel";
import SanPham from "../SanPham";

const items = [
  {
    imageUrl:
      "https://images.footballfanatics.com/paris-saint-ge…itd0dv7frx+v-dhbjm9b62xod8agllw1x.png?_hv=2&w=900",
    caption: "Caption 1",
  },
  {
    imageUrl:
      "//images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-stadium-shirt-2023-24-with-gramos-9-printing_ss5_p-200479084+pv-1+u-k4hzwxcwwwitd0dv7frx+v-fnakni6tfbys3tvvdgsr.png?_hv=2&w=900",
    caption: "Caption 2",
  },
  {
    imageUrl:
      "//images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-stadium-shirt-2023-24-with-gramos-9-printing_ss5_p-200479084+pv-3+u-k4hzwxcwwwitd0dv7frx+v-qvtvkim2jne21teco055.png?_hv=2&w=900",
    caption: "Caption 3",
  },
];
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
  },
};
function Detail() {
  const [selectedSize, setSelectedSize] = useState("S");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={8}>
          <Box>
            <Avatar
              src={selectedImage || items[0].imageUrl}
              variant="square"
              alt="Selected Image"
              sx={{
                width: 700,
                height: 700,
                padding: 6,
              }}
            />

            <div className="image-list">
              {items.map((item, index) => (
                <div key={index} className="image-item">
                  <Button
                    onClick={() => handleImageClick(item.imageUrl)}
                    sx={{
                      marginBottom: 2,
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt={`Slide ${index}`}
                      className="image"
                    />
                  </Button>
                </div>
              ))}
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              height: "100%",
              marginBottom: 30,
            }}
          >
            <Typography variant={"h6"} sx={{ marginBottom: 2 }}>
              Maillot PSG Nike Domicile Stadium 23/24 avec flocage G.Ramos 9
            </Typography>
            <Typography sx={{ marginBottom: 2, color: "#247e0c" }}>
              En stock - Cet article sera expédié dans les 14 prochains jours
              ouvrés.
            </Typography>
            <Typography sx={{ fontSize: 18 }}>Prix: 112,99</Typography>
            <Box
              className={"boderNgoai"}
              style={{
                backgroundColor: "#f5f6f8",
                fontSize: "18px",
              }}
            >
              <Box
                sx={{
                  padding: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Taille: {selectedSize}
                  </Typography>
                  <Typography sx={{ textAlign: "left" }}>
                    TABLEAU DES TAILLES
                  </Typography>
                </Box>

                <RadioGroup
                  row
                  sx={{
                    fontSize: "10px",
                  }}
                >
                  <Button
                    variant={selectedSize === "S" ? "contained" : "outlined"}
                    color="primary"
                    onClick={() => handleSizeChange({ target: { value: "S" } })}
                    style={{
                      color: selectedSize === "S" ? "white" : "black",
                      borderColor: selectedSize === "S" ? "black" : "initial",
                      backgroundColor: selectedSize === "S" ? "black" : "",
                      margin: 8,
                      borderRadius: "4px",
                      minWidth: "40px",
                      height: "40px",
                      padding: "0",
                      fontSize: "14px",
                    }}
                  >
                    S
                  </Button>
                  <Button
                    variant={selectedSize === "M" ? "contained" : "outlined"}
                    color="primary"
                    onClick={() => handleSizeChange({ target: { value: "M" } })}
                    style={{
                      color: selectedSize === "M" ? "white" : "black",
                      borderColor: selectedSize === "S" ? "black" : "initial",
                      backgroundColor: selectedSize === "M" ? "black" : "",
                      margin: 8,
                      borderRadius: "4px",
                      minWidth: "40px",
                      height: "40px",
                      padding: "0",
                      fontSize: "14px",
                    }}
                  >
                    M
                  </Button>
                  <Button
                    variant={selectedSize === "L" ? "contained" : "outlined"}
                    color="primary"
                    onClick={() => handleSizeChange({ target: { value: "L" } })}
                    style={{
                      color: selectedSize === "L" ? "white" : "black",
                      borderColor: selectedSize === "S" ? "black" : "initial",
                      backgroundColor: selectedSize === "L" ? "black" : "",
                      margin: 8,
                      borderRadius: "4px",
                      minWidth: "40px",
                      height: "40px",
                      padding: "0",
                      fontSize: "14px",
                    }}
                  >
                    L
                  </Button>
                  <Button
                    variant={selectedSize === "XL" ? "contained" : "outlined"}
                    color="primary"
                    onClick={() =>
                      handleSizeChange({ target: { value: "XL" } })
                    }
                    style={{
                      color: selectedSize === "XL" ? "white" : "black",
                      borderColor: selectedSize === "S" ? "black" : "initial",
                      backgroundColor: selectedSize === "XL" ? "black" : "",
                      margin: 8,
                      borderRadius: "4px",
                      minWidth: "40px",
                      height: "40px",
                      padding: "0",
                      fontSize: "14px",
                    }}
                  >
                    XL
                  </Button>
                  <Button
                    variant={selectedSize === "2XL" ? "contained" : "outlined"}
                    color="primary"
                    onClick={() =>
                      handleSizeChange({ target: { value: "2XL" } })
                    }
                    style={{
                      color: selectedSize === "2XL" ? "white" : "black",
                      borderColor: selectedSize === "S" ? "black" : "initial",
                      backgroundColor: selectedSize === "2XL" ? "black" : "",
                      margin: 8,
                      borderRadius: "4px",
                      minWidth: "40px",
                      height: "40px",
                      padding: "0",
                      fontSize: "14px",
                    }}
                  >
                    2XL
                  </Button>
                  <Button
                    variant={selectedSize === "3XL" ? "contained" : "outlined"}
                    color="primary"
                    onClick={() =>
                      handleSizeChange({ target: { value: "3XL" } })
                    }
                    style={{
                      color: selectedSize === "3XL" ? "white" : "black",
                      borderColor: selectedSize === "S" ? "black" : "initial",
                      backgroundColor: selectedSize === "3XL" ? "black" : "",
                      margin: 8,
                      borderRadius: "4px",
                      minWidth: "40px",
                      height: "40px",
                      padding: "0",
                      fontSize: "14px",
                    }}
                    disabled
                  >
                    3XL
                  </Button>
                </RadioGroup>

                <Typography variant="h6" gutterBottom>
                  Quantité
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "70px" }}
                >
                  <TextField
                  style={{width:'80px'}}
          required
          id="outlined-required"
        />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "black",
                      },
                    }}
                  >
                    Ajouter au panier
                  </Button>
                </Box>
              </Box>

              {/*Accordion 1*/}
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Livraison</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Cet article sera expédié dans les 14 prochains jours ouvrés.
                </AccordionDetails>
              </Accordion>
              {/*Accordion 2*/}
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Détails</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Référence produit: 200479084 Marque: Nike Pays d'origine:
                  Thaïlande Manches courtes Agréé officiellement
                </AccordionDetails>
              </Accordion>
              {/*Accordion 3*/}
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Livraison</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Cet article sera expédié dans les 14 prochains jours ouvrés.
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <div
        className={"Carousel"}
        style={{
          marginTop: 40,
        }}
      >
        <Typography
          variant={"h6"}
          style={{
            marginLeft: 50,
          }}
        >
          Sản Phẩm
        </Typography>
        <SanPham />
      </div>
    </div>
  );
}

export default Detail;
