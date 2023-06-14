// 
import React from 'react'
import DataTable from 'react-data-table-component'
import { Row, Col, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Cards = () => {
  return (
    <>
      <div className="container">
        <Row>
          <Col xs={12}>
            <h5 id='report' style={{ borderRadius: '10px', background: '#191970' }} className="text-center m-5  text-white " >विविध रेपोर्ट्स  </h5>
          </Col>
        </Row>
      </div>


      <div className='container'>
        <Row>
          <Col style={{ textAlign: 'center' }}>
            <Card style={{ width: '10rem', textAlign: 'center', color: 'white', backgroundImage: 'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360")', backgroundRepeat: 'none' }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZIBn2nOm_AO3M4QLFzIU-_ErwI7GY9ZTNp0_tjPmSGR262OCyZvyJZkD0xxcj-DIoDA&usqp=CAU" height={140} className='bg-white' />
              <Card.Body>
                <a href='#Home' target={'_blank'} >
                  <Button variant="success">दैनिक कार्यवाही</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ textAlign: 'center' }}>
            <Card style={{ width: '10rem', textAlign: 'center', backgroundImage: 'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360")', color: 'white' }}>
              <Card.Img variant="top" src="https://icon-library.com/images/district-icon/district-icon-22.jpg" height={140} />
              <Card.Body>
                <a href='#Home' target={'_blank'} >
                  <Button variant="success">जिला सूची</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ textAlign: 'center' }}>
            <Card style={{ width: '10rem', textAlign: 'center', backgroundImage: 'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360")', color: 'white' }}>
              <Card.Img variant="top" style={{ background: 'white', height: '140px' }} src="Images\department.png" />
              <Card.Body>
                <a href='#Home' target={'_blank'} >
                  <Button variant="success">विभाग सूची</Button>
                </a>
              </Card.Body>

            </Card>
          </Col>

          <Col style={{ textAlign: 'center' }}>
            <Card style={{ width: '10rem', textAlign: 'center', backgroundImage: 'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360")', color: 'white' }}>
              <Card.Img variant="top" height='140px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGYsTatTkc4mLJ3K8UQagj3u--r1jcdr9XmPWEKUVRFXcwmcQavd9Td0fLNYFAcCXnnE&usqp=CAU" />
              <Card.Body>
                <a href='#Home' target={'_blank'} >
                  <Button variant="success">ऑफिस सूची </Button>
                </a>
              </Card.Body>

            </Card>
          </Col>

          <Col style={{ textAlign: 'center' }}>
            <Card style={{ width: '10rem', textAlign: 'center', backgroundImage: 'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360")', color: 'white' }}>
              <Card.Img variant="top" style={{ background: 'white', height: '140px' }} src="Images\user.png" />
              <Card.Body>
                <a href='#Home' target={'_blank'} >
                  <Button variant="success" >ऑफिसर सूची</Button>
                </a>
              </Card.Body>

            </Card>
          </Col>

          <Col style={{ textAlign: 'center' }}>
            <Card style={{ width: '10rem', textAlign: 'center', backgroundImage: 'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360")', color: 'white' }}>
              <Card.Img variant="top" style={{ background: 'white', height: '140px' }} src="Images\office-officer.webp" />
              <Card.Body>
                <a href='#Home' target={'_blank'} >
                  <Button variant="success" style={{ fontSize: '12px' }}>ऑफिस/ऑफिसरसूची</Button>
                </a>
              </Card.Body>



            </Card>
          </Col>
        </Row>
        <br></br>
        <div textAlign='center'>
          <Row textAlign='center'>
            <Col style={{ textAlign: 'center' }}>
              <Card style={{ width: '10rem', textAlign: 'center', backgroundImage: 'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360")', color: 'white' }}>
                <Card.Img variant="top" style={{ background: 'white', height: '130px' }} src="Images\rti.webp" />
                <Card.Body>
                  {/* <Card.Title>आर.टी.आई.</Card.Title> */}
                  <a href='#Home' target={'_blank'} >

                    <Button variant="success">आर.टी.आई.</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>



  )
}

export default Cards;
