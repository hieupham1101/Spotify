"use client";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Grid } from "@mui/material";
import Image from 'next/image'
import logoSpotify from '../../../public/icon/logo_home.png'
import { AiTwotoneHome } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import { BiLibrary } from 'react-icons/bi';
import { GrAdd } from 'react-icons/gr';

const PageLayoutSidebar = () => {
    return(
        <Nav defaultActiveKey="/home" className="flex-column">
            <Grid className='p-1  div-logo'>
                <Grid className='p-1'>
                    <Image src={logoSpotify} alt='' style={{width: '120px', marginTop: '20px', padding: '0 24px'}}></Image>
                </Grid>
                <Grid className='p-3'>
                    <ul>
                        <li className='p-1'>
                            <a className='flex center' style={{ color: '#fff' }}>
                                <div>
                                    <AiTwotoneHome />
                                </div>
                                <div  className='pl-2' style={{paddingLeft:'10px'}}>
                                    <span>
                                        Trang chủ
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className='p-1'>
                            <a className='flex center' style={{color:'#fff'}}>
                                <div>
                                    <BsSearch/>
                                </div>
                                <div className='pl-2'  style={{paddingLeft:'10px'}}>
                                    <span>
                                        Tìm kiếm
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </Grid>
            </Grid>
            <Grid className='div-logo' style={{marginTop: '10px' , color:'#fff'}}>
                <Grid>
                    <Grid>
                        <Grid>
                            <header className='UvXqRORKQr_N3jlgGTcS'>
                            <Grid container className='p-2'>
                                <Grid item xs={6}>
                                    <Grid className='prGqQr33U0mG14TJ5V8a flex items-center'>
                                    <button className='flex pl-2 p-2'>
                                        <div>
                                        <BiLibrary />
                                        </div>
                                        <div className='pl-2' style={{ paddingLeft: '10px' }}>
                                        <span>Thư viện</span>
                                        </div>
                                    </button>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid className='prGqQr33U0mG14TJ5V8a flex items-center'>
                                        <button className='pl-2 p-2' style={{marginLeft:'auto'}}>
                                        <GrAdd />
                                        </button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            </header>
                        </Grid>
                    </Grid>
                    <div className="Grid" style={{ overflowY: 'auto', height: '180px',   padding: "10px" }}>
                        <Card className='p-2' style={{ padding: '10px' }}>
                            <Card.Body>
                            <Card.Title>Tạo danh sách phát đầu tiên của bạn</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Rất dễ! Chúng tôi sẽ giúp bạn</Card.Subtitle>
                            <Card.Text>
                            <Button variant="light" size="sm" active>
                                Tạo danh sách phát
                            </Button>{' '}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='p-2' style={{ padding: '10px' }}>
                            <Card.Body>
                            <Card.Title>Hãy cùng tìm và theo dõi một số podcast</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Chúng tôi sẽ cập nhật cho bạn thông tin về các tập mới</Card.Subtitle>
                            <Card.Text>
                                <Button variant="light" size="sm" active>
                                Duyệt xem podcast
                                </Button>{' '}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div> 
                </Grid>
                <Grid className='pt-32' style={{paddingTop:'120px'}}>
                        <button className='flex pl-2 p-2'>
                                <div>
                                    <FaGlobe />
                                </div>
                                <div className='pl-2' style={{paddingLeft:'10px'}}>
                                    <span>Tiếng việt</span>
                                </div>
                        </button>
                </Grid>
            </Grid>
        </Nav>
    )
}
export default PageLayoutSidebar;