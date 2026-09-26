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

export class Conkeldurr_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gurdurr";
  public hp: number = 180;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tantrum", cost: [], damage: "80", text: "This Pokémon is now Confused." },
      { name: "Gutsy Swing", cost: [], damage: "250", text: "If this Pokémon is affected by a Special Condition, ignore all Energy in this attack's cost." }
  ];
  public set: string = "TWM";
  public name: string = "Conkeldurr";
  public fullName: string = "Conkeldurr TWM 105";
  public text: string = "Conkeldurr";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
