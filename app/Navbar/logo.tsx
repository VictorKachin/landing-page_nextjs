import Image from 'next/image'


// 16:50 
// https://www.youtube.com/watch?v=Z0cn02PTKBQ&ab_channel=iggy

const Logo = () => {
	return <div>
		
		<Image
			src='/images/logo/logo-1.svg'
			width={50}
			height={50}
			alt='logo'
		/>
	</div>
}

export default Logo
