import React from  'react'
import Lottie from  'react-lottie';

function LottieControl(props) {

	const { height, width, animation } = props
	
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};
	return (
		<div>
			<Lottie  
				options={defaultOptions}  
				height={height}  
				width={width }
			/>
		</div>
	)
}
export default LottieControl