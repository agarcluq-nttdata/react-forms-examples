import React from 'react';
import './style.css';
import {FormControled} from './FormControled.js'
import {FormNoControled} from './FormNoControled.js'
export default function App() {
  return (
    <div>
      <h1>Forms</h1>
      <FormControled/>  
      {/* <FormNoControled/>  */}
    </div>
  );
}
