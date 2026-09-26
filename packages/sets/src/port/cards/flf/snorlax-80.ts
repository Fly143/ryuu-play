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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Snorlax_80 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stir and Snooze", powerType: PowerType.ABILITY, text: "If this Pokémon is Asleep, flip 2 coins instead of 1 between turns. If either of them is tails, this Pokémon is still Asleep.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sleepy Press", cost: [], damage: "120", text: "Heal 20 damage from this Pokémon. This Pokémon is now Asleep." }
  ];
  public set: string = "FLF";
  public name: string = "Snorlax";
  public fullName: string = "Snorlax FLF 80";
  public text: string = "Snorlax";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
