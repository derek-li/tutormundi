import React, { PureComponent } from 'react';
import './RequestCompliment.css';
import {
  Star,
  Rating,
} from '../../assets';

export default class RequestCompliment extends PureComponent {
  renderStars() {
    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      stars.push(
        <img
          className="star"
          alt="star"
          src={Star}
          key={i}
        />
      )
    }

    return stars;
  }
  
  renderComplimentButton() {
    const {
      compliment,
      handleCompliment,
    } = this.props;

    if (!compliment) {
      return (
        <button
          className="compliment-button"
          onClick={() => handleCompliment()}
        >
          ELOGIAR
        </button>
      );
    }

    return;
  }

  render() {
    return (
      <div className="request-compliment">
        <img
          className="rating"
          alt="rating"
          src={Rating}
        />
        <div className="title">Como foi a ajuda do tutor?</div>
        <div className="stars">
          {this.renderStars()}
        </div>
        {this.renderComplimentButton()}
      </div>
    )
  }
}