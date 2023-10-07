import React from "react";
import { Button, styled } from "@mui/material";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

import FacebookIcon from "@mui/icons-material/Facebook";

import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <React.Fragment>
      <div>
        <div className="background-image" style={{ marginTop: "20px" }}>
          <img
            src="https://store.psg.fr/content/ws/535758/desktop_footer.png"
            alt="Background"
            className="background-image"
            width="100%"
          />
        </div>
        <Grid
          container
          style={{ backgroundColor: "#f4f5f5", textAlign: "center" }}
        >
          <Grid item xs={3}>
            <h4>Customer Service</h4>
            <Typography>Help</Typography>
            <Typography>Track Order</Typography>
            <Typography>Size Chart</Typography>
          </Grid>

          <Grid item xs={3}>
            <h4>Worry Free Shopping</h4>
            <Typography>Safe Shopping</Typography>
            <Typography>Delivery & Shipping</Typography>
            <Typography>90-Day Returns</Typography>
          </Grid>

          <Grid item xs={3}>
            <h4>Worry Free Shopping</h4>
            <Typography>Safe Shopping</Typography>
            <Typography>Delivery & Shipping</Typography>
            <Typography>90-Day Returns</Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography>Stay updated on sales, new items and more</Typography>
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                width: "300px",
              }}
            >
              SIGN UP & SAVE 100%
            </Button>
            <h5 style={{ marginRight: "235px" }}>Follow us</h5>
            <div className="icon" style={{ display: "flex", gap: "20px" }}>
              <FacebookIcon />
              <TelegramIcon />
              <YouTubeIcon />
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
export default Footer;
