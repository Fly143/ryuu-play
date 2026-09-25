import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Luvdisc_77 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rendezvous", cost: [], damage: "", text: "Reveal the top card of your deck and put it into your hand. If that card is a Pokémon, draw 2 cards." },
      { name: "Synchro Dance", cost: [], damage: "10+", text: "If Luvdisc and the Defending Pokémon have the same amount of Energy attached to them, this attack does 10 damage plus 20 more damage." }
  ];
  public set: string = "GE";
  public name: string = "Luvdisc";
  public fullName: string = "Luvdisc GE 77";
  public text: string = "Luvdisc";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
