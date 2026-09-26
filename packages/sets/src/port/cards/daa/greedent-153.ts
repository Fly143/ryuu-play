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

export class Greedent_153 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skwovet";
  public hp: number = 120;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scrape Off", cost: [], damage: "20", text: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon." },
      { name: "Smack and Run", cost: [], damage: "100", text: "Put this Pokémon and all attached cards into your hand." }
  ];
  public set: string = "DAA";
  public name: string = "Greedent";
  public fullName: string = "Greedent DAA 153";
  public text: string = "Greedent";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
