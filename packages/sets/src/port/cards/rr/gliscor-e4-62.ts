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

export class GliscorE4_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Irongrip", cost: [], damage: "10", text: "" },
      { name: "Loaded Needle", cost: [], damage: "10+", text: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage. If tails, the Defending Pokémon is now Poisoned." }
  ];
  public set: string = "RR";
  public name: string = "Gliscor E4";
  public fullName: string = "Gliscor E4 RR 62";
  public text: string = "Gliscor E4";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
