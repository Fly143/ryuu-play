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

export class BlastoiseEX_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rapid Spin", cost: [], damage: "30", text: "Switch this Pokémon with 1 of your Benched Pokémon. Then, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon." },
      { name: "Splash Bomb", cost: [], damage: "120", text: "Flip a coin. If tails, this Pokémon does 30 damage to itself." }
  ];
  public set: string = "XY";
  public name: string = "Blastoise-EX";
  public fullName: string = "Blastoise-EX XY 29";
  public text: string = "Blastoise-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTailsSelfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
