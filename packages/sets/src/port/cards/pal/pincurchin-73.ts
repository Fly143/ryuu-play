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

export class Pincurchin_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Stun Needle", cost: [], damage: "20", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." },
      { name: "Follow-Up Kerzap", cost: [], damage: "100", text: "You can use this attack only if this Pokémon used Stun Needle during your last turn." }
  ];
  public set: string = "PAL";
  public name: string = "Pincurchin";
  public fullName: string = "Pincurchin PAL 73";
  public text: string = "Pincurchin";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
