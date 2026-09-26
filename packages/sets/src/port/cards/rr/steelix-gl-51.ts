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

export class SteelixGL_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 9.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mend", cost: [], damage: "", text: "Search your discard pile for a Metal Energy card and attach it to Steelix GL. If you do, remove 1 damage counter from Steelix GL." },
      { name: "Squeeze", cost: [], damage: "30+", text: "Flip a coin. If heads, this attack does 30 damage plus 50 more damage and the Defending Pokémon is now Paralyzed." }
  ];
  public set: string = "RR";
  public name: string = "Steelix GL";
  public fullName: string = "Steelix GL RR 51";
  public text: string = "Steelix GL";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
