import './App.css';
import React from 'react';
function Form() {
  return (
    <form>
        <label>
            Name:
            <input type="text"/>
        </label>
        <label>
            Email:
            <input type="email"/>
        </label>
        <label>
            Password:
            <input type="password"/>
        </label>
        <label>
            Terms of Service:
            <input type="checkbox" />
        </label>
    </form>
  );
}

export default Form;
