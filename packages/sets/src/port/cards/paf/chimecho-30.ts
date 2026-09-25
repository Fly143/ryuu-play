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

export class Chimecho_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sleep Inducer", cost: [], damage: "", text: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. The new Active Pokémon is now Asleep." },
      { name: "Psyshot", cost: [], damage: "70", text: "" }
  ];
  public set: string = "PAF";
  public name: string = "Chimecho";
  public fullName: string = "Chimecho PAF 30";
  public text: string = "Chimecho";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
