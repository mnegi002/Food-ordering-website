import { useState } from 'react'
import classes from './Form.module.css'
const Form = () => {
    const [error , setError] = useState(null)
    const [data , setData] = useState({
        name : '',
        email : '' ,
        subject : '',
        message : '',
    })
    
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    const changeHandler = (event)=>{
        const {name , value} = event.target
        setData((preVal)=>{
            if (!isValidEmail(event.target.value)) {
                setError('Email is invalid');
              } else {
                setError(null);
              }
        return {
            ...preVal,
            [name] : value,
        }
    })
    }
    const formHandler = (event)=>{
        event.preventDefault()
        alert('Your form is submitted successfully.')
    }
    return (
        <>
            <div className={classes.contactform}>
                <div className={classes.formheading}><h1>Message Us </h1></div>
                <div>
                    <form onSubmit={formHandler}>
                        <div className={classes.formlabel}>
                            <label htmlFor="name">Name<span>*</span></label>
                            <input type="text " 
                            placeholder="Enter Name"
                            name="name" 
                            value={data.name}
                            onChange={changeHandler}
                            required/>
                        </div>
                        <div className={classes.formlabel}>
                            <label htmlFor="email">E-mail<span>*</span></label>
                            <input type="email" 
                            placeholder="name@example.com"
                            name="email" 
                            value={data.email}
                            onChange={changeHandler} 
                            required/>
                        </div>
                        <div className={classes.formlabel}>
                            <label htmlFor="subject">Subject<span>*</span></label>
                            <input type="text " 
                            placeholder="Write your query"
                            name="subject" 
                            value={data.subject}
                            onChange={changeHandler} 
                            required/>
                        </div>
                        <div className={classes.formlabel}>
                            <label htmlFor="message">Additional Comments</label>
                            <textarea rows="6" cols="50"
                             placeholder="Tell us more about your concern"
                            name="message" 
                            value={data.message}
                            onChange={changeHandler} />
                        </div>
                        <button className={classes.formbutton} type="submit">
                            Submit Form
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Form