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

export class TeamAquaSCorphish_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Double Pinchers", cost: [], damage: "10×", text: "Flip 2 coins. This attack does 10 damage times the number of heads." },
      { name: "Dark Poison", cost: [], damage: "20", text: "Discard a basic Energy card attached to Team Aqua's Corphish or this attack does nothing. The Defending Pokémon is now Poisoned." }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Corphish";
  public fullName: string = "Team Aqua's Corphish MA 26";
  public text: string = "Team Aqua's Corphish";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
