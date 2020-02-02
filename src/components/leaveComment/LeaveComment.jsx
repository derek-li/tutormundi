import React, { PureComponent } from 'react';
import './LeaveCompliment.css';

export default class LeaveComment extends PureComponent {

  render() {
    return (
      <div className="leave-comment">
        <div className="header">Deixe um recado</div>
        <textarea
          className="text-input"
          placeholder="Faça elogios, agradecimentos e sugestões. Os tutores adoram!"
        />
      </div>
    )
  }
}