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

export class Toedscruel_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Toedscool";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Slime Mold Colony", powerType: PowerType.ABILITY, text: "Cards in your opponent's discard pile can't be put into their hand by an effect of your opponent's Abilities or Trainer cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mushroom Drain", cost: [], damage: "80", text: "Heal 30 damage from this Pokémon." }
  ];
  public set: string = "PAR";
  public name: string = "Toedscruel";
  public fullName: string = "Toedscruel PAR 17";
  public text: string = "Toedscruel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
