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
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MRayquazaEX_98 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rayquaza-EX";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "θ Max", powerType: PowerType.ABILITY, text: "When 1 of your Pokémon becomes this Pokémon, heal all damage from it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Emerald Break", cost: [], damage: "30×", text: "This attack does 30 damage times the number of your Benched Pokémon." }
  ];
  public set: string = "BKT";
  public name: string = "M Rayquaza-EX";
  public fullName: string = "M Rayquaza-EX BKT 98";
  public text: string = "M Rayquaza-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerOwnBench(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "heal:999");
    }
    return state;
  }
}
