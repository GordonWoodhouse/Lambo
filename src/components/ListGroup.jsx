function ListGroup() {
    let items = ['new york','london','paris','seoul','glasgow',];

    const message = items.length === 0 && <p>No items found</p>;
    return (
        <>
            <h1>List</h1>
            {message}
            <ul className="list-group">
                {items.map((item) => (
                    <li 
                        className = "list-group-item" 
                        key ={item}
                        onClick = {(event) => console.log(event)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
        );
}

export default ListGroup;