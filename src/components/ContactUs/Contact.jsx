import React from 'react'
import './contact.scss'
const Contact = () => {
  return (
    <div>
       <div className='text-black m-5 text-center overflow-hidden'>
    <h1 className='text-4xl font-bold mt-12 text-center overflow-hidden'>CONTACT US</h1>
		<div className="contact-us ">
     
			<div className="contact-card">
				<div className="profile-icon">
					<img src="./public/images/r.jpeg" alt="" />
				</div>
				<div className="position">
					<h1>Mr Nusair Samsudeen</h1>
					<p> Competition Manager</p>
				</div>
				<div className="social-media">
					<div>
					<p> Phone No : </p>
						<span>+94 717878508</span>
					</div>
					
				</div>
				<div className="email">
				<p> Email : </p>
					<span>nusam69@yahoo.com</span>
				</div>
				<div className="back"></div>
			</div>
			<div className="contact-card">
				<div className="profile-icon ">
					<img  src="./public/images/prw.jpeg" alt="" />
				</div>
				<div className="position">
					<h1>Mr. Prabath Priyantha</h1>
					<p> Referee</p>
				</div>
				<div className="social-media">
					<div>
					<p> Phone No : </p>
						<span>+94 719898258</span>
					</div>
					
				</div>
				<div className="email">
				<p> Email : </p>
					<span>pp.rathnakumara@gmail.com</span>
				</div>
				<div className="back"></div>
			</div>
			<div className="contact-card">
				<div className="profile-icon">
				<img src="./public/images/we.jpeg" alt="" />
				</div>
				<div className="position">
					<h1>Mr. Pradeep Nishantha</h1>
					<p>Assistant Referee</p>
				</div>
				<div className="social-media">
					<div>
					<p> Phone No : </p>
						<span>+94 752830498</span>
					</div>
					
				</div>
				
				<div className="back"></div>
			</div>
			
		</div>
		</div>
    </div>
  )
}

export default Contact