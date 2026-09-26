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

export class Crustle_85 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dwebble";
  public hp: number = 100;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sturdy", powerType: PowerType.ABILITY, text: "If this Pokémon has full HP and would be Knocked Out by damage from an attack, this Pokémon is not Knocked Out and its remaining HP becomes 10 instead.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Stone Edge", cost: [], damage: "70+", text: "Flip a coin. If heads, this attack does 20 more damage." }
  ];
  public set: string = "PLS";
  public name: string = "Crustle";
  public fullName: string = "Crustle PLS 85";
  public text: string = "Crustle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 1);
    }
    return state;
  }
}
