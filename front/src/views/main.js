import React, { useState } from 'react';
import "../App.css";
import Navbar from '../components/Navbar/Navbar';
import Video from '../video/video.mp4';
import { Pagemain, PageBg, VideoBg, TextContent ,TextH1 } from './style/pagemain';
import Footer from '../components/Footer';
import Icons from '../components/icons';

function Main() {
    const [state,setState] = useState(false);

    let url="https://github.com/Keawkanok/commathprj";
    
    return (
        <div>
            <Navbar />
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
                        {/* <Footer.Title>Github</Footer.Title> */}
                       <a  href={url} ><Footer.Link><Icons className="fab fa-github" />Gighub</Footer.Link></a>
                       
                    </Footer.Column>
                    <Footer.Column>
                        {/* <Footer.Title>About Us</Footer.Title> */}
                        <Footer.Link><Icons className="fab fa-grav" />Name</Footer.Link>
                       
                    </Footer.Column>
                    <Footer.Column>
                        {/* <Footer.Title>About Us</Footer.Title> */}
                        <Footer.Link><Icons className="" />Thanyakon</Footer.Link>
                       
                    </Footer.Column>
                    <Footer.Column>
                        {/* <Footer.Title>About Us</Footer.Title> */}
                        <Footer.Link><Icons className="" />Keawkanok</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
        </div>
    );
}

export default Main;


