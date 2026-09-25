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

export class Sudowoodo_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Trials and Trip-ulations", cost: [], damage: "", text: "Search your deck for up to 2 Transformation Tome cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Rock Hurl", cost: [], damage: "30", text: "This attack's damage isn't affected by Resistance." }
  ];
  public set: string = "CRI";
  public name: string = "Sudowoodo";
  public fullName: string = "Sudowoodo CRI 43";
  public text: string = "Sudowoodo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:2");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
