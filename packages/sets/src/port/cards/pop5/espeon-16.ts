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

export class Espeon_162 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Purple Ray", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Espeon Star from your hand onto your Bench, you may use this power. Each Active Pokémon (both yours and your opponent's) is now Confused.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic Boom", cost: [], damage: "30+", text: "Does 30 damage plus 10 more damage for each Energy attached to the Defending Pokémon." }
  ];
  public set: string = "POP5";
  public name: string = "Espeon ★";
  public fullName: string = "Espeon ★ POP5 16";
  public text: string = "Espeon ★";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
