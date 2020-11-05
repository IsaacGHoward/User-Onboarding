import './App.css';
import React, {useState} from 'react';
import * as Yup from "yup";
function Form() {
  const [formState, setFormState] = useState({
      name:'',
      email:'',
      password:'',
      tos:''
  });
  return (
    <form>
        <label>
            Name:
            <input type="text" id="nameInput" name="name"/>
        </label>
        <label>
            Email:
            <input type="email" id="emailInput" name="email"/>
        </label>
        <label>
            Password:
            <input type="password" id="passwordInput" name="password"/>
        </label>
        <label>
            Terms of Service:
            <input type="checkbox" id="tosInput" name="tos"/>
        </label>
        <button>Submit</button>
    </form>
  );
}

export default Form;
