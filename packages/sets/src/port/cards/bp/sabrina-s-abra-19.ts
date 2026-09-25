import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class SabrinaSAbra_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pound", cost: [], damage: "10", text: "" },
      { name: "Synchronize", cost: [], damage: "40", text: "This attack can't be used unless Sabrina's Abra and the Defending Pokémon have the same number of Energy cards attached to them." }
  ];
  public set: string = "BP";
  public name: string = "Sabrina's Abra";
  public fullName: string = "Sabrina's Abra BP 19";
  public text: string = "Sabrina's Abra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* attackGate */ state;
    }
    return state;
  }
}
