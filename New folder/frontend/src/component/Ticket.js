import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Ticket({Id}) {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/violator?policeId=${Id}`)
      .then((response) => {
        setTickets(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tickets:', error);
      });
  }, [Id]); // Empty dependency array means this effect will run only once, similar to componentDidMount

  return (
    <div className='main'>
      <div className="navbar">
      <nav className=' w-[100vw]  bg-slate-500'>
            <ul className='flex gap-10 justify-center items-center p-3'>
              <Link to={"/home"}>
              <li className='cursor-pointer text-white font-bold hover:text-[#77eedb]'>
                    Home
                </li>
                </Link>
                <Link to={"/ticket"}>
                
                <li className='cursor-pointer text-white font-bold hover:text-[#77eedb]'>
                    Tickets
                </li>
                </Link>
            </ul>
        </nav>
      </div>

      <div className='container flex flex-row gap-10 mt-2'>
        {tickets.map((ticket) => (
          <div key={ticket.id} className='border-2 border-black w-[300px] h-[400px] rounded-[20px] m-2 p-5 '>
            <div className='flex flex-col gap-[2px] '>
              <span className='font-bold'>Name: {ticket.name}</span><br />
              <span className='font-bold'>Type: {ticket.type}</span><br />
              <span className='font-bold'>DrivingLicence: {ticket.drivingLicense}</span><br />
              <span className='font-bold'>VehicleType: {ticket.vehicleType}</span><br />
              <span className='font-bold'>RepeatedOffender: {ticket.repeatedOffender}</span><br />
              <span className='font-bold'>Other: {ticket.other}</span><br />
              <span className='font-bold'>PoliceId: {ticket.policeId}</span><br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticket;
