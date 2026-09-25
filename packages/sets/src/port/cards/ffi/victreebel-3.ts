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

export class Victreebel_35 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Weepinbell";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wafting Scent", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard a Grass Energy attached to this Pokémon. If you do, your opponent's Active Pokémon is now Confused and Poisoned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spiral Drain", cost: [], damage: "60", text: "Heal 30 damage from this Pokémon." }
  ];
  public set: string = "FFI";
  public name: string = "Victreebel";
  public fullName: string = "Victreebel FFI 3";
  public text: string = "Victreebel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
