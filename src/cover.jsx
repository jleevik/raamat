import { useEffect, useState } from 'react'

function Cover({ selectedIndex, top_books }) {
    const [cover_url, setCoverUrl] = useState(null);
    useEffect(() => {
        const iban = top_books.results[selectedIndex].book_details[0].primary_isbn13;
        const api_url = `https://bookcover.longitood.com/bookcover/${iban}`;
        fetch(api_url)
          .then(response => response.json())
          .then(data => {
            const url = data.url;
            setCoverUrl(url);
          })
          .catch(error => {
            console.error('Error fetching book cover:', error);
          });
      }, [selectedIndex, top_books]);

    return (
        <>
            {cover_url ? (
                <img src={cover_url} alt="book cover" />
            ) : (
                <p>No cover available.</p>
            )}
        </>
    )
}

export default Cover