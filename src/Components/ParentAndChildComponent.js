/**
 * A React Machine code
 * Create a simple page in react (Parent and Children component)
 *
 * - PARENT Component
 * 1. It has one Input field and button
 * 2. Enter any book name and press button
 * 3. It should pass the details to child component as props
 *
 * -Child Component
 * 1. It receives the props
 * 2. It should display the tabular format and serial number should be
 * added but it should be automatic numbers
 *
 *
 */
import React, { useState } from "react";

const ParentAndChildComponent = () => {
  const [bookName, setBookName] = useState("");
  const [bookList, setBookList] = useState([]);

  const handleInputChange = (e) => {
    setBookName(e.target.value);
  };

  const handleButtonClick = () => {
    if (bookName) {
      setBookList([...bookList, bookName]);
      setBookName("");
    }
  };
  return (
    <div>
      <h1>My Book Store</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your text here"
          value={bookName}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Update</button>
      </div>
      <ChildComponent bookList={bookList} />
    </div>
  );
};

function ChildComponent({ bookList }) {
  return (
    <div>
      <h2>Book List</h2>
      <table className="App">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{book}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParentAndChildComponent;
