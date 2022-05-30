import React from 'react';
import Message from './Message';

const messageData = {
	avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
	name: 'Artem',
	message: 'npm start нажимал?',
	time: '22:00',
};

const HW1 = () => {
	return (
		<>
			<div>
				<hr />
				<div style={{ display: "flex", justifyContent: "center" }}>Homework 1</div>
				<Message avatar={messageData.avatar} name={messageData.name} message={messageData.message} time={messageData.time} />
			</div>
		</>
	);
}
export default HW1
