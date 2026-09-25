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

export class Simipour_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Panpour";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Monkey Trio", powerType: PowerType.ABILITY, text: "If you have Simisage, Simisear, and Simipour in play, ignore all Colorless Energy in the costs of attacks used by this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Liquid Lashing", cost: [], damage: "50", text: "This attack also does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "PAR";
  public name: string = "Simipour";
  public fullName: string = "Simipour PAR 42";
  public text: string = "Simipour";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
