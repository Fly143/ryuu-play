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

export class Zubat_832 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Self-control", powerType: PowerType.ABILITY, text: "Zubat can't be Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bite", cost: [], damage: "10", text: "" }
  ];
  public set: string = "DX";
  public name: string = "Zubat";
  public fullName: string = "Zubat DX 83";
  public text: string = "Zubat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
