import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';



const AddedElement = () => {
const [count, setCount] = useState(0)
    return(
    <>
    <p>
    <div style={{border: '2px solid #00A300', alignItems: 'Center', padding: '10px', background: '#132e9c'}}>
    <input placeholder='Category Name'/>
    <p></p>
    <input placeholder='Selector'/>
    <p></p>
    <div>
    <Fragment>
    <button onClick={() => setCount(count + 1)}>Add SubCategory</button>
    { [...Array(count)].map((_, i) => <AddedElement key={i} />) }
    </Fragment>
    </div>
    </div>
    </p>
    </>
    )
}


const WebScrapper = () => {

const [count, setCount] = useState(0)

  return (
  <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Right',
        height: '10vh'
      }}
    >
      <h1>Web Scrapper</h1>
    </div>
    <div style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Right',
        height: '2.5vh'
      }}>
      <label>
        Address url:
        <input type="text" name="url" placeholder='www.example.com' />
      </label>
      <input type="submit" value="Start Scrapping" />
      <div>
      <Fragment>
    <button onClick={() => setCount(count + 1)}>Add Category</button>
    { [...Array(count)].map((_, i) => <AddedElement key={i} />) }
      </Fragment>
      </div>
    </div>
  </>
  );
};

export default WebScrapper;

