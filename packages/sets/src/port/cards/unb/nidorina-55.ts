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

export class Nidorina_552 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nidoran ♀";
  public hp: number = 90;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Family Rescue", cost: [], damage: "", text: "Shuffle 5 Psychic Pokémon from your discard pile into your deck." },
      { name: "Bite", cost: [], damage: "30", text: "" }
  ];
  public set: string = "UNB";
  public name: string = "Nidorina";
  public fullName: string = "Nidorina UNB 55";
  public text: string = "Nidorina";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
