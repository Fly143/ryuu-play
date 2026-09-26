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

export class WalkingWakeEx_215 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Azure Seas", powerType: PowerType.ABILITY, text: "Damage from attacks used by this Pokémon isn't affected by any effects on your opponent's Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Catharsis Roar", cost: [], damage: "120+", text: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 120 more damage." }
  ];
  public set: string = "TEF";
  public name: string = "Walking Wake ex";
  public fullName: string = "Walking Wake ex TEF 215";
  public text: string = "Walking Wake ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
