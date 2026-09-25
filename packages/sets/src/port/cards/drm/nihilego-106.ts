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

export class Nihilego_106 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Nightcap", cost: [], damage: "", text: "You can use this attack only if your opponent has exactly 2 Prize cards remaining. Choose 1 of your opponent's Pokémon's attacks and use it as this attack." },
      { name: "Void Tentacles", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Confused and Poisoned." }
  ];
  public set: string = "DRM";
  public name: string = "Nihilego";
  public fullName: string = "Nihilego DRM 106";
  public text: string = "Nihilego";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "copyAttack");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
