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

export class Yveltal_100 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Life-Locked", powerType: PowerType.ABILITY, text: "Your opponent's Active Pokémon can't be healed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dark Cutter", cost: [], damage: "90", text: "" }
  ];
  public set: string = "30C";
  public name: string = "Yveltal";
  public fullName: string = "Yveltal 30C 100";
  public text: string = "Yveltal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
