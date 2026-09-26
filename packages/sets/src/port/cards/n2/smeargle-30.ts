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

export class Smeargle_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sketch", cost: [], damage: "", text: "If the Defending Pokémon attacked last turn, and Smeargle was in play during that attack, Smeargle copies that attack except for its Energy costs and anything else required in order to use that attack." }
  ];
  public set: string = "N2";
  public name: string = "Smeargle";
  public fullName: string = "Smeargle N2 30";
  public text: string = "Smeargle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
