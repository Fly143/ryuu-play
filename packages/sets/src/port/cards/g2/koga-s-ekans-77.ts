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

export class KogaSEkans_77 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fast-Acting Poison", cost: [], damage: "10", text: "Flip 2 coins. If both are heads, the Defending Pokémon is now Confused and Poisoned." }
  ];
  public set: string = "G2";
  public name: string = "Koga's Ekans";
  public fullName: string = "Koga's Ekans G2 77";
  public text: string = "Koga's Ekans";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
