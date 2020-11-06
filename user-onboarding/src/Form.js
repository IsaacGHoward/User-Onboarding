import './App.css';
import React, {useState, useEffect} from 'react';
import * as Yup from "yup";
const axios = require('axios').default;
function Form() {
    const formSchema = Yup.object().shape({
        name: Yup
          .string()
          .required("Must include name."),
        email: Yup
          .string()
          .email("Must be a valid email address.")
          .required("Must include email address."),
        password: Yup
          .string()
          .min(6, "Passwords must be at least 6 characters long.")
          .required("Password is Required"),
        tos: Yup
          .boolean()
          .oneOf([true], "You must accept Terms of Service")
          // required isn't required for checkboxes.
      });
    const [errors, setErrors] = useState({
      name: "",
      email: "",
      password: "",
      tos:""
    });
    const [formState, setFormState] = useState({
      name:'',
      email:'',
      password:'',
      tos:''
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [users, setUsers] = useState([]);
    const formSubmit = e => {
        e.preventDefault();
        console.log("Submit");
        axios
        .post("https://reqres.in/api/users", formState)
        .then(res => {
            setUsers([...users, res.data]);
            console.log("success", res);
        })
        .catch(err => console.log(err.response));
    };
    const inputChange = e => {
        e.persist();
        let value = e.target.value;
        if(e.target.type === "checkbox")
            value = e.target.checked;
        Yup
        .reach(formSchema, e.target.name)
        .validate(value)
        .then(valid => {
        setErrors({
            ...errors,
            [e.target.name]: ""
        });
        })
        .catch(err => {
        setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
        });
        });
        setFormState({
            ...formState,
            [e.target.name]: value
        });
    };
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [formState]);
    return (
        <form onSubmit={formSubmit}>
            <label>
                Name:
                <input onChange={inputChange} type="text" id="nameInput" name="name"/>
            </label>
            <label>
                Email:
                <input onChange={inputChange} type="email" id="emailInput" name="email"/>
            </label>
            <label>
                Password:
                <input onChange={inputChange} type="password" id="passwordInput" name="password"/>
            </label>
            <label>
                Terms of Service:
                <input onChange={inputChange} type="checkbox" id="tosInput" name="tos"/>
            </label>
            <button disabled={buttonDisabled}>Submit</button>
            <br/>
            <div>
                Errors: 
                {errors.name.length > 0 ? (<p>{errors.name}</p>) : null}
                {errors.email.length > 0 ? (<p>{errors.email}</p>) : null}
                {errors.password.length > 0 ? (<p>{errors.password}</p>) : null}
            </div>
            <div>
                Users: 
                <pre>{JSON.stringify(users, null, 2)}</pre>
            </div>
            
        </form>
        
    );
    }

export default Form;
