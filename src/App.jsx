import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, ListGroupItem, Card, Button } from 'react-bootstrap';
import Synopsis from './synopsis';
import Cover from './cover';
import Controls from './controls';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [top_books, setTopBooks] = useState(null);


  const api_url = 'https://api.nytimes.com/svc/books/v3/lists.json';

  const query = new URLSearchParams({
    'api-key':'kcwrYTg96t18YKTzo1LgUnCQACosubRt',
    'list': 'hardcover-fiction',
  })

  useEffect(() => {
    console.log('fetch api');
    fetch(`${api_url}?${query.toString()}`)
    .then(response => response.json())
    .then(data => {
      setTopBooks(data);
      console.log(data);
    }
    )
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  
  if (!top_books) {
    return (
      <h1>Loading...</h1>
    )
  } else {

  return (
    <>
      <div className="background-container">
        <div className="blur-overlay">
          <Container className='d-flex align-items-center' style={{ height: '100%' }}>
            <Row style={{ height: '90%',  minWidth: '100%'}}>
              <Col style={{ minWidth: '50%' }}>
                <div className="book">
                  <Cover selectedIndex={selectedIndex} top_books={top_books} />
                </div>
              </Col>
              <Col style={{ minWidth: '50%' }}>
                <Row >
                <div className='notepad p-3'>
                  <Synopsis selectedIndex={selectedIndex} top_books={top_books} />
                </div>
                </Row>
                <Row>
                  <Controls selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} top_books={top_books} />
                </Row>
              </Col>
            </Row>
          </Container>
          
          
        </div>
      </div>

    </>
  )
}
}

export default App
