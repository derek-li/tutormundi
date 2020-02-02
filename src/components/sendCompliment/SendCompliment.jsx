import React, { PureComponent } from 'react';
import './SendCompliment.css';
import {
  MagnifyingGlass,
  MagnifyingGlassSelected,
  Lightbulb,
  LightbulbSelected,
  SwissArmy,
  SwissArmySelected,
  File,
  FileSelected,
  Smiley,
  SmileySelected,
} from '../../assets';

export default class SendCompliment extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          key: 1,
          icon: Lightbulb,
          iconSelected: LightbulbSelected,
          altText: 'lightbulb',
          textContent: 'Estimula a criatividade',
          selected: false,
        },
        {
          key: 2,
          icon: MagnifyingGlass,
          iconSelected: MagnifyingGlassSelected,
          altText: 'magnifying-glass',
          textContent: 'Estimula a curiosidade',
          selected: false,
        },
        {
          key: 3,
          icon: SwissArmy,
          iconSelected: SwissArmySelected,
          altText: 'swiss-army',
          textContent: 'Se adapta à necessidade',
          selected: false,
        },
        {
          key: 4,
          icon: File,
          iconSelected: FileSelected,
          altText: 'file',
          textContent: 'Ótima didáctica',
          selected: false,
        },
        {
          key: 5,
          icon: Smiley,
          iconSelected: SmileySelected,
          altText: 'smiley',
          textContent: 'Gente boasíssima',
          selected: false,
        },
      ],
    };

    this.toggleCompliment = this.toggleCompliment.bind(this);
  }

  toggleCompliment(card) {
    const { cards } = this.state;
    const updatedCards = cards.slice(0);
    
    for (let i = 0; i < cards.length; i += 1) {
      if (cards[i] === card) {
        cards[i].selected = !cards[i].selected;
      }
    }

    this.setState({ cards: updatedCards });
  }

  renderComplimentCards() {
    const { cards } = this.state;

    return cards.map((card) => {
      let textClass = 'text-content';
      let cardClass = 'card';
      let icon = card.icon;
      if (card.selected) {
        cardClass = 'card-selected';
        textClass = 'text-content-selected';
        icon = card.iconSelected;
      }

      return (
        <div
          onClick={() => this.toggleCompliment(card)}
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
    });
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