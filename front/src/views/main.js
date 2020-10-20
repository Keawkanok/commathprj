import React, { useState } from 'react';
import "../App.css";
import Navbar from '../components/Navbar/Navbar';
import Video from '../video/video.mp4';
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import { Pagemain, PageBg, VideoBg, TextContent ,TextH1 } from './style/pagemain';
import Footer from '../components/Footer';
import Icons from '../components/icons';
import'../components/Navbar/Navbar.css';
import { useNavigate } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    colorButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        // textDecoration: 'none',
        listStyle: 'none',
        
      
    },
  
  
  }));

function Main() {
    const state = { clicked: false }
    const handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }
    const classes = useStyles();
    // const [state,setState] = useState(false);

    let url="https://github.com/Keawkanok/commathprj";
    
    // const classes = useStyles();
    const navigate = useNavigate();

    const nextPage = (page) => {
        navigate("/"+page);
  }

    return (
        <div>
         <nav className="NavbarItem">
            <div className={state.clicked ? 'nav-menu active' : 'nav-menu'} >

                    <ul  className={classes.colorButton}>
                        <li  onClick={()=>{nextPage("page1")}} color="primary">
                            <h5>1.Basic Computing</h5>
                        </li>
                    </ul>
                    <ul className={classes.colorButton}>
                        <li  onClick={()=>{nextPage("page2")}} color="primary">
                            <h5>2.Linear Equations</h5>
                        </li>
                    </ul>  
                    <ul className={classes.colorButton} >
                        <li  onClick={()=>{nextPage("page3")}} color="primary">
                            <h5>3.Interpolation	</h5>
                        </li>
                    </ul> 
                    <ul className={classes.colorButton} >
                        <li   onClick={()=>{nextPage("page4")}} color="primary">
                            <h5>4.Differentiation</h5>
                        </li>
                    </ul >
                    <ul className={classes.colorButton} >
                        <li  onClick={()=>{nextPage("page5")}} color="primary">
                            <h5>5.Integration	</h5>
                        </li>
                    </ul>
                    <ul className={classes.colorButton} >
                        <li  onClick={()=>{nextPage("page6")}} color="primary">
                            <h5>6.Root-finding</h5>
                        </li>
                    </ul>
                </div>  
            </nav>
        {/* <Button onClick={()=>{nextPage("page1")}} color="primary">
            <h5>1.Basic Computing</h5>
        </Button><br/>
        <Button onClick={()=>{nextPage("page2")}} color="primary">
            <h5>2.Linear Equations</h5>
        </Button><br/>
        <Button onClick={()=>{nextPage("page3")}} color="primary">
            <h5>3.Interpolation	</h5>
        </Button><br/>
        <Button onClick={()=>{nextPage("page4")}} color="primary">
            <h5>4.Differentiation</h5>
        </Button><br/>
        <Button onClick={()=>{nextPage("page5")}} color="primary">
            <h5>5.Integration	</h5>
        </Button><br/>
        <Button onClick={()=>{nextPage("page6")}} color="primary">
            <h5>6.Root-finding</h5>
        </Button><br/> */}
        
 
            {/* <Navbar /> */}
                <Pagemain>
                        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                    <TextContent>
                        <TextH1>Computational Mathematics</TextH1>
                    </TextContent>
                </Pagemain>
                <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                       <a  href={url} ><Footer.Link><Icons className="fab fa-github" />Gighub</Footer.Link></a>
                       
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link><Icons className="fab fa-grav" />Name</Footer.Link>
                       
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link><Icons className="" />Thanyakon</Footer.Link>
                       
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link><Icons className="" />Keawkanok</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
        </div>
    );
}

export default Main;


