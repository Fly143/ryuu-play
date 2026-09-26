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

export class Flygon_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vibrava";
  public hp: number = 140;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dragon Guard", powerType: PowerType.ABILITY, text: "Prevent all effects of your opponent's attacks, except damage, done to your Dragon Pokémon. (Existing effects are not removed.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sand Tomb", cost: [], damage: "110", text: "The Defending Pokémon can't retreat during your opponent's next turn." }
  ];
  public set: string = "DRM";
  public name: string = "Flygon";
  public fullName: string = "Flygon DRM 39";
  public text: string = "Flygon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
