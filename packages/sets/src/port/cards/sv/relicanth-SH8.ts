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

export class RelicanthSH8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Deep Sea Pressure", cost: [], damage: "20", text: "During your opponent's next turn, the Defending Pokémon's Retreat Cost is ColorlessColorless more." },
      { name: "Aqua Wave", cost: [], damage: "40+", text: "Flip 2 coins. This attack does 40 damage plus 10 more damage for each heads." }
  ];
  public set: string = "SV";
  public name: string = "Relicanth";
  public fullName: string = "Relicanth SV SH8";
  public text: string = "Relicanth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
