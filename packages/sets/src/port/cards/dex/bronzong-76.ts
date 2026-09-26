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

export class Bronzong_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bronzor";
  public hp: number = 110;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Heal Block", powerType: PowerType.ABILITY, text: "Damage can't be healed from any Pokémon (both yours and your opponent's). (Damage counters can still be moved.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Oracle Inflict", cost: [], damage: "30+", text: "Does 10 more damage for each card in your opponent's hand." }
  ];
  public set: string = "DEX";
  public name: string = "Bronzong";
  public fullName: string = "Bronzong DEX 76";
  public text: string = "Bronzong";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.plusPower(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
