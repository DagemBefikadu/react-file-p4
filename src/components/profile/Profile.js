import React from 'react'
// import  { useState, useEffect } from 'react';
// import { useParams, useLocation } from "react-router-dom";
// import apiUrl from '../../apiConfig'
import CreatedCampaigns from './CreatedCampaigns'
// import axios from 'axios'
//Code editing

export default function Profile(props) {
    // console.log("this is profile", props)
    // const[detailedContact, setDetailedContact] = useState([])

    // useEffect(() => {
    //     console.log('getting contacts ')
    //     getContact()
    //   }, []);


    //   const campaignId = useParams()
    // // const {pathname} = useLocation()
    // // const campaignId = pathname.split('/')[2]
    // // const contactId = pathname.split('/')[3]

    // const getContact = () => {
    //     console.log("here is the campaignId", campaignId.contact)
    //     // console.log("here is the campaignId", campaignId._id)
    //     // console.log("here is the campaignId", campaignId)
    //     // console.log("here is cId", contactId)
    //     fetch(apiUrl + `/campaigns/${campaignId}/contacts/${campaignId.id}`)
    //     .then((response)=>response.json())
    //     .then((foundContact) => {
    //         setDetailedContact(foundContact)
    //         console.log('single Contact', foundContact)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }

    // const getContact = () => {
    //     console.log("here is the campaignId", campaignId)
    //     console.log("here is cId", contactId)
    //     axios({ 
    //         url: apiUrl + `/campaigns/${campaignId}/contacts/${campaignId}`,
    //         method: "GET",
    //         headers: {
    //             Authorization: `Token token=${props.user.token}`,
    //         },
    //     })
    //     .then((response)=>response.json())
    //     .then((foundContact) => {
    //         setDetailedContact(foundContact)
    //         console.log('single Contact', foundContact)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }

    return (
        <div>
            <h1>{props.user.name}</h1>
            <hr />
            <CreatedCampaigns user={props.user} reloadCampaign={props.reloadCampaign}/>
            <hr />
            {/* <h1>Posted Contacts</h1>
            <h3>{props.detailedContact.name}</h3>
            <p>{props.detailedContact.cause}</p> */}
        </div>
    )
}
