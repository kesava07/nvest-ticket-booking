import React from 'react';

const KeyBoard = (props) => {
    const { ticketNumber, addTicket, enterNumber, deleteTicketNumber, handleBack } = props;
    const [keyDigits] = React.useState([7, 8, 9, 4, 5, 6, 1, 2, 3])
    return (
        <div>
            <div className="card card-body">
                <div className="ticket_number">
                    {ticketNumber.length === 0 && <span className="danger-badge">Enter 6 digits</span>}
                    <div className="text-center">
                        {ticketNumber && ticketNumber.map((num, i) => (
                            <span key={i} className="pin_alignment">{num}</span>
                        ))}
                    </div>
                </div>
                <div className="board-row">
                    {keyDigits.map(digit => (
                        <button key={digit} disabled={ticketNumber.length >= 6} className="square-button" onClick={enterNumber}>
                            {digit}
                        </button>
                    ))}
                </div>
                <div className="board-row">
                    <button className="square-button" onClick={handleBack} disabled={ticketNumber.length === 0}>
                        <i className="fa fa-long-arrow-left"></i>
                    </button>
                    <button className="square-button" onClick={enterNumber} disabled={ticketNumber.length >= 6} >0</button>
                    <button className="square-button" onClick={deleteTicketNumber} disabled={ticketNumber.length === 0}>
                        <i className="fa fa-trash text-danger"></i>
                    </button>
                </div>
                <button className="btn btn-secondary" onClick={addTicket}>
                    <i className="fa fa-plus-square"></i> Add Ticket
              </button>
            </div>
        </div>
    )
}

export default KeyBoard;