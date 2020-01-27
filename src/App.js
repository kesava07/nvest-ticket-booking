import React from 'react';
import './App.css';
import KeyBoard from './Components/KeyBoard';
import AutoGenWheel from './Components/AutoGenWheel';
import Tickets from './Components/Tickets';

function App() {
  const [ticketNumber, setTicketNumber] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [tickets, setTickets] = React.useState([]);
  const [error, setError] = React.useState("");

  // Entering the 6 digit ticket number
  const enterNumber = (e) => {
    const copyNumbers = [...ticketNumber];
    copyNumbers.push(e.target.innerHTML);
    setTicketNumber(copyNumbers);
  }

  // Removing the ticket number
  const deleteTicketNumber = () => {
    setTicketNumber([]);
  };

  // Handling back space button
  const handleBack = () => {
    const copyTicketNum = [...ticketNumber];
    if (ticketNumber.length >= 0) {
      copyTicketNum.pop();
    }
    setTicketNumber(copyTicketNum);
  };

  // Auto pin generation
  const handleAutoGenNumber = () => {
    setLoading(true);
    setTimeout(() => {
      const randomTicketNum = Math.floor(100000 + Math.random() * 900000);
      setTicketNumber(randomTicketNum.toString().split(''))
      setLoading(false);
    }, 1000);
  }

  // Adding the ticket
  const addTicket = () => {
    setError('');
    if (ticketNumber.length !== 6) {
      sendError("Please enter 6 digits ticket number");
      return
    } else if (ticketNumber.length > 6) {
      sendError("Ticket number should be 6 digits only");
    } else if (tickets.length >= 5) {
      sendError("A person can book only 5 tickets");
    } else if (chekForDuplicate(tickets)) {
      // Checking for duplicate tickets
      sendError("The ticket number is already exists");
      return;
    } else {
      const generateTicket = {
        id: tickets.length + 1,
        ticketNumber: ticketNumber.join(''),
        date: Date.now()
      }
      const copyTickets = [...tickets];
      copyTickets.push(generateTicket)
      setTickets(copyTickets);
      setTicketNumber([]);
    }
  }
  const chekForDuplicate = tickets => {
    if (tickets.length) {
      const duplicateTicket = tickets.filter(ticket => ticket.ticketNumber === ticketNumber.join(''));
      if (duplicateTicket.length) {
        return true
      } else return false;
    } else {
      return false
    }
  }

  // Deleting the ticket
  const handleDeleteTicket = index => {
    const copyTickets = [...tickets];
    copyTickets.splice(index, 1);
    setTickets(copyTickets);
  };

  // Dismissing the errors
  const dismissError = () => setError('');

  const sendError = (error) => {
    setError(error);
    setTimeout(() => {
      setError("");
    }, 2000)
  }

  return (
    <div className="container-fluid App_container">
      {error && (
        <div className="alert alert-danger alert-position">
          <strong>Error!</strong> {error}
          <button type="button" className="close" onClick={dismissError}>&times;</button>
        </div>
      )}
      <h3 className="text-center text-white pt-4">Create A Ticket</h3>
      <div className="container inner_container">
        <div className="row">
          <div className="col-lg-6 p-3">
            {/* key board component */}
            <KeyBoard
              ticketNumber={ticketNumber}
              addTicket={addTicket}
              enterNumber={enterNumber}
              deleteTicketNumber={deleteTicketNumber}
              handleBack={handleBack}
            />
          </div>
          <div className="col-lg-6 p-3">
            {/* Auto ticket number generation component */}
            <AutoGenWheel
              handleAutoGenNumber={handleAutoGenNumber}
              loading={loading}
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        {/* Displaying ticket numbers */}
        <Tickets
          tickets={tickets}
          handleDeleteTicket={handleDeleteTicket}
        />
      </div>
    </div>
  );
}

export default App;
