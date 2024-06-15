import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function addData() {
    setData([...data, inputValue]);
    setInputValue('');
  }

  function deleteData(index) {
    setData(data.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="todo">
        <div className="cont1">
          <h1 className="heading">Todo List</h1>
          <h3 className="heads">Add whatever you want to add here</h3>
        </div>
        <div className="container">
          <input
            className="form"
            type="text"
            placeholder="Add whatever you want to add here"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="btn btn-outline-success" type="button" onClick={addData}>
            ADD
          </button>
        </div>
      </div>
      <div className="content">
        {data.map((item, index) => (
          <div key={index} className="content1">
            <p className="content-1">{item}</p>
            <button type="button" className="btt" onClick={() => deleteData(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
