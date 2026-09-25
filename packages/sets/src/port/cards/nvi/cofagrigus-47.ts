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

export class Cofagrigus_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Yamask";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Durable Body", powerType: PowerType.ABILITY, text: "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out and its remaining HP becomes 10 instead.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ambush", cost: [], damage: "40+", text: "Flip a coin. If heads, this attack does 20 more damage." }
  ];
  public set: string = "NVI";
  public name: string = "Cofagrigus";
  public fullName: string = "Cofagrigus NVI 47";
  public text: string = "Cofagrigus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 1);
    }
    return state;
  }
}
