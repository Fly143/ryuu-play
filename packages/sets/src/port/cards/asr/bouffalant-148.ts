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

export class Bouffalant_148 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lost Headbutt", cost: [], damage: "50", text: "Put an Energy attached to your opponent's Active Pokémon in the Lost Zone." },
      { name: "Superpowered Horns", cost: [], damage: "120", text: "" }
  ];
  public set: string = "ASR";
  public name: string = "Bouffalant";
  public fullName: string = "Bouffalant ASR 148";
  public text: string = "Bouffalant";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
