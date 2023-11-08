'use client'
import { Grid } from "@mui/material";
import { Nav } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowLeft } from 'react-icons/sl';
import Button from 'react-bootstrap/Button';

const PageLayoutHeader = () => {
    const grayTextColorStyle = { color: 'white', opacity: 0.6 };

    return (
        <Grid>
            <Navbar bg="#101010" className="text-slate-400" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Container>
                    <Navbar.Brand className="d-flex align-items-center">
                        <button className="custom-button" style={grayTextColorStyle}>
                            <SlArrowLeft />
                        </button>
                        <button className="custom-button" style={grayTextColorStyle}>
                            <SlArrowRight />
                        </button>
                    </Navbar.Brand>
                    <div className="div-adust" style={{ flex: 1 }}></div> 
                    <Nav className="me-auto" style={{ textAlign: 'center' }}>
                        <Nav.Link href="#home" style={grayTextColorStyle}>Premium</Nav.Link>
                        <Nav.Link href="#features" style={grayTextColorStyle}>Hỗ trợ</Nav.Link>
                        <Nav.Link href="#pricing" style={grayTextColorStyle}>Tải xuống</Nav.Link>
                        <Nav.Link href="#pricing" style={grayTextColorStyle}>Đăng ký</Nav.Link>
                        <Button variant="secondary" size="sm">
                            Đăng nhập
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
        </Grid>
    );
};

export default PageLayoutHeader;
