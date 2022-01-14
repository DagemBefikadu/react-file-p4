import React from 'react'
import  { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import apiUrl from '../../apiConfig'
import axios from 'axios'

export default function ShowContact(props) {
       const [detailedContact, setDetailedContact] = useState([])

       useEffect(() => {
        console.log('getting contacts ')
        getContact()
      }, []);


    //   const campaignId = useParams()
    //   const newCampaignId = campaignId
      const {pathname} = useLocation()
      const campaignId = pathname.split('/')[2]

    const getContact = () => {
        console.log("here is the props.params", campaignId)
        // console.log("here is the coomment", props.params._id)
        // console.log("here is the campaignId", campaignId)
        // console.log("here is cId", contactId)
        fetch(`http://localhost:8000/campaigns/${campaignId}/contacts/${campaignId}`)
        .then((response)=>response.json())
        .then((foundContact) => {
            setDetailedContact(foundContact)
            console.log('single Contact', foundContact)
        })
        .catch((err) => {
            console.log(err);
        });
    }
    return (
        <div>
             <h1>Posted Contacts</h1> 
             <h3>{detailedContact}</h3>
        </div>
    )
}

