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

export class Shaymin_115 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gather Flowers", cost: [], damage: "", text: "Shuffle up to 2 Energy cards from your discard pile into your deck." },
      { name: "Rear Kick", cost: [], damage: "30", text: "" }
  ];
  public set: string = "CRZ";
  public name: string = "Shaymin";
  public fullName: string = "Shaymin CRZ 115";
  public text: string = "Shaymin";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
