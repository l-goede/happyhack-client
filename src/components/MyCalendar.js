import * as React from "react";
import FullCalendar from  '@fullcalendar/react'
import dayGridPlugin from  '@fullcalendar/daygrid'
import interactionPlugin from  "@fullcalendar/interaction"; // needed for dayClick
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'; // needs additional webpack config!
import { Calendar } from '@fullcalendar/core';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import "../index.css";

function MyCalendar() {


	const handleDateClick = (arg) => { // bind with an arrow function
		alert(arg.dateStr)
	}

	return (
          <div className="centered" >
		     <div style={{width: '600px', height: '600px'}} >
               <div id="app"> 
				<FullCalendar
					plugins={[ dayGridPlugin, interactionPlugin, bootstrapPlugin]}
					dateClick={handleDateClick}
                         themeSystem={'bootstrap'}
                         events={[
    { title: 'Fern Bday', date: '2021-12-26' },
    { title: 'Presentation!', date: '2021-12-17'},
    { title: 'Christmas Break', 
      start: '2021-12-22', 
      end: '2021-12-26'},
     { title: 'NYE party at Taka`s house @ malaga', start: '2021-12-29', // a property!
      end: '2022-01-03'}
  ]}
                    />
			</div>
               </div>
               </div>
		)
}

export default MyCalendar 