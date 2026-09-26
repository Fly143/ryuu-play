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

export class Yveltal_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 5.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cry of Destruction", cost: [], damage: "", text: "Discard up to 3 Special Energy from your opponent's Pokémon." },
      { name: "Dark Feather", cost: [], damage: "100", text: "" }
  ];
  public set: string = "CEL";
  public name: string = "Yveltal";
  public fullName: string = "Yveltal CEL 19";
  public text: string = "Yveltal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
