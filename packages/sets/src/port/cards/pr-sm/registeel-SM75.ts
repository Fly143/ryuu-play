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

export class RegisteelSM75 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Turbo Arm", cost: [], damage: "30", text: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon." },
      { name: "Iron Fist", cost: [], damage: "90", text: "If Regice is on your Bench, heal 30 damage from this Pokémon." }
  ];
  public set: string = "PR-SM";
  public name: string = "Registeel";
  public fullName: string = "Registeel PR-SM SM75";
  public text: string = "Registeel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
