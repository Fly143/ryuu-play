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

export class DuskullSH2 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Counting Song", cost: [], damage: "", text: "Put up to 3 damage counters on Duskull. Then, put that many damage counters on the Defending Pokémon." },
      { name: "Ram", cost: [], damage: "10", text: "" },
      { name: "Night Bind", cost: [], damage: "20", text: "Flip a coin. If heads, your opponent can't attach any Energy cards from his or her hand to the Active Pokémon during his or her next turn." }
  ];
  public set: string = "PL";
  public name: string = "Duskull";
  public fullName: string = "Duskull PL SH2";
  public text: string = "Duskull";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
