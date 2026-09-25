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

export class Kingdra_148 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Seadra";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Crystal Type", powerType: PowerType.ABILITY, text: "Whenever you attach a Water, Lightning, or Psychic basic Energy card from your hand to Kingdra, Kingdra's type (color) becomes the same as that Energy card type until the end of the turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Aquabomb", cost: [], damage: "40", text: "Kingdra does 10 damage to itself. (Don't apply Weakness or Resistance when Kingdra damages itself with this attack.)" },
      { name: "Dual Burn", cost: [], damage: "60", text: "Flip 2 coins. For each tails, discard 1 Energy card attached to Kingdra." }
  ];
  public set: string = "AQ";
  public name: string = "Kingdra";
  public fullName: string = "Kingdra AQ 148";
  public text: string = "Kingdra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
