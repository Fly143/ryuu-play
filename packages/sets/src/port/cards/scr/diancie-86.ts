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

export class Diancie_86 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Diffuse Reflection", cost: [], damage: "40×", text: "This attack does 40 damage for each Special Energy attached to all of your opponent's Pokémon." },
      { name: "Power Gem", cost: [], damage: "60", text: "" }
  ];
  public set: string = "SCR";
  public name: string = "Diancie";
  public fullName: string = "Diancie SCR 86";
  public text: string = "Diancie";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
