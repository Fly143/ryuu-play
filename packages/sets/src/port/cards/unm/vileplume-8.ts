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

export class Vileplume_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gloom";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Varied Pollen", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, choose Asleep, Burned, Confused, or Poisoned. Your opponent's Active Pokémon is now affected by that Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Giant Bloom", cost: [], damage: "90", text: "Heal 30 damage from this Pokémon." }
  ];
  public set: string = "UNM";
  public name: string = "Vileplume";
  public fullName: string = "Vileplume UNM 8";
  public text: string = "Vileplume";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
