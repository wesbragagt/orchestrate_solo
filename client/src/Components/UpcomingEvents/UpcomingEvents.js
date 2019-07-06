import React, { Component } from "react";
import "./UpcomingEvents.scss";
export class Events extends Component {
    state = {
        events: [
            {
                location: "Eastroom, Nashville, TN",
                date: "12/24/2019"
            },
            {
                location: "Basement, Nashville, TN",
                date: "11/11/2019"
            },
            {
                location: "Mercy Lounge, Nashville, TN",
                date: "07/02/2019"
            }
        ]
    };
    render() {
        const { events } = this.state;
        return (
            <div className="upcoming-events">
                <ul>
                    {events.map(event => (
                        <li>
                            {event.location}, {event.date}
                        </li>
                    ))}
                </ul>
                <button className="upcoming-events-btn">All events...</button>
            </div>
        );
    }
}

export default Events;
