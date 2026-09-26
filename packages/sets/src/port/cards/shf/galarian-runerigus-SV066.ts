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

export class GalarianRunerigusSV066 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Galarian Yamask";
  public hp: number = 100;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spreading Spite", cost: [], damage: "", text: "For each damage counter on this Galarian Runerigus, put 2 damage counters on your opponent's Pokémon in any way you like." },
      { name: "Mad Hammer", cost: [], damage: "120", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "SHF";
  public name: string = "Galarian Runerigus";
  public fullName: string = "Galarian Runerigus SHF SV066";
  public text: string = "Galarian Runerigus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersEachOpponent(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
