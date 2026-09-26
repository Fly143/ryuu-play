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

export class Aipom_169 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Scampering Tail", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put the top card of your opponent's deck on the bottom of their deck without looking at it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tail Smack", cost: [], damage: "20", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Aipom";
  public fullName: string = "Aipom CEC 169";
  public text: string = "Aipom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
