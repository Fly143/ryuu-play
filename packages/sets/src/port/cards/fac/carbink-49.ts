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

export class Carbink_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Keeper", powerType: PowerType.ABILITY, text: "Basic Energy attached to your Basic Pokémon can't be discarded by effects of your opponent's attacks, Abilities, or Trainer cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Stone Edge", cost: [], damage: "60+", text: "Flip a coin. If heads, this attack does 30 more damage." }
  ];
  public set: string = "FAC";
  public name: string = "Carbink";
  public fullName: string = "Carbink FAC 49";
  public text: string = "Carbink";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 1);
    }
    return state;
  }
}
