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

export class IronMoth_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Suction", cost: [], damage: "30", text: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon." },
      { name: "Anachronism Repulsor", cost: [], damage: "120", text: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Ancient Pokémon." }
  ];
  public set: string = "SFA";
  public name: string = "Iron Moth";
  public fullName: string = "Iron Moth SFA 9";
  public text: string = "Iron Moth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAfterAttack(this, store, state, effect).use(effect, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
