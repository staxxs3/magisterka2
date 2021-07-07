import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import { ReactDOM } from 'react';



const AddedElement = () => <p><input placeholder='text box' /></p>
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
        URL:
        <input type="text" name="url" placeholder='URL' />
      </label>
      <input type="submit" value="Start Scrapping" />
      <Fragment>
    <button onClick={() => setCount(count + 1)}>Add Category</button>
    { [...Array(count)].map((_, i) => <AddedElement key={i} />) }
      </Fragment>
    </div>
  </>
  );
};

export default WebScrapper;

