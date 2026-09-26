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

export class MalamarTG06 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Inkay";
  public hp: number = 120;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rapid Strike Tentacles", cost: [], damage: "40×", text: "Reveal any number of Rapid Strike cards from your hand. This attack does 40 damage for each card you revealed in this way. Then, shuffle those cards into your deck." }
  ];
  public set: string = "SIT";
  public name: string = "Malamar";
  public fullName: string = "Malamar SIT TG06";
  public text: string = "Malamar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
