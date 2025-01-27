import React from 'react';
import '../Styles/TicketList.css';

const TicketList = () => {
  
  const tickets = [
    { id: 1, title: 'Problème de connexion', service: 'IT', assignee: 'Joseph Staline', status: 'En attente', importance: 'high' },
    { id: 2, title: 'Erreur de paiement', service: 'Finance', assignee: 'P Dydy', status: 'En cours', importance: 'medium' },
    { id: 3, title: 'Bogue de l\'interface', service: 'Développement', assignee: 'Adolf Thiers', status: 'Résolu', importance: 'low' },
    { id: 4, title: 'Problème de connexion', service: 'Développement', assignee: 'Jean-Claude Van damme', status: 'Résolu', importance: 'low' },
    { id: 5, title: 'Bogue de l\'interface', service: 'Développement', assignee: 'Nikita Bellucci', status: 'Résolu', importance: 'medium' },
  ];

  const handleDetailsClick = (ticketId) => {
    
    console.log('Afficher les détails pour le ticket:', ticketId);
  };

  return (
    <div>
      <h2>Ticket List</h2>
      <table className="ticket-list">
        <thead>
          <tr>
            <th></th>
            <th>Request Number</th>
            <th>Title</th>
            <th>Service</th>
            <th>Assigned</th>
            <th>Statut</th>
            <th className='More'>Details</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td className={`importance ${ticket.importance}`}></td>
              <td>{ticket.id}</td>
              <td>{ticket.title}</td>
              <td>{ticket.service}</td>
              <td>{ticket.assignee}</td>
              <td>{ticket.status}</td>
              <td className='More'>
                <span className="details-link" onClick={() => handleDetailsClick(ticket.id)}>More</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;