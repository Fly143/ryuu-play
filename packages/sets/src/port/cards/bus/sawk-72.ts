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

export class Sawk_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Quick Guard", cost: [], damage: "", text: "Prevent all damage done to this Pokémon by attacks from Basic Pokémon during your opponent's next turn. This Pokémon can't use Quick Guard during your next turn." },
      { name: "Brick Break", cost: [], damage: "40", text: "This attack's damage isn't affected by Resistance or any effects on your opponent's Active Pokémon." }
  ];
  public set: string = "BUS";
  public name: string = "Sawk";
  public fullName: string = "Sawk BUS 72";
  public text: string = "Sawk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
