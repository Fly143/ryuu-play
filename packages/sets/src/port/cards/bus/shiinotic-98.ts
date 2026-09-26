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

export class Shiinotic_98 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Morelull";
  public hp: number = 100;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Strength Sap", cost: [], damage: "30", text: "Heal from this Pokémon 30 damage times the amount of Energy attached to your opponent's Active Pokémon." },
      { name: "Sleep Pulse", cost: [], damage: "60", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "BUS";
  public name: string = "Shiinotic";
  public fullName: string = "Shiinotic BUS 98";
  public text: string = "Shiinotic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
