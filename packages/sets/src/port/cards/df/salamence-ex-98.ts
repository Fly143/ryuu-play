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
import { commonEffects } from '../../../common';

export class SalamenceEx_98 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shelgon";
  public hp: number = 160;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Type Shift", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may use this power. Salamence ex's type is Fire until the end of your turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Claw Swipe", cost: [], damage: "60", text: "" },
      { name: "Dual Stream", cost: [], damage: "80", text: "You may do up to 40 damage instead of 80 to the Defending Pokémon. If you do, this attack does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "DF";
  public name: string = "Salamence ex δ";
  public fullName: string = "Salamence ex δ DF 98";
  public text: string = "Salamence ex δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
