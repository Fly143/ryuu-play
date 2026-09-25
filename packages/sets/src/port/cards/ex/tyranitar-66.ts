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

export class Tyranitar_66 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pupitar";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Aura", powerType: PowerType.ABILITY, text: "All Energy attached to Tyranitar is Darkness Energy instead of its usual type.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Stamp", cost: [], damage: "50+", text: "Flip a coin. If heads, this attack does 50 damage plus 10 more damage and does 10 damage to each of your opponent's Benched Pokémon, if any. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "EX";
  public name: string = "Tyranitar";
  public fullName: string = "Tyranitar EX 66";
  public text: string = "Tyranitar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
