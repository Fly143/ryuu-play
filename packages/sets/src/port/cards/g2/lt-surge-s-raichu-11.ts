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

export class LtSurgeSRaichu_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lt. Surge's Pikachu";
  public hp: number = 80;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Kerzap", cost: [], damage: "20+", text: "Flip a coin. If heads, this attack does 20 damage plus 30 more damage to the Defending Pokémon and discard all Lightning Energy cards attached to Lt. Surge's Raichu. If tails, this attack does 20 damage." },
      { name: "Thundertackle", cost: [], damage: "40", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, Lt. Surge's Raichu does 20 damage to itself." }
  ];
  public set: string = "G2";
  public name: string = "Lt. Surge's Raichu";
  public fullName: string = "Lt. Surge's Raichu G2 11";
  public text: string = "Lt. Surge's Raichu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
