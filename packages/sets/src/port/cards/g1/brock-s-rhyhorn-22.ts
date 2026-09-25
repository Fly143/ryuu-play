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

export class BrockSRhyhorn_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Horn Toss", cost: [], damage: "20", text: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)" },
      { name: "Take Down", cost: [], damage: "40", text: "Brock's Rhyhorn does 10 damage to itself." }
  ];
  public set: string = "G1";
  public name: string = "Brock's Rhyhorn";
  public fullName: string = "Brock's Rhyhorn G1 22";
  public text: string = "Brock's Rhyhorn";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
