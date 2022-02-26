import { Component, OnInit } from '@angular/core';
// @ts-ignore
import cardData from '../../data/cards.json';
// @ts-ignore
import suitData from '../../data/suits.json';

import {Card} from "../../interfaces/card";
import {Suit} from "../../interfaces/suit";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cards: Card[] = cardData;
  cardStyles: Suit[] = suitData;

  constructor() {
    console.log(this.cards);
    console.log(this.cardStyles);
  }

  ngOnInit(): void {
  }

}
