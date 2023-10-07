import React from "react";
import { useState } from "react";
import { Button, styled } from "@mui/material";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

import Card from "@mui/material/Card";

import FormControlLabel from "@mui/material/FormControlLabel";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CardMedia from "@mui/material/CardMedia";

import Pagination from "@mui/material/Pagination";

const JordanComponent = () => {
  const [selects, setSelects] = useState();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };
  const toggleAccordion2 = () => {
    setIsExpanded2((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Typography style={{ marginLeft: "20px", marginTop:'10px' }}>PARIS SAINT-GERMAIN</Typography>
      <hr />

      <Grid container style={{ marginBottom: "40px" }}>
        <Grid item xs={2} align="center">
          <h4>Yor select</h4>
        </Grid>

        <Grid item xs={10} style={{ display: "flex", gap: "30px", margin: "" }}>


          <div
            className="select"
            style={{ width: "13%", marginTop: "15px", marginLeft: "150px" }}
          >
            <select
              value={selects}
              onChange={(e) => setSelects(e.target.value)}
              style={{
                width: "100%",
                height: "45px",
                // Màu nền
                border: "1px solid #ccc", // Viền
                borderRadius: "4px", // Góc bo tròn
                padding: "5px", // Khoảng cách bên trong
                fontSize: "16px",
                position: "relative", // Kích thước font
                zIndex: "3",
              }}
            >
              <option>Top seller</option>
              <option>se le 1</option>
              <option>hello2</option>
              <option>hello3</option>
            </select>
          </div>
          <Stack spacing={2} style={{ marginLeft: "auto", marginTop: "29px" }}>
            <Pagination count={5} shape="rounded" />
          </Stack>
        </Grid>
      </Grid>
      <hr></hr>

      <Grid container style={{ marginTop: "20px" }}>
        <Grid item xs={2} style={{ marginRight: "20px" }}>
          <Accordion
            expanded={isExpanded}
            onChange={toggleAccordion}
            style={{ boxShadow: "none" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Gender/Age</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <RadioGroup>
                  <FormControlLabel
                    value="Men"
                    control={<Radio />}
                    label="Men"
                  />
                  <FormControlLabel
                    value="women"
                    control={<Radio />}
                    label="Women"
                  />
                  <FormControlLabel
                    value="kid"
                    control={<Radio />}
                    label="Kids"
                  />
                  <FormControlLabel
                    value="baby"
                    control={<Radio />}
                    label="Baby"
                  />
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
          
          <Accordion
            expanded={isExpanded2}
            onChange={toggleAccordion2}
            style={{ boxShadow: "none" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Gender/Age</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <RadioGroup>
                  <FormControlLabel
                    value="Men"
                    control={<Radio />}
                    label="Men"
                  />
                  <FormControlLabel
                    value="women"
                    control={<Radio />}
                    label="Women"
                  />
                  <FormControlLabel
                    value="kid"
                    control={<Radio />}
                    label="Kids"
                  />
                  <FormControlLabel
                    value="baby"
                    control={<Radio />}
                    label="Baby"
                  />
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              maxWidth: 300,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              boxShadow: "none",
            }}
          >
            <CardMedia
              sx={{ height: 300 }}
              image="https://images.footballfanatics.com/paris-saint-germain/psg-x-jordan-x-3paradis-ici-cest-paradis-away-jersey-limited-edition_ss5_p-200374926+u-xol8hc9gljonzlkh3s5b+v-lyppvb6ffcbcsjkcrckn.jpg?_hv=2&w=340"
              title="green iguana"
            />
            <CardContent>
            <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontFamily: "monospace", fontSize: "20px" }}
                >
                  <Typography aria-hidden="true"  style={{display:'flex'}}>
                    <sup>€</sup>
                    <Typography>112</Typography>
                    <sup>99</sup>
                  </Typography>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontSize: "12px" }}
                >
                  Paris Saint-Germain Nike Home Stadium Shirt 2023-24 with Lee
                  Kang In 19 printing
                </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 300, boxShadow: "none" }}>
            <CardMedia
              sx={{ height: 300 }}
              image="https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-stadium-shirt-2023-24-with-barcola-29-printing_ss5_p-200607316+u-uyhcrn8es12jchxokn21+v-jcljeyi37ac8kfmmaoru.jpg?_hv=2&w=340"
              title="green iguana"
            />
            <CardContent>
            <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontFamily: "monospace", fontSize: "20px" }}
                >
                  <Typography aria-hidden="true"  style={{display:'flex'}}>
                    <sup>€</sup>
                    <Typography>112</Typography>
                    <sup>99</sup>
                  </Typography>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontSize: "12px" }}
                >
                  Paris Saint-Germain Nike Home Stadium Shirt 2023-24 with Lee
                  Kang In 19 printing
                </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 300, boxShadow: "none" }}>
            <CardMedia
              sx={{ height: 300 }}
              image="https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-stadium-shirt-2023-24-with-barcola-29-printing_ss5_p-200607316+u-uyhcrn8es12jchxokn21+v-jcljeyi37ac8kfmmaoru.jpg?_hv=2&w=340"
              title="green iguana"
            />
            <CardContent>
            <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontFamily: "monospace", fontSize: "20px" }}
                >
                  <Typography aria-hidden="true" style={{display:'flex'}}>
                    <sup>€</sup>
                    <Typography>112</Typography>
                    <sup>99</sup>
                  </Typography>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontSize: "12px" }}
                >
                  Paris Saint-Germain Nike Home Stadium Shirt 2023-24 with Lee
                  Kang In 19 printing
                </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Stack spacing={2} style={{ marginLeft: "650px", marginTop: "29px"}}>
            <Pagination count={3} shape="rounded" />
          </Stack>
      <hr />
     
    </div>
  );
};
export default JordanComponent;
