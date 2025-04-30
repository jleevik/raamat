import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

function Controls({ selectedIndex, setSelectedIndex, top_books }) {
    const advance_book = () => {
        if (selectedIndex < 4) {
          setSelectedIndex(selectedIndex + 1);
        }
    }
    
    const retreat_book = () => {
        if (selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
        }
    }
    

    return (
        <>
            <ListGroup as="ol" numbered>
            {top_books.results.map((book, index) => (
                index < 5 && <ListGroupItem
                    as="li"
                    key={index}
                    action
                    onClick={() => setSelectedIndex(index)}
                    className={selectedIndex === index ? 'active' : ''}
                >
                    {book.book_details[0].title}
                </ListGroupItem>
                ))}
            </ListGroup>
            <Button onClick={advance_book}>Next</Button>
            <Button onClick={retreat_book}>Prev</Button>
        </>
    )

}

export default Controls