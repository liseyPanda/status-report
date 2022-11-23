import {React, useState } from 'react';
import { Form, Col, Row, Button, Container, Card } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/LogoutButton';
import { jsPDF } from "jspdf";
import '../App.css'


// import JSONPretty from 'react-json-pretty';

    const FormPage = (props) => {
        const { user } = useAuth0();
        // get date parameters 
        const date = new Date(user.updated_at);
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        console.log(`user: ${user.name}`);

        const [today, setToday] = useState('');
        const [workshops, setWorkshops] = useState('');
        const [certs, setCerts] = useState('');
        const [trainings, setTrainings] = useState('');
        const [pursuits, setPursuits] = useState('');
        const [sales, setSales] = useState('');
        const [extra, setExtra] = useState('');
        const statusArr = [`Date: ${today}`, ` `,
        `Workshops: ${workshops}`, ` `,
        `Cerifications: ${certs}`, ` `,
        `Trainings: ${trainings}`, ` `,
        `Pursuits: ${pursuits}`, ` `,
        `Salesforce Cases: ${sales}`, ` `
        ]
        const anyElse = [`Anything Else: ${extra}`];

        // PDF Generate
        function pdfGenerate(props) {
            const doc = new jsPDF('p', 'mm', 'a4');

            let splitStatus = doc.splitTextToSize(statusArr, 180);
            let splitElse = doc.splitTextToSize(anyElse, 150)
            doc.text(10,10, `STATUS REPORT FOR: ${user.nickname}`)
            doc.text(15, 20, splitStatus);
            doc.text(15,110, splitElse);
            
            
            doc.save(`Status_Report_${month}_${day}_${year}.pdf`);
           

        }
        

        return (
                <Container>
                    {/* <JSONPretty data={user} /> */}
                    <Row className="title">
                        <h2>Status Report</h2>
                    </Row>
                    <Row>
                        <Col>
                            <Form className="statusForm">
                                <Row>
                                    <Form.Group as={Col} controlId="formGridName">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control name="email" 
                                                type="email" 
                                                placeholder="Enter email" 
                                                value={user.email} 
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Date*</Form.Label>
                                            <Form.Control name="date" 
                                            type="date" 
                                            placeholder="Date" 
                                            value={today}
                                            onChange={(e) => setToday(e.target.value)}
                                            />
                                    </Form.Group>
                                 </Row>                              
                                <Form.Group as={Col} controlId="formGridWork">
                                    <Form.Label>Workshops*</Form.Label>
                                    <Form.Control className="inputBox" name="workshops" 
                                    placeholder="AWS Automation completed on Tuesday" 
                                    value={workshops}
                                    onChange={(e) => setWorkshops(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} id="formGridCert">
                                    <Form.Label>Certifications*</Form.Label>
                                    <Form.Control className="inputBox" name="certs" 
                                    placeholder="Completed Azure Architect Associate" 
                                    value={certs}
                                    onChange={(e) => setCerts(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} id="formGridTraining">
                                    <Form.Label>Trainings*</Form.Label>
                                    <Form.Control className="inputBox" name="trainings" 
                                    placeholder="Taking Tanzu K8 Grid: halfway done" 
                                    value={trainings}
                                    onChange={(e) => setTrainings(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} id="formGridPursuit">
                                    <Form.Label>Pursuits*</Form.Label>
                                    <Form.Control className="inputBox" name="pursuits" 
                                    placeholder="No Pursuits at this time" 
                                    value={pursuits}
                                    onChange={(e) => setPursuits(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} id="formGridSales">
                                    <Form.Label>Salesforce Cases*</Form.Label>
                                    <Form.Control className="inputBox" name="salesforce" 
                                    placeholder="2 Salesforce Cases: description" 
                                    value={sales}
                                    onChange={(e) => setSales(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} id="formGridExtra">
                                    <Form.Label>Anything Else</Form.Label>
                                    <Form.Control className="inputBox" id="p-wrap" name="extra" 
                                    as="textarea" 
                                    placeholder="Anything you'd like to mention..." 
                                    value={extra}
                                    onChange={(e) => setExtra(e.target.value)}
                                    
                                    />
                                </Form.Group>
                    
                                <Button onClick={() => pdfGenerate()} className="sub-btn" variant="primary" type="submit">
                                    Download PDF
                                </Button>
                            
                            </Form >
                   
                        </Col>
                        <Col>
                            <Card className="text-left" id="logoutCard">
                                <Card.Header><b>User: {user.nickname}</b></Card.Header>
                                <Card.Body >
                                    <img src={user.picture} alt={user.name}/>
                                    <Card.Text>
                                    <b>Email: </b>{user.email}
                                    </Card.Text>
                                    <div className="buttons" id="logout-btn"> 
                                     <LogoutButton />
                                    </div>
                                </Card.Body>
                                <Card.Footer className="text-muted">Last Updated: {month}.{day}.{year}</Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <div className='sessionTimer'>Made by Sterling with 💖</div>
                    </Row>
                </Container>
            
        )
    }

    export default FormPage;