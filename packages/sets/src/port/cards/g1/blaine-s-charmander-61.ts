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

export class BlaineSCharmander_61 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Kindle", cost: [], damage: "10", text: "Discard 1 Energy card attached to Blaine's Charmander in order to use this attack. If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it." },
      { name: "Slash", cost: [], damage: "20", text: "" }
  ];
  public set: string = "G1";
  public name: string = "Blaine's Charmander";
  public fullName: string = "Blaine's Charmander G1 61";
  public text: string = "Blaine's Charmander";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
