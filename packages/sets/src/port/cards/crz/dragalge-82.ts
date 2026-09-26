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

export class Dragalge_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skrelp";
  public hp: number = 120;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rocket Poison", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Poisoned. If this Pokémon evolved from Skrelp during this turn, put 8 damage counters on that Pokémon instead of 1 during Pokémon Checkup." },
      { name: "Razor Fin", cost: [], damage: "60", text: "" }
  ];
  public set: string = "CRZ";
  public name: string = "Dragalge";
  public fullName: string = "Dragalge CRZ 82";
  public text: string = "Dragalge";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
