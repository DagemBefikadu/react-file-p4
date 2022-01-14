import React from 'react'
import apiUrl from '../../apiConfig';
import { useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";

export default function ContactForm(props) {

    const params = useParams()

    const createComment = (e) => {
        e.preventDefault()
        console.log('firstName: ', e.target.firstName.value )
        console.log('lastName: ', e.target.lastName.value )
        console.log('email: ', e.target.email.value )
        console.log('message: ', e.target.message.value )
        // console.log('owner: ', props.user._id )
    axios({
        url: apiUrl + `/campaigns/${params.id}/contacts`,
        method: 'POST',
        data: {
            contact: {
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                email: e.target.email.value,
                message: e.target.message.value 
            },
        },
    })
    .then(res => {
        console.log('server response:', res)
    })
    .then(() => {
        e.target.firstName.value = "" 
        e.target.lastName.value = "" 
        e.target.email.value = "" 
        e.target.message.value = "" 
    })
    .catch(err => console.log(err))
    }

    return (
        <>
        <h1>Contact Form</h1>
          <form onSubmit={createComment}>
            <div>
                <label htmlFor="firstName">firstName</label>
                <input type="text" id="firstName" name="firstName" />
            </div>
            <div>
                <label htmlFor="lastName">lastName</label>
                <input type="text" id="lastName" name="lastName" />
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="message">message</label>
                <input type="text" id="message" name="message" />
            </div>
            <div>
                <input type="submit" value="Post" />
            </div>
            </form>  
        </>
    )
}