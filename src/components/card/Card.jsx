import React, { PureComponent } from 'react';
import './Card.css';

export default class Card extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };

    this.toggleCompliment = this.toggleCompliment.bind(this);
  }

  toggleCompliment() {
    const { selected } = this.state;
    this.setState({ selected: !selected });
  }

  render () {
    const { card } = this.props;
    const { selected } = this.state;

    let textClass = 'text-content';
    let cardClass = 'card';
    let icon = card.icon;
    if (selected) {
      cardClass = 'card-selected';
      textClass = 'text-content-selected';
      icon = card.iconSelected;
    }

    return (
      <div
        onClick={() => this.toggleCompliment()}
        className={cardClass}
        key={card.key}
      >
        <img
          className="icon"
          src={icon}
          alt={card.altText}
        />
        <div className={textClass}>{card.textContent}</div>
      </div>
    );
  }
}