import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig';
import MyCampaigns from './MyCampaigns';

export default function CreatedCampaigns(props) {
    const [myCampaigns, setMyCampaigns] = useState([]) 

    const getMyCampaigns = () => {
        axios({
            url: apiUrl + '/users/createdCampaigns',
            method: 'GET',
            headers: {
                'Authorization': `Token token=${props.user.token}`
            }
        })
            .then(foundUser => {
                console.log('hello user created route', foundUser)
                const foundUserCampaign = foundUser.data.users.createdCampaign
                setMyCampaigns(foundUserCampaign)
                console.log('foundUserCampaign', foundUserCampaign)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    const deleteCreatedCampaign = (createdId) => {
        console.log("here is id to delete", {createdId})
        axios({
            url: apiUrl + `/createdCampaigns/${createdId}`,
            method: 'DELETE',
            headers: {
                Authorization: `Token token=${props.user.token}`,
            }
        })
            .then(res => console.log('server response:', res))
            .then(() => {
                props.reloadCampaign()
            })
            .catch(err => console.log(err))
    }
 
    useEffect(() => {
        getMyCampaigns()
        console.log('all of userListings: ', myCampaigns)
    }, [])

    return (
        <div>
            <MyCampaigns myCampaigns={myCampaigns} deleteCreatedCampaign={deleteCreatedCampaign} />
        </div>
    )
}
