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

export class PrimalKyogreEX_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kyogre-EX";
  public hp: number = 240;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "θ Max", powerType: PowerType.ABILITY, text: "When 1 of your Pokémon becomes this Pokémon, heal all damage from it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tidal Storm", cost: [], damage: "150", text: "Move 2 Energy from this Pokémon to 1 of your Benched Pokémon. This attack does 30 damage to each of your opponent's Benched Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "BKT";
  public name: string = "Primal Kyogre-EX";
  public fullName: string = "Primal Kyogre-EX BKT 96";
  public text: string = "Primal Kyogre-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "heal:999");
    }
    return state;
  }
}
