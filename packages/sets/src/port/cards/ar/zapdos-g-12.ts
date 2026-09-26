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

export class ZapdosG_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Charge Beam", cost: [], damage: "10", text: "Flip a coin. If heads, search your discard pile for an Energy card and attach it to Zapdos G." },
      { name: "Lightning Strike", cost: [], damage: "40", text: "You may discard all Lightning attached to Zapdos G. If you do, this attack's base damage is 80 instead of 40." }
  ];
  public set: string = "AR";
  public name: string = "Zapdos G";
  public fullName: string = "Zapdos G AR 12";
  public text: string = "Zapdos G";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
