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

export class Suicune_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Pure Body", powerType: PowerType.ABILITY, text: "Whenever you attach a Water Energy card from your hand to Suicune, discard an Energy card attached to Suicune. (You can't attach a Water Energy card from your hand if Suicune has no Energy cards attached.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hypno Wave", cost: [], damage: "30+", text: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Asleep." }
  ];
  public set: string = "PR-NP";
  public name: string = "Suicune";
  public fullName: string = "Suicune PR-NP 30";
  public text: string = "Suicune";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
