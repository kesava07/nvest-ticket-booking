import React from 'react';

const Tickets = (props) => {
    const { tickets, handleDeleteTicket } = props;
    return (
        <div className="row">
            <div className="col-lg-12">
                {
                    tickets.length ? (
                        <h5 className="text-white">Your Selected Tickets:</h5>
                    )
                        :
                        <p className="text-center text-white mt-4">No tickets created yet..!</p>
                }
            </div>

            {
                tickets && tickets.map((ticket, index) => (
                    <div key={ticket.date} className="col-lg-3 col-md-6 col-12 px-2">
                        <div className="card card-body py-2 mb-2">
                            <i className="fa fa-trash ticket-delete-icon" onClick={() => handleDeleteTicket(index)}></i>
                            <div>
                                <span className="ticket-badge">Ticket #{index + 1}</span>
                                <div className="mt-2">
                                    {ticket.ticketNumber.split('').map((number, index) => (
                                        <span key={index} className="ticket_num_badge">{number}</span>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Tickets;