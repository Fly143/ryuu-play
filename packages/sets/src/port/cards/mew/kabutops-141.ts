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

export class Kabutops_141 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kabuto";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ancient Way", powerType: PowerType.ABILITY, text: "Apply Weakness for your opponent's Active Pokémon as ×4 instead.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Draining Blade", cost: [], damage: "100", text: "Heal 30 damage from this Pokémon." }
  ];
  public set: string = "MEW";
  public name: string = "Kabutops";
  public fullName: string = "Kabutops MEW 141";
  public text: string = "Kabutops";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
