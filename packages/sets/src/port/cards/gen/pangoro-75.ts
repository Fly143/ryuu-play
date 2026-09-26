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

export class Pangoro_75 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pancham";
  public hp: number = 120;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Parting Shot", cost: [], damage: "10", text: "Switch this Pokémon with 1 of your Benched Pokémon. During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 60 (before applying Weakness and Resistance)." },
      { name: "Buster Swing", cost: [], damage: "90", text: "This attack's damage isn't affected by Resistance." }
  ];
  public set: string = "GEN";
  public name: string = "Pangoro";
  public fullName: string = "Pangoro GEN 75";
  public text: string = "Pangoro";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
