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

export class Jumpluff_112 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skiploom";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Buffer", powerType: PowerType.ABILITY, text: "If Jumpluff would be Knocked Out by an opponent's attack, flip a coin. If heads, Jumpluff is not Knocked Out and its remaining HP becomes 10 instead.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Crush", cost: [], damage: "10+", text: "Does 10 damage plus 10 more damage for each Energy attached to all of your opponent's Pokémon." }
  ];
  public set: string = "TRR";
  public name: string = "Jumpluff";
  public fullName: string = "Jumpluff TRR 11";
  public text: string = "Jumpluff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
