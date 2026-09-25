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

export class IronJugulis_216 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Homing Headbutt", cost: [], damage: "", text: "This attack does 50 damage to 3 of your opponent's Pokémon that have any damage counters on them. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Baryon Beam", cost: [], damage: "150", text: "If this Pokémon has a Future Booster Energy Capsule attached, this attack can be used for ColorlessColorlessColorless." }
  ];
  public set: string = "PAR";
  public name: string = "Iron Jugulis";
  public fullName: string = "Iron Jugulis PAR 216";
  public text: string = "Iron Jugulis";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
