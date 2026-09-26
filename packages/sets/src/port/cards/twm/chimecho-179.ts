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

export class Chimecho_179 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hyper Voice", cost: [], damage: "20", text: "" },
      { name: "Homeward Chime", cost: [], damage: "", text: "Shuffle 1 of your Benched Pokémon and all attached cards into your deck." }
  ];
  public set: string = "TWM";
  public name: string = "Chimecho";
  public fullName: string = "Chimecho TWM 179";
  public text: string = "Chimecho";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
