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

export class Ferrothorn_131 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ferroseed";
  public hp: number = 130;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Triple Smash", cost: [], damage: "30×", text: "Flip 3 coins. This attack does 30 damage for each heads." },
      { name: "Energy Slap", cost: [], damage: "100", text: "You may move all Energy from this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "SSH";
  public name: string = "Ferrothorn";
  public fullName: string = "Ferrothorn SSH 131";
  public text: string = "Ferrothorn";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 30);
    }
    return state;
  }
}
