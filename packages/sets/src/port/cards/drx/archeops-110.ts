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

export class Archeops_110 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Archen";
  public hp: number = 130;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ancient Power", powerType: PowerType.ABILITY, text: "Each play can't play any Pokémon from his or her hand to evolve his or her Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rock Slide", cost: [], damage: "60", text: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "DRX";
  public name: string = "Archeops";
  public fullName: string = "Archeops DRX 110";
  public text: string = "Archeops";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTwoOpponentBench(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
