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

export class MrMime_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Focus Wall", powerType: PowerType.ABILITY, text: "If Mr. Mime would be Knocked Out by damage from an attack that does 70 or more damage (after applying Weakness and Resistance), Mr. Mime is not Knocked Out and its remaining HP becomes 10 instead.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Desperate Slap", cost: [], damage: "20+", text: "If Mr. Mime already has 5 or more damage counters on it, this attack does 20 damage plus 40 more damage." }
  ];
  public set: string = "SV";
  public name: string = "Mr. Mime";
  public fullName: string = "Mr. Mime SV 37";
  public text: string = "Mr. Mime";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
