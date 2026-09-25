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

export class Jellicent_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Frillish";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stickiness", powerType: PowerType.ABILITY, text: "The Retreat Cost of each of your opponent's Pokémon in play is Colorless more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Eerie Light", cost: [], damage: "40", text: "Flip a coin. If heads, the Defending Pokémon is now Confused." }
  ];
  public set: string = "PLS";
  public name: string = "Jellicent";
  public fullName: string = "Jellicent PLS 45";
  public text: string = "Jellicent";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
