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

export class Swalot_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gulpin";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Damage Roller", cost: [], damage: "", text: "Put damage counters on the Defending Pokémon until the Defending Pokémon has the same remaining HP as Swalot. (If the Defending Pokémon has the same or less remaining HP as Swalot, this attack does nothing.)" },
      { name: "Entangle Tackle", cost: [], damage: "50+", text: "You may do 50 damage plus 30 more damage. If you do, this attack does 30 damage to 1 of your Pokémon, and don't apply Weakness and Resistance to this damage." }
  ];
  public set: string = "AR";
  public name: string = "Swalot";
  public fullName: string = "Swalot AR 9";
  public text: string = "Swalot";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* structural */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -30, 1);
    }
    return state;
  }
}
