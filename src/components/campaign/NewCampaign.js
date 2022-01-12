import React from 'react'

export default function NewCampaign() {
    return (
        <>
          <form action="">
            <div>
                <label htmlFor="name"></label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="cause"></label>
                <input type="text" id="cause" name="cause" />
            </div>
            <div>
                <label htmlFor="needs"></label>
                <input type="text" id="needs" name="needs" />
            </div>
            <div>
                <label htmlFor="website"></label>
                <input type="text" id="website" name="website" />
            </div>
            <div>
                <label htmlFor="image"></label>
                <input type="text" id="image" name="image" />
            </div>
            </form>  
        </>
    )
}
