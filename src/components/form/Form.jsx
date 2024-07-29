import { useState } from 'react';
import './Form.css'

function Form() {

    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        contact: '',
        subject: '',
        resume: '',
        url: '',
        about: ''
    })

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:[e.target.value]})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    const ResetFun = () => {
        setValues({
        firstname: '',
        lastname: '',
        email: '',
        })
    }
    return(
        <div className='form'>
            <h1>React Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstname'>First Name :</label>
                <input type='text' placeholder='Enter First Name' name='firstname' 
                onChange={(e) => handleChanges(e)} required value={values.firstname} />

                <label htmlFor='lastname'>Last Name :</label>
                <input type='text' placeholder='Enter Last Name' name='lastname'
                onChange={(e) => handleChanges(e)} required value={values.lastname}/>

                <label htmlFor='email'> Email :</label>
                <input type='email' placeholder='Enter Email' name='email' 
                onChange={(e) => handleChanges(e)} required value={values.email}/>

                <label htmlFor='contact'>Contact :</label>
                <input type='text' placeholder='Enter Phone Number' name='contact' 
                onChange={(e) => handleChanges(e)} />

                <label htmlFor='firstname'>Gender :</label>
                <input type='radio' name='gender' onChange={(e) => handleChanges(e)} /> Male
                <input type='radio' name='gender' onChange={(e) => handleChanges(e)} /> Female

                <label htmlFor='subject'>Subject :</label>
                <select name='subject' id='subject' onChange={(e) => handleChanges(e)} >
                    <option value="math">Math</option>
                    <option value="physic">Physic</option>
                    <option value="English">Engilsh</option>
                </select>

                <label htmlFor='resume'>Resume :</label>
                <input type='file' placeholder='Select Resume' name='resume' 
                onChange={(e) => handleChanges(e)} />

                <label htmlFor='url'>URL :</label>
                <input type='text' name='url' placeholder='Enter Image URL' 
                onChange={(e) => handleChanges(e)} />

                <label htmlFor='about'>About :</label>
                <textarea name='about' id='about' cols="30" rows="10" placeholder='Enter discription'
                onChange={(e) => handleChanges(e)}  ></textarea>

                <button type='button' onClick={ResetFun}>Reset</button>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form