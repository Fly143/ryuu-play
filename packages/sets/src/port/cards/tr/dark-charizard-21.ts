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

export class DarkCharizard_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dark Charmeleon";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Nail Flick", cost: [], damage: "10", text: "" },
      { name: "Continuous Fireball", cost: [], damage: "50×", text: "Flip a number of coins equal to the number of Fire Energy cards attached to Dark Charizard. This attack does 50 damage times the number of heads. Discard a number of Fire Energy cards attached to Dark Charizard equal to the number of heads." }
  ];
  public set: string = "TR";
  public name: string = "Dark Charizard";
  public fullName: string = "Dark Charizard TR 21";
  public text: string = "Dark Charizard";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 8, 50);
    }
    return state;
  }
}
