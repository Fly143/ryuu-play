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

export class Umbreon_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Moonlight Fang", cost: [], damage: "30", text: "During your opponent's next turn, prevent all effects, including damage, done to Umbreon by attacks from your opponent's Pokémon than has any Poké-Powers or Poké-Bodies." },
      { name: "Quick Blow", cost: [], damage: "30+", text: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage." }
  ];
  public set: string = "CL";
  public name: string = "Umbreon";
  public fullName: string = "Umbreon CL 22";
  public text: string = "Umbreon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
