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

export class EmpoleonBW56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Prinplup";
  public hp: number = 140;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fury Attack", cost: [], damage: "30×", text: "Flip 3 coins. This attack does 30 damage times the number of heads." },
      { name: "Cold Crush", cost: [], damage: "70", text: "You may discard an Energy attached to this Pokémon. If you do, discard an Energy attached to the Defending Pokémon." }
  ];
  public set: string = "PR-BLW";
  public name: string = "Empoleon";
  public fullName: string = "Empoleon PR-BLW BW56";
  public text: string = "Empoleon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
