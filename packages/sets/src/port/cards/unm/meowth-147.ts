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

export class Meowth_147 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Caturday", cost: [], damage: "", text: "Draw 2 cards. If you do, this Pokémon is now Asleep." },
      { name: "Tail Whap", cost: [], damage: "30", text: "" }
  ];
  public set: string = "UNM";
  public name: string = "Meowth";
  public fullName: string = "Meowth UNM 147";
  public text: string = "Meowth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
