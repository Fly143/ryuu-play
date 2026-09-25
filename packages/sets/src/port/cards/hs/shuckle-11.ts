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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Shuckle_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shell Barricade", powerType: PowerType.ABILITY, text: "As long as Shuckle is on your Bench, prevent all damage done to Shuckle by attacks (both yours and your opponent's).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Jab", cost: [], damage: "30", text: "The Defending Pokémon is now Poisoned." }
  ];
  public set: string = "HS";
  public name: string = "Shuckle";
  public fullName: string = "Shuckle HS 11";
  public text: string = "Shuckle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
