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

export class Masquerain_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Surskit";
  public hp: number = 90;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Threatening Pattern", cost: [], damage: "30", text: "During your opponent's next turn, Energy can't be attached from your opponent's hand to the Defending Pokémon." },
      { name: "U-turn", cost: [], damage: "40", text: "Switch this Pokémon with 1 of your Benched Pokémon." }
  ];
  public set: string = "RCL";
  public name: string = "Masquerain";
  public fullName: string = "Masquerain RCL 11";
  public text: string = "Masquerain";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
