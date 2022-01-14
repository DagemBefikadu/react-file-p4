import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap/'
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			{/* <h2>Home Page </h2> */}
			<Container>
			<Image fluid src="https://staticsb.we.org/f/52095/1152x640/d5e7b81505/ethiopia-carousel-10.jpg" />
			</Container>
		</>
	)
}

export default Home
