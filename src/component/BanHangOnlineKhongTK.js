import {
    
    Box, Button,
    Divider,
     FormControl,
    Grid,
    InputLabel, ListSubheader, MenuItem,
    Paper, Select,
    TextField,
    Typography
} from "@mui/material";
import React, { useState } from 'react';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Footer from "./footer";

function App() {

const [direction, setDirection] = React.useState('up');
const [hidden, setHidden] = React.useState(false);

const handleDirectionChange = (event) => {
    setDirection(event.target.value);
};

const handleHiddenChange = (event) => {
    setHidden(!event.target.checked);
};

    return (
        <div className={"container"}>

            <Grid   container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={4}
                  sx={{
                      marginTop: '50px',
                  }}
            >
                <Grid item xs={1}>
                </Grid>

                <Grid item xs={6}>
                    <Divider />


                            <Typography variant={'h4'} style={{marginTop:'15px'}}>
                                Thông Tin Khách Hàng
                            </Typography>
                        <Box
                            sx={{
                                maxWidth: '100%',
                                marginTop: '30px',

                            }}
                        >
                            <TextField fullWidth label="Họ Tên"  sx={{margin:1}}/>
                            <TextField fullWidth label="Email" sx={{margin:1}}/>
                            <TextField fullWidth label="Số Điện Thoại"  sx={{margin:1}}/>
                            <Grid   container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="stretch"
                                    spacing={4}>
                                <Grid item xs={4}>
                                    <FormControl sx={{ m: 1}} fullWidth>
                                        <InputLabel htmlFor="grouped-native-select">Tỉnh/Thành Phố</InputLabel>
                                        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
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
                                        <Select defaultValue="" id="grouped-select" label="Grouping">
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
                                        <Select defaultValue="" id="grouped-select" label="Grouping">
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
<TextField fullWidth label="Địa Chỉ" id="fullWidth" sx={{margin:1}}/>


                            <Box style={{margin:7}}>
                                <Typography variant={'h6'} sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold',margin:2}}>
                                    <LocalShippingIcon sx={{ marginRight: '8px' }} /> Thời Gian Giao Hàng Dự Kiến 24/09/2023
                                </Typography>
                                <Typography variant={'h6'} sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold',margin:2 }}>
                                    <LocalShippingIcon sx={{ marginRight: '8px' }} /> Đơn Vị Vận Chuyển: <Typography style={{color:'blue'}}>Giao Hàng Nhanh</Typography>
                                </Typography>

                            </Box>


                        </Box>

                    {/*</Box>*/}
                </Grid>
                <Grid item xs={4}>

                        <Box style={{ border: '.0625rem solid #d5d5d5' ,
                        }}>
                            <Typography variant={'h4'} style={{marginTop:'15px', marginLeft:'20px'}}>
                                <PaymentIcon /> Thanh Toán
                            </Typography>

                            <Box sx={{
                                backgroundColor: '#f5f6f8',
                                width: '100%', // Đặt width thành 100% để rộng ra
                                height:'100%' //
                            }}>

                                

                                <Typography sx={{
                                    padding: 1,
                                    color: 'black',
                                    alignItems: 'flex-start',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    Mã Giảm Giá:<Button variant="outlined" style={{ marginLeft: '70px', borderColor: 'teal', color: 'teal' }}>Chọn Mã Giảm Giá</Button>
                                </Typography>
                                <Typography sx={{
                                    padding: 1,
                                    color: 'black',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <Typography>Tiền Hàng:</Typography>
                                    <Typography>900.000 đ</Typography>
                                </Typography>
                                <Typography sx={{
                                    padding: 1,
color: 'black',
                                    alignItems: 'flex-start',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <Typography>Phí vận Chuyển:</Typography>
                                    <Typography>50.000 đ</Typography>
                                </Typography>
                                <Typography sx={{
                                    padding: 1,
                                    color: 'black',
                                    alignItems: 'flex-start',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <Typography>Giảm Giá:</Typography>
                                    <Typography>50.000 đ</Typography>
                                </Typography>


                                <Typography variant={'h6'} sx={{
                                    padding: 2,
                                    color:'red'

                                }}>
                                    Tổng Số Tiền: <Typography style={{marginLeft:'90px'}}>950.000 đ</Typography>
                                    <Button
                                        variant="contained"


                                        sx={{
                                            backgroundColor:'#242424',
                                            '&:hover': {
                                                backgroundColor: 'black',
                                            },
                                            marginTop:3,
                                            width:'80%',
                                            marginLeft:5,
                                            fontSize:'13px',
                                            height:'40px',
                                        }}
                                    >
                                        Đặt Hàng
                                    </Button>
                                </Typography>
                            </Box>
                            <Box>
                             <Typography style={{marginTop:'20px',marginLeft:'20px'}}>
                                 Sản Phẩm
                             </Typography>

                                <Box style={{marginTop:'15px',marginBottom:'15px'}}>
                                    <Divider/>
                                    <Grid container style={{marginTop:'20px'}}>
                                        <Grid item xs={4}>
                                            <img style={{
                                                width:'100px',
                                                height:'100px'
}} src={'//images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-' +
                                                'stadium-shirt-2023-24-with-gramos-9-printing_ss5_p-200479084+pv-1+u-k4hzwxcwwwitd0dv7frx+' +
                                                'v-fnakni6tfbys3tvvdgsr.png?_hv=2&w=900'} />
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant={'body1'} >
                                                Paris Saint-Germain x Jordan Third Stadium Shirt 2023-24 - Womens
                                            </Typography>
                                            <Typography style={{marginTop:'10px'}} variant={'body1'}>
                                                Tên: Tran Van Thinh
                                            </Typography>
                                            <Typography style={{marginTop:'10px'}} variant={'body1'}>
                                                Số áo: 9
                                            </Typography>
                                            <Typography style={{marginTop:'10px'}} variant={'body1'}>
                                                Giá : 100.000 đ
                                            </Typography>

                                            <Typography style={{marginTop:'10px',fontSize:'13px'}} variant={'body1'}>
                                                <Typography style={{ fontWeight: 'bold'}}>Size: XL</Typography>   <Typography style={{ fontWeight: 'bold',marginLeft:'22px' }}>Số Lượng: 1</Typography>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box style={{marginTop:'15px',marginBottom:'15px'}}>
                                    <Divider/>
                                    <Grid container style={{marginTop:'20px'}}>
                                        <Grid item xs={4}>
                                            <img style={{
                                                width:'100px',
                                                height:'100px'
                                            }} src={'//images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-' +
                                                'stadium-shirt-2023-24-with-gramos-9-printing_ss5_p-200479084+pv-1+u-k4hzwxcwwwitd0dv7frx+' +
                                                'v-fnakni6tfbys3tvvdgsr.png?_hv=2&w=900'} />
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant={'body1'} >
                                                Paris Saint-Germain x Jordan Third Stadium Shirt 2023-24 - Womens
</Typography>
                                            <Typography style={{marginTop:'10px'}} variant={'body1'}>
                                                Tên: Tran Van Thinh
                                            </Typography>
                                            <Typography style={{marginTop:'10px'}} variant={'body1'}>
                                                Số áo: 9
                                            </Typography>
                                            <Typography style={{marginTop:'10px'}} variant={'body1'}>
                                                Giá : 100.000 đ
                                            </Typography>

                                            <Typography style={{marginTop:'10px',fontSize:'13px'}} variant={'body1'}>
                                                <Typography style={{ fontWeight: 'bold'}}>Size: XL</Typography>   <Typography style={{ fontWeight: 'bold',marginLeft:'22px' }}>Số Lượng: 1</Typography>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box style={{marginTop:'15px',marginBottom:'15px'}}>
                                    <Divider/>
                                    <Grid container style={{marginTop:'20px'}}>
                                        <Grid item xs={4}>
                                            <img style={{
                                                width:'100px',
                                                height:'100px'
                                            }} src={'//images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-' +
                                                'stadium-shirt-2023-24-with-gramos-9-printing_ss5_p-200479084+pv-1+u-k4hzwxcwwwitd0dv7frx+' +
                                                'v-fnakni6tfbys3tvvdgsr.png?_hv=2&w=900'} />
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant={'body1'} >
                                                Paris Saint-Germain x Jordan Third Stadium Shirt 2023-24 - Womens
                                            </Typography>
                                            <Typography style={{marginTop:'10px'}} variant={'body1'}>
                                                Tên: Tran Van Thinh
                                            </Typography>
                                            <Typography style={{marginTop:'10px'}} variant={'body1'}>
                                                Số áo: 9
                                            </Typography>
                                            <Typography style={{marginTop:'10px'}} variant={'body1'}>
                                                Giá : 100.000 đ
</Typography>

                                            <Typography style={{marginTop:'10px',fontSize:'13px'}} variant={'body1'}>
                                                <Typography style={{ fontWeight: 'bold'}}>Size: XL</Typography>   <Typography style={{ fontWeight: 'bold',marginLeft:'22px' }}>Số Lượng: 1</Typography>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>

                            </Box>

                        </Box>

                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
        </div>
    );
}
export default App;


