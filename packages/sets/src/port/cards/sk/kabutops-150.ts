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

export class Kabutops_150 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kabuto";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Crystal Type", powerType: PowerType.ABILITY, text: "Whenever you attach a Water, Lightning, or Fighting basic Energy card from your hand to Kabutops, Kabutops's type (color) becomes the same as that type of Energy until the end of the turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Draining Cut", cost: [], damage: "20", text: "Remove a damage counter from Kabutops." },
      { name: "Triple Cutter", cost: [], damage: "30×", text: "Flip 3 coins. This attack does 30 damage times the number of heads." }
  ];
  public set: string = "SK";
  public name: string = "Kabutops";
  public fullName: string = "Kabutops SK 150";
  public text: string = "Kabutops";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 30);
    }
    return state;
  }
}
