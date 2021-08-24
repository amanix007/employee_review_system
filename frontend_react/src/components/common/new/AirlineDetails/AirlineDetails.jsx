import React from 'react';
import './AirlineDetails.css';



export default function AirlineDetails(props) {
	// let location = null;
	// location = useGeoLocation();



	// React.useEffect(() => {
	// 	console.log("location", location.country);

	// }, [])

	return (
		<section className="about-flight section-padding bg-light">
			<div className="container">
				<div className="section-title mb-4">
					<h5 className="fw-400 mb-2">About</h5>
					<h2 className="fw-600">{props.name}</h2>
				</div>
				<div className="section-content mt-32" dangerouslySetInnerHTML={{ __html: props.details }}></div>
			</div>
		</section>
	)
}
