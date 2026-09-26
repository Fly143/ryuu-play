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

export class Wooper_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Saturation", powerType: PowerType.ABILITY, text: "When you attach a Water Energy card from your hand to Wooper, remove all Special Conditions and 1 damage counter from Wooper.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wave Splash", cost: [], damage: "10", text: "" }
  ];
  public set: string = "TRR";
  public name: string = "Wooper";
  public fullName: string = "Wooper TRR 81";
  public text: string = "Wooper";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
