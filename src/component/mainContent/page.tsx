'use client'
import { Grid } from "@mui/material";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PageLayoutMainContent = () => {
    return(
        <Grid xs={12} >
            <section  className="div-content">
                <Grid>
                    <Grid>
                        <section aria-label="Danh sách phát trên Spotify">
                        <Navbar>
                        <Navbar.Brand href="#home">
                                    <a>
                                        <span>Danh sách phát trên Spotify</span>
                                    </a>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                                <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text className="pr-2.5">
                                    <a>
                                        <span>Hiện tất cả</span>
                                    </a>
                                </Navbar.Text>
                                </Navbar.Collapse>
                            </Navbar>
                        </section>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className="p-3">
                    <Grid item xs={4}>
                        <Card className="card-item">
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Images_2015_logo.svg" />
                            <Card.Body>
                                <Card.Title>RapCaviar</Card.Title>
                                <Card.Text>
                                Some quick example text to bu
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className="card-item" >
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Images_2015_logo.svg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to bui
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className="card-item" >
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Images_2015_logo.svg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Grid>
                </Grid>
            </section>
        </Grid>
    )
}
export default PageLayoutMainContent;