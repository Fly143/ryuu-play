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

export class Slaking_131 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vigoroth";
  public hp: number = 180;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Act Freely", powerType: PowerType.ABILITY, text: "If a Stadium is in play, this Pokémon can't attack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rout", cost: [], damage: "120+", text: "This attack does 30 more damage for each of your opponent's Benched Pokémon." }
  ];
  public set: string = "CRE";
  public name: string = "Slaking";
  public fullName: string = "Slaking CRE 131";
  public text: string = "Slaking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerOpponentBench(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
