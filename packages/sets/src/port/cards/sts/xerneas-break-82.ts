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

export class XerneasBREAK_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Xerneas";
  public hp: number = 150;
    public height?: number = 3.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Life Stream", cost: [], damage: "20×", text: "This attack does 20 damage times the amount of Energy attached to all of your Pokémon." }
  ];
  public set: string = "STS";
  public name: string = "Xerneas BREAK";
  public fullName: string = "Xerneas BREAK STS 82";
  public text: string = "Xerneas BREAK";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
