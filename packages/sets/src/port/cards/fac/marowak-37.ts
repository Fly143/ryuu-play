import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Marowak_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cubone";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bodyguard", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks done to you or your hand by your opponent's Pokémon. Remove any existing effects.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bonemerang", cost: [], damage: "60×", text: "Flip 2 coins. This attack does 60 damage times the number of heads." }
  ];
  public set: string = "FAC";
  public name: string = "Marowak";
  public fullName: string = "Marowak FAC 37";
  public text: string = "Marowak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 60);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
