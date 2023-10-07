import {
  
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  ListSubheader,
  MenuItem,
  Paper,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

function App() {
  const [quantity, setQuantity] = useState(1);

  const handleAddClick = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveClick = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const [direction, setDirection] = React.useState("up");
  const [hidden, setHidden] = React.useState(false);

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(!event.target.checked);
  };
  function createData(anh, ten, soLuong, soTien, donGia, size) {
    return { anh, ten, soLuong, soTien, donGia, size };
  }

  const rows = [
    createData(
      "//images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-" +
        "stadium-shirt-2023-24-with-gramos-9-printing_ss5_p-200479084+pv-1+u-k4hzwxcwwwitd0dv7frx+" +
        "v-fnakni6tfbys3tvvdgsr.png?_hv=2&w=900",
      "MPB",
      3,
      100.0,
      300.0,
      "XL"
    ),
    createData(
      "//images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-" +
        "stadium-shirt-2023-24-with-gramos-9-printing_ss5_p-200479084+pv-1+u-k4hzwxcwwwitd0dv7frx+" +
        "v-fnakni6tfbys3tvvdgsr.png?_hv=2&w=900",
      "MPB",
      3,
      100.0,
      300.0,
      "X"
    ),
  ];

  return (
    <div className={"container"}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
        sx={{
          marginTop: "20px",
        }}
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Box
            display="flex"
            justifyContent="space-between"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <Button variant="contained">Danh Sách</Button>
            <Button variant="contained" style={{ marginLeft: "850px" }}>
              Hóa Đơn
            </Button>

            <Button variant="contained">Thêm Sản Phẩm</Button>
          </Box>
          {/*table*/}
          <Box
            className="css"
            sx={{
              border: 1,
              borderColor: "divider",
              boxShadow: "0 0 0.7px gray",
            }}
          >
            <Box
              className="css-header"
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <h3>Giỏ Hàng</h3>
            </Box>
            <div>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Ảnh</TableCell>
                      <TableCell>Sản Phẩm</TableCell>
                      <TableCell>Số Lượng</TableCell>
                      <TableCell>Giá Tiền</TableCell>
                      <TableCell>Đơn Giá</TableCell>
                      <TableCell>Thao Tác</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.stt}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <img
                            style={{
                              width: "100px",
                              height: "100px",
                            }}
                            src={row.anh}
                          />
                        </TableCell>
                        <TableCell>
                          Tên Sản Phẩm:{row.ten} <br />
                          <br />
                          Size: {row.size}
                        </TableCell>

                        <TableCell
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "82px",
                          }}
                        >
                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: "white",
                              minWidth: "auto",
                              boxShadow: "none",
                              marginRight: "10px", // Thêm khoảng cách bên phải
                              marginTop: "-50px", // Điều chỉnh vị trí của nút "-" để căn chỉnh với nút "+"
                            }}
                          >
                            <IconButton
                              color="inherit"
                              aria-label="Add"
                              style={{ color: "black" }}
                              onClick={handleRemoveClick}
                            >
                              <RemoveIcon />
                            </IconButton>
                          </Button>

                          <Typography style={{ margin: "0 10px" }}>
                            {quantity}
                          </Typography>

                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: "white",
                              minWidth: "auto",
                              boxShadow: "none",
                              marginTop: "-50px", // Điều chỉnh vị trí của nút "+" để căn chỉnh với nút "-"
                            }}
                          >
                            <IconButton
                              color="inherit"
                              aria-label="Remove"
                              style={{ color: "black" }}
                              onClick={handleAddClick}
                            >
                              <AddIcon />
                            </IconButton>
                          </Button>
                        </TableCell>

                        <TableCell>{row.soTien}</TableCell>
                        <TableCell>{row.donGia}</TableCell>

                        <TableCell>
                          <div>
                            <React.Fragment>
                              <Button variant="contained">Delete</Button>
                              <Dialog>
                                <DialogTitle>Optional sizes</DialogTitle>
                                <DialogContent>
                                  <DialogContentText>
                                    You can set my maximum width and whether to
                                    adapt or not.
                                  </DialogContentText>
                                  <Box
                                    noValidate
                                    component="form"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column",
                                      m: "auto",
                                      width: "fit-content",
                                    }}
                                  ></Box>
                                </DialogContent>
                                <DialogActions>
                                  <Button>Close</Button>
                                </DialogActions>
                              </Dialog>
                            </React.Fragment>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Box>
        </Grid>

        <Grid item xs={1}></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={0.5}
        sx={{
          marginTop: "60px",
        }}
      >
        <Grid item xs={1}></Grid>
        <Grid
          item
          xs={10}
          style={{
            border: ".0625rem solid #d5d5d5",
            borderColor: "divider",
            boxShadow: "0 0 0.7px gray",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <Typography variant={"h6"} style={{ paddingLeft: "10px" }}>
              Tài Khoản
            </Typography>
            <Button variant="contained" style={{ marginRight: "10px" }}>
              Chon Tài Khoản
            </Button>
          </Box>
          <Divider />
          <Typography style={{ marginTop: "20px", marginBottom: "20px" }}>
            <span>Tên Tài Khoản: </span>{" "}
            <span style={{ marginLeft: "70px" }}>Khách Lẻ</span>
          </Typography>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
        sx={{
          marginTop: "40px",
        }}
      >
        <Grid item xs={1}></Grid>

        <Grid item xs={6}>
          <Divider />

          <Box
            sx={{
              height: 180,
            }}
            ariaLabel="SpeedDial playground example"
            hidden={hidden}
          >
            <Typography variant={"h4"} style={{ marginTop: "15px" }}>
              Thông Tin Khách Hàng
            </Typography>
            <Box
              sx={{
                maxWidth: "100%",
                marginTop: "30px",
              }}
            >
              <TextField fullWidth label="Họ Tên" sx={{ margin: 1 }} />
              <TextField fullWidth label="Email" sx={{ margin: 1 }} />
              <TextField fullWidth label="Số Điện Thoại" sx={{ margin: 1 }} />
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={4}
              >
                <Grid item xs={4}>
                  <FormControl sx={{ m: 1 }} fullWidth>
                    <InputLabel htmlFor="grouped-native-select">
                      Tỉnh/Thành Phố
                    </InputLabel>
                    <Select
                      native
                      defaultValue=""
                      id="grouped-native-select"
                      label="Grouping"
                    >
                      <option aria-label="None" value="" />
                      <optgroup label="Category 1">
                        <option value={1}>Option 1</option>
                        <option value={2}>Option 2</option>
                      </optgroup>
                      <optgroup label="Category 2">
                        <option value={3}>Option 3</option>
                        <option value={4}>Option 4</option>
                      </optgroup>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl sx={{ m: 1 }} fullWidth>
                    <InputLabel htmlFor="grouped-select">Quận/Huyện</InputLabel>
                    <Select
                      defaultValue=""
                      id="grouped-select"
                      label="Grouping"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <ListSubheader>Category 1</ListSubheader>
                      <MenuItem value={1}>Option 1</MenuItem>
                      <MenuItem value={2}>Option 2</MenuItem>
                      <ListSubheader>Category 2</ListSubheader>
                      <MenuItem value={3}>Option 3</MenuItem>
                      <MenuItem value={4}>Option 4</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl sx={{ m: 1 }} fullWidth>
                    <InputLabel htmlFor="grouped-select">Xã/Phường</InputLabel>
                    <Select
                      defaultValue=""
                      id="grouped-select"
                      label="Grouping"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <ListSubheader>Category 1</ListSubheader>
                      <MenuItem value={1}>Option 1</MenuItem>
                      <MenuItem value={2}>Option 2</MenuItem>
                      <ListSubheader>Category 2</ListSubheader>
                      <MenuItem value={3}>Option 3</MenuItem>
                      <MenuItem value={4}>Option 4</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <TextField
                fullWidth
                label="Địa Chỉ"
                id="fullWidth"
                sx={{ margin: 1 }}
              />

              <Box style={{ margin: 7 }}>
                <Typography
                  variant={"h6"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                    margin: 2,
                  }}
                >
                  <LocalShippingIcon sx={{ marginRight: "8px" }} /> Thời Gian
                  Giao Hàng Dự Kiến 24/09/2023
                </Typography>
                <Typography
                  variant={"h6"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                    margin: 2,
                    paddingBottom: "100px",
                  }}
                >
                  <LocalShippingIcon sx={{ marginRight: "8px" }} /> Đơn Vị Vận
                  Chuyển: <span style={{ color: "blue" }}>Giao Hàng Nhanh</span>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box style={{ border: ".0625rem solid #d5d5d5" }}>
            <Typography
              variant={"h4"}
              style={{ marginTop: "15px", marginLeft: "20px" }}
            >
              <PaymentIcon /> Thanh Toán
            </Typography>

            <Box
              sx={{
                backgroundColor: "#f5f6f8",
                width: "100%", // Đặt width thành 100% để rộng ra
                height: "100%", //
              }}
            >
              <FormControlLabel
                style={{ marginLeft: "20px" }}
                control={
                  <Switch
                    checked={!hidden}
                    onChange={handleHiddenChange}
                    color="primary"
                  />
                }
                label="Giao Hàng"
              />

              <Typography
                sx={{
                  padding: 1,
                  color: "black",
                  alignItems: "flex-start",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Mã Giảm Giá:
                <Button
                  variant="outlined"
                  style={{
                    marginLeft: "70px",
                    borderColor: "teal",
                    color: "teal",
                  }}
                >
                  Chọn Mã Giảm Giá
                </Button>
              </Typography>
              <Typography
                sx={{
                  padding: 1,
                  color: "black",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Tiền Hàng:</span>
                <span>900.000 đ</span>
              </Typography>
              <Typography
                sx={{
                  padding: 1,
                  color: "black",
                  alignItems: "flex-start",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Phí vận Chuyển:</span>
                <span>50.000 đ</span>
              </Typography>
              <Typography
                sx={{
                  padding: 1,
                  color: "black",
                  alignItems: "flex-start",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Giảm Giá:</span>
                <span>50.000 đ</span>
              </Typography>

              <Typography
                variant={"h6"}
                sx={{
                  padding: 2,
                  color: "red",
                }}
              >
                Tổng Số Tiền:{" "}
                <span style={{ marginLeft: "90px" }}>950.000 đ</span>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#242424",
                    "&:hover": {
                      backgroundColor: "black",
                    },
                    marginTop: 5,
                    marginBottom: 4,
                    width: "80%",
                    marginLeft: 5,
                    fontSize: "13px",
                    height: "40px",
                  }}
                >
                  Đặt Hàng
                </Button>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}

export default App;
