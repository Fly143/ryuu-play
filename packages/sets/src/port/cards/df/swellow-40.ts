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

export class Swellow_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Taillow";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Extra Wing", powerType: PowerType.ABILITY, text: "The Retreat Cost for each of your Stage 2 Pokémon-ex is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Agility", cost: [], damage: "30", text: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Swellow during your opponent's next turn." }
  ];
  public set: string = "DF";
  public name: string = "Swellow δ";
  public fullName: string = "Swellow δ DF 40";
  public text: string = "Swellow δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    return state;
  }
}
