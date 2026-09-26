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

export class Charizard_146 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charmeleon";
  public hp: number = 110;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Crystal Type", powerType: PowerType.ABILITY, text: "Whenever you attach a Fire, Lightning, or Fighting basic Energy card from your hand to Charizard, Charizard's type (color) becomes the same as that type of Energy until the end of the turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fireblast", cost: [], damage: "40", text: "Discard an Energy card attached to Charizard." },
      { name: "Dragon Tail", cost: [], damage: "50×", text: "Flip 2 coins. This attack does 50 damage times the number of heads." }
  ];
  public set: string = "SK";
  public name: string = "Charizard";
  public fullName: string = "Charizard SK 146";
  public text: string = "Charizard";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 50);
    }
    return state;
  }
}
