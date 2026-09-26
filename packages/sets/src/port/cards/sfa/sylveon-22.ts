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

export class Sylveon_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mystical Return", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon. Shuffle that Pokémon and all attached cards into their deck." },
      { name: "Disarming Voice", cost: [], damage: "90", text: "Your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "SFA";
  public name: string = "Sylveon";
  public fullName: string = "Sylveon SFA 22";
  public text: string = "Sylveon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
