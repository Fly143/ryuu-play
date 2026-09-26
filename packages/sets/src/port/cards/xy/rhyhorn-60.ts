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

export class Rhyhorn_60 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dig Out", cost: [], damage: "10", text: "Discard the top card of your deck. If that card is a Fighting Energy, attach it to this Pokémon." },
      { name: "Horn Drill", cost: [], damage: "40", text: "" }
  ];
  public set: string = "XY";
  public name: string = "Rhyhorn";
  public fullName: string = "Rhyhorn XY 60";
  public text: string = "Rhyhorn";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
