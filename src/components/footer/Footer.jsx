import React, { PureComponent } from 'react';
import './Footer.css';

export default class Footer extends PureComponent {

  render() {
    return (
      <div className="footer">
        <button className="skip-button">
          PULAR
        </button>
        <button className="confirm-button">
          CONFIRMAR
        </button>
      </div>
    )
  }
}