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

export class MAlakazamEX_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alakazam-EX";
  public hp: number = 210;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Zen Force", cost: [], damage: "10+", text: "This attack does 30 more damage for each damage counter on your opponent's Active Pokémon." }
  ];
  public set: string = "FAC";
  public name: string = "M Alakazam-EX";
  public fullName: string = "M Alakazam-EX FAC 26";
  public text: string = "M Alakazam-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerDefendingDamageCounter(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
