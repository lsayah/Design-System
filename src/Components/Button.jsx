import React from "react";
import "../Styles/Button.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Button = () => {
  return (
    <div>
      <button class="btn AddTicketBtn">
        <i class="fas fa-plus"></i> Add Ticket
      </button>
      <button class="btn SendTicketBtn">
        <i class="fas fa-save"></i> Enregistrer
      </button>
      <button class="btn AddFileBtn">
        <i class="fas fa-plus"></i> Add File
      </button>
    </div>
  );
};

export default Button;
