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

export class LtSurgeSElectabuzz_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Charge", cost: [], damage: "", text: "Take up to 2 Lightning Energy cards from your discard pile and attach them to Lt. Surge's Electabuzz." },
      { name: "Discharge", cost: [], damage: "30×", text: "Discard all Lightning Energy cards attached to Lt. Surge's Electabuzz in order to use this attack. Flip a number of coins equal to the number of Lightning Energy cards you discarded. This attack does 30 damage times the number of heads." }
  ];
  public set: string = "G1";
  public name: string = "Lt. Surge's Electabuzz";
  public fullName: string = "Lt. Surge's Electabuzz G1 6";
  public text: string = "Lt. Surge's Electabuzz";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
