import React from 'react'
import "../App.css";
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();
  
    const nextPage = (page) => {
      navigate("/" + page);
    }  
    return (
        <div>
            <Button onClick={()=>{nextPage("page1")}} color="btn btn-dark">
                <h5>1.Basic Computing</h5>
            </Button><br/>
            <Button onClick={()=>{nextPage("page2")}} color="btn btn-dark">
                <h5>2.Linear Equations</h5>
            </Button><br/>
            <Button onClick={()=>{nextPage("page3")}} color="btn btn-dark">
                <h5>3.Interpolation	</h5>
            </Button><br/>
            <Button onClick={()=>{nextPage("page4")}} color="btn btn-dark">
                <h5>4.Differentiation</h5>
            </Button><br/>
            <Button onClick={()=>{nextPage("page5")}} color="btn btn-dark">
                <h5>5.Integration	</h5>
            </Button><br/>
            <Button onClick={()=>{nextPage("page6")}} color="btn btn-dark">
                <h5>6.Root-finding</h5>
            </Button><br/>
        </div>
    );
}

export default Main;



