import React, { PureComponent } from 'react';
import './SendCompliment.css';
import {
  cards,
} from '../../constants';
import { Card } from '..';

export default class SendCompliment extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    this.setState({ cards: cards });
  }

  renderComplimentCards() {
    const { cards } = this.state;

    return cards.map((card) => (
      <Card
        key={card.key}
        card={card}
        toggleCompliment={this.toggleCompliment}
      />
    ));
  }

  render() {
    return (
      <div className="send-compliment">
        <div className="header">Envie um elogío</div>
        <div className="cards">
          {this.renderComplimentCards()}
        </div>
      </div>
    )
  }
}