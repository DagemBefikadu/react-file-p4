## Tech Stack
EthioConnect is an application that uses MongoDB to store all the collections using the NoSQL database. The client side of the application was built using React, with styling provided by Bootstrap. Online deployment coming soon....


## Approach
I started with thinking out the idea once I got a decent grasp of what I wanted to make, I begin to create a wireframe with the necessary components making sure dive in to each componet. Once I got a good React wireframe I moved to building out the express NoSQL routes and models. Leverging the ERD platform from LUCID charts I mapped out everything. I then created a To Do list and tracked task assignments in Trello, which we continued to use throughout the development process together.



## Installation instructions.

Install node packages for the helpingHand React app: ```npm i axios boostrap react-bootstrap react-router-dom  sass uuid web-vitals --save @fortawesome/fontawesome-svg-core --save @fortawesome/free-solid-svg-icons --save @fortawesome/react-fontawesome```



## User Stories

The users of this applications would be anyone in Ethiopia who would want to get there non-profit or orginization out in the world. They would have the ability to log-in and create a campaign with criterias like (name,cause, image),  once those fields are filled out there campaign will show up for all users to see. Any user can personally contact them using the contact form and that data will only be avaialble to the campaign creator to see. All other users who are non campaign owners who are logged can look up a campaign baised off categories or description, add comments and delete comments. 

## Wire Frames

### User Journey


### Application Views


### React Components



## Overcoming Roadblocks

Our team encountered a few roadblocks when developing Helping Hand. One of most time consuming was getting our .map() array method to stop throwing an error when passing our data into components. We solved the issue by pivoting away from passing all of our data down from props to doing more API calls to our database inside of the components which needed the data.

Another roadblock we encountered was finding the most efficient way to store and reneder information about user's lists of favorite items. We decided to nest the favorites doucments inside of their respective user documents. We discovered that we could use .populate in our server to render the entirity of the item objects based off of the id's in the user's favorites array.

