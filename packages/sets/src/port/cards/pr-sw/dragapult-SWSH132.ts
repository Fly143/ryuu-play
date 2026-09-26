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

export class DragapultSWSH132 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drakloak";
  public hp: number = 150;
    public height?: number = 3.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mach Turn", cost: [], damage: "60", text: "You may switch this Pokémon with 1 of your Benched Pokémon." },
      { name: "Diving Swipe", cost: [], damage: "150", text: "Discard a random card from your opponent's hand." }
  ];
  public set: string = "PR-SW";
  public name: string = "Dragapult";
  public fullName: string = "Dragapult PR-SW SWSH132";
  public text: string = "Dragapult";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardOpponentHand(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
