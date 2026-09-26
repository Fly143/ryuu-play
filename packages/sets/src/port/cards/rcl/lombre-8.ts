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

export class Lombre_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lotad";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Top Entry", powerType: PowerType.ABILITY, text: "Once during your turn, if you drew this Pokémon from your deck at the beginning of your turn and your Bench isn't full, before you put it into your hand, you may put it onto your Bench.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fury Swipes", cost: [], damage: "40×", text: "Flip 3 coins. This attack does 40 damage for each heads." }
  ];
  public set: string = "RCL";
  public name: string = "Lombre";
  public fullName: string = "Lombre RCL 8";
  public text: string = "Lombre";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 40);
    }
    return state;
  }
}
