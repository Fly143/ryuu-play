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

export class RaikouSL9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Extreme Speed", powerType: PowerType.ABILITY, text: "Raikou's Retreat Cost is Colorless less for each Lightning Energy attached to Raikou.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Raging Thunder", cost: [], damage: "70", text: "Does 20 damage to 1 of your Pokémon and don't apply Weakness and Resistance to this damage." }
  ];
  public set: string = "CL";
  public name: string = "Raikou";
  public fullName: string = "Raikou CL SL9";
  public text: string = "Raikou";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
