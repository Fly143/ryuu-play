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

export class Dondozo_61 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
    public height?: number = 4.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Release Rage", cost: [], damage: "50×", text: "This attack does 50 damage for each Tatsugiri in your discard pile." },
      { name: "Heavy Splash", cost: [], damage: "120", text: "" }
  ];
  public set: string = "SVI";
  public name: string = "Dondozo";
  public fullName: string = "Dondozo SVI 61";
  public text: string = "Dondozo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
