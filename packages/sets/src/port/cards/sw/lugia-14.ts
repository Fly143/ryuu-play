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

export class Lugia_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 5.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Silver Wing", cost: [], damage: "20", text: "Flip a coin. If heads, choose an Energy card attached to the Defending Pokémon and return it to your opponent's hand." },
      { name: "Psychic Destruction", cost: [], damage: "120", text: "If the Defending Pokémon has any Energy cards attached to it, this attack's base damage is 40 instead of 120." }
  ];
  public set: string = "SW";
  public name: string = "Lugia";
  public fullName: string = "Lugia SW 14";
  public text: string = "Lugia";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
