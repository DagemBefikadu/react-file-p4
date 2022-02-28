import { useParams, useNavigate } from "react-router-dom";
import  { useState, useEffect } from 'react';
import axios from "axios";
import apiUrl from '../../apiConfig'
import { Button } from "react-bootstrap/";
import Comment from "../comment/Comment";
import ContactForm from "../about/ContactForm";
const groundStyle = {
    color: 'white',
}


//import axios
// import axios from "axios";

export default function CampaignDetail(props) {
    
    const[detailedCampaign, setDetailedCampaign] = useState([])

    useEffect(() => {
        // console.log('getting item')
        getCampaign()
      }, [])


    let newParam = useParams()  
    const navigate = useNavigate()

    const getCampaign = () => {
        // console.log("Here is paramId", newParam)
        fetch(apiUrl + `/campaigns/${newParam.id}`)
        .then(response=>response.json())
        .then(foundCampaign => {
            setDetailedCampaign(foundCampaign.campaign)
            // console.log('singleItem with comment ', foundCampaign.campaign.comment)
        })

    }

    const createFav = () => {
        if (props.user) {
            axios({
                url: apiUrl + `/campaigns/favorites/${newParam.id}`,
                method: 'PATCH',
                headers: {
                    Authorization: `Token token=${props.user.token}`           
                },
            })
            .then(res => console.log('server response:', res))
            .then(() => navigate('/campaigns'))
            .catch(err => console.log(err))
        } 
    }

    
    return (
        <div>
            <h1 style={groundStyle}>{detailedCampaign.name}</h1>
            <Button className='mb-3' onClick={createFav}>Fave Me</Button>
            <p style={groundStyle}>{detailedCampaign.cause}</p>
            <small style={groundStyle}>{detailedCampaign.location}</small>
            <hr />
            <h4 style={groundStyle}>
            Comment Section: 
            </h4>
            {<Comment campaignId = {newParam.id} user ={props.user}/>}
            {/* {commentList} */}
            <ContactForm user={props.user} />
        </div>
    )
}

