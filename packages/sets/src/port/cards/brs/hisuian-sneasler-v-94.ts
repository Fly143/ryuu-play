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

export class HisuianSneaslerV_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Poison Claws", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Poisoned." },
      { name: "Dire Claw", cost: [], damage: "80×", text: "This attack does 80 damage for each Special Condition affecting your opponent's Active Pokémon." }
  ];
  public set: string = "BRS";
  public name: string = "Hisuian Sneasler V";
  public fullName: string = "Hisuian Sneasler V BRS 94";
  public text: string = "Hisuian Sneasler V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
