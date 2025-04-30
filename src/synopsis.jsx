function Synopsis({selectedIndex, top_books}) {

    const book_data = top_books.results[selectedIndex].book_details[0];

    const { title, author, description } = book_data;

    return (
        <>
            <div>
                <h2>{title}</h2>
                <p>Author: {author}</p>
                <p>Synpsis: {description}</p>
            </div>
        </>
    )
}

export default Synopsis