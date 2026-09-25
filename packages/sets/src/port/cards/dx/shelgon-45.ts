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

export class Shelgon_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bagon";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hard Protection", powerType: PowerType.ABILITY, text: "Prevent all damage done to Shelgon by attacks from your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rock Smash", cost: [], damage: "30+", text: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage." }
  ];
  public set: string = "DX";
  public name: string = "Shelgon";
  public fullName: string = "Shelgon DX 45";
  public text: string = "Shelgon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
