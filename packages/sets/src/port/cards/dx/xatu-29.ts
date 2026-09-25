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

export class Xatu_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Natu";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mirror Coat", powerType: PowerType.ABILITY, text: "If Xatu is Burned or Poisoned by an opponent's attack (even if Xatu is Knocked Out), the Attacking Pokémon is now affected by the same Special Conditions (1 if there is only 1).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dazzle Dance", cost: [], damage: "", text: "Each Defending Pokémon is now Confused." },
      { name: "Psyloop", cost: [], damage: "30+", text: "Does 30 damage plus 30 more damage for each Trainer card your opponent has in play." }
  ];
  public set: string = "DX";
  public name: string = "Xatu";
  public fullName: string = "Xatu DX 29";
  public text: string = "Xatu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    return state;
  }
}
