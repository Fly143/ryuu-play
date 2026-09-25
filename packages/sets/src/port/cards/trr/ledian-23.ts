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

export class Ledian_23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ledyba";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Powder Protection", powerType: PowerType.ABILITY, text: "Any damage done to Ledian by attacks from Pokémon that has an owner in its name is reduced by 40.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Split Spiral Punch", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon is now Confused." },
      { name: "Tackle", cost: [], damage: "50", text: "" }
  ];
  public set: string = "TRR";
  public name: string = "Ledian";
  public fullName: string = "Ledian TRR 23";
  public text: string = "Ledian";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 40);
    }
    return state;
  }
}
