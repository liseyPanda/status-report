import React from "react";
import LoginButton from "./LoginButton";
import { Card } from 'react-bootstrap'

const CardLogin = () => {
    return(
            <div className="login-pg">
                <Card className="text-center" id="loginCard">
                <Card.Header>Status Report App</Card.Header>
                <Card.Body>
                    <Card.Title>Login to your Profile</Card.Title>
                    <hr></hr>
                    <Card.Text>
                    Once logged in you will be redirected to an authentication page.
                    If authentication is successful you will be able to fill out your status report and submit it to be emailed to your Manager. 
                    </Card.Text>
                    <LoginButton />
                </Card.Body>
                <Card.Footer className="text-muted card-ft">Thanks for using the App 🎉</Card.Footer>
                </Card>
            </div>    
    )
}

export default CardLogin;