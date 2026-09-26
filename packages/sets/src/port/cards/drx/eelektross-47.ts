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

export class Eelektross_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eelektrik";
  public hp: number = 140;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Suction Heal", cost: [], damage: "40", text: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon." },
      { name: "Slurp Shakedown", cost: [], damage: "", text: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. This attack does 60 damage to the new Defending Pokémon." }
  ];
  public set: string = "DRX";
  public name: string = "Eelektross";
  public fullName: string = "Eelektross DRX 47";
  public text: string = "Eelektross";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAfterAttack(this, store, state, effect).use(effect, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
