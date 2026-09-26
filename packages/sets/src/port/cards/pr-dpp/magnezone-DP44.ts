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

export class MagnezoneDP44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magneton";
  public hp: number = 130;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Charge Beam", cost: [], damage: "30", text: "Search your discard pile for an Energy card and attach it to Magnezone." },
      { name: "Metallic Bolt", cost: [], damage: "60", text: "You may discard a Lightning Energy and a Metal Energy attached to Magnezone. If you do, this attack's base damage is 120 instead of 60." }
  ];
  public set: string = "PR-DPP";
  public name: string = "Magnezone";
  public fullName: string = "Magnezone PR-DPP DP44";
  public text: string = "Magnezone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
