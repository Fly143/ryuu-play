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

export class BlaineSArcanine_1 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Blaine's Growlithe";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Heat Tackle", cost: [], damage: "40", text: "Blaine's Arcanine does 10 damage to itself." },
      { name: "Firestorm", cost: [], damage: "120", text: "Discard 3 Fire Energy cards attached to Blaine's Arcanine in order to use this attack." }
  ];
  public set: string = "G2";
  public name: string = "Blaine's Arcanine";
  public fullName: string = "Blaine's Arcanine G2 1";
  public text: string = "Blaine's Arcanine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
