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

export class Xatu_522 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Natu";
  public hp: number = 70;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Cycle", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 Energy card attached to the Defending Pokémon and 1 of your opponent's Benched Pokémon. Attach that Energy card to that Pokémon." },
      { name: "Super Psy", cost: [], damage: "50", text: "" }
  ];
  public set: string = "N2";
  public name: string = "Xatu";
  public fullName: string = "Xatu N2 52";
  public text: string = "Xatu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
