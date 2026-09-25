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

export class MedichamV_186 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Yoga Loop", cost: [], damage: "", text: "Put 2 damage counters on 1 of your opponent's Pokémon. If your opponent's Pokémon is Knocked Out by this attack, take another turn after this one. (Skip Pokémon Checkup.) If 1 of your Pokémon used Yoga Loop during your last turn, this attack can't be used." },
      { name: "Smash Uppercut", cost: [], damage: "100", text: "This attack's damage isn't affected by Resistance." }
  ];
  public set: string = "CRE";
  public name: string = "Medicham V";
  public fullName: string = "Medicham V CRE 186";
  public text: string = "Medicham V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
