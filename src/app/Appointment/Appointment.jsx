import React from "react";
import CommonHeader from "../Common/CommonHeader";
import NavBig from "../Common/NavBig";
import SubHeader from "../Common/SubHeader";
import SectionSpace from "../Common/SectionSpace";
import AppointForm from "../Common/AppointForm";
// import { NavLink } from "react-router-dom";

// const activeStyle = { color: "#F15B2A" };
class Appointment extends React.Component {
	render() {
		return (

			<>
            <CommonHeader />
			<NavBig />
			<SubHeader />
			<SectionSpace />
			{/* <AppointForm />  */}
			</>

		)

	}
}

export default Appointment;
