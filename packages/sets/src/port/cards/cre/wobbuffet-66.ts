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

export class Wobbuffet_66 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mirror Pain", cost: [], damage: "", text: "Put damage counters on your opponent's Active Pokémon equal to the number of damage counters on 1 of your Benched Pokémon." },
      { name: "Headbutt Bounce", cost: [], damage: "70", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Wobbuffet";
  public fullName: string = "Wobbuffet CRE 66";
  public text: string = "Wobbuffet";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
