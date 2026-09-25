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

export class ArceusLVXDP56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Arceus";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Multitype", powerType: PowerType.ABILITY, text: "Arceus LV.X's type is the same as its previous Level.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Meteor Blast", cost: [], damage: "100", text: "Flip a coin. If tails, this attack's base damage is 50 instead of 100." }
  ];
  public set: string = "PR-DPP";
  public name: string = "Arceus LV.X";
  public fullName: string = "Arceus LV.X PR-DPP DP56";
  public text: string = "Arceus LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* flipTailsBaseDamage:50 */ state;
    }
    return state;
  }
}
