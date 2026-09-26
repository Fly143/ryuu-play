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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MegaDragalgeEx_104 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skrelp";
  public hp: number = 330;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Corrosive Liquid", cost: [], damage: "", text: "Discard all Pokémon Tools and Special Energy from all of your opponent's Pokémon." },
      { name: "Pernicious Poison", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, place 16 damage counters on that Pokémon instead of 1." }
  ];
  public set: string = "CRI";
  public name: string = "Mega Dragalge ex";
  public fullName: string = "Mega Dragalge ex CRI 104";
  public text: string = "Mega Dragalge ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
