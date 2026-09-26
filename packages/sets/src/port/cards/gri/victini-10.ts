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

export class Victini_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Victory Star", powerType: PowerType.ABILITY, text: "Once during your turn, after you flip any coins for an attack, you may ignore all results of those coin flips and begin flipping those coins again. You can't use more than 1 Victory Star Ability each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "V-Flame", cost: [], damage: "50", text: "" }
  ];
  public set: string = "GRI";
  public name: string = "Victini";
  public fullName: string = "Victini GRI 10";
  public text: string = "Victini";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
