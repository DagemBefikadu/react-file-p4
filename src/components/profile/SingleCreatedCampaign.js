import React from 'react'

export default function SingleCreatedCampaign(props) {
    return (
        <div>
            {props.MyOneCampaign.name}
            <br />
            {props.MyOneCampaign.cause}
        </div>
    )
}
