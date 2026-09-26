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

export class Sceptile_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grovyle";
  public hp: number = 100;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wild Growth", powerType: PowerType.ABILITY, text: "Each basic Grass Energy card attached to your Grass Pokémon provides GrassGrass Energy instead. You can't use more than 1 Wild Growth Poké-Body each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Leaf Blade", cost: [], damage: "50+", text: "Flip a coin. If heads, this attack does 50 damage plus 20 more damage." }
  ];
  public set: string = "GE";
  public name: string = "Sceptile";
  public fullName: string = "Sceptile GE 8";
  public text: string = "Sceptile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
