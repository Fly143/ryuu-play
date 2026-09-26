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

export class Furret_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sentret";
  public hp: number = 90;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Keen Eye", cost: [], damage: "", text: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward." },
      { name: "Baton Pass", cost: [], damage: "40", text: "You may switch Furret with 1 of your Benched Pokémon. If you do, move as many Energy cards attached to Furret as you like to the new Active Pokémon." }
  ];
  public set: string = "SW";
  public name: string = "Furret";
  public fullName: string = "Furret SW 27";
  public text: string = "Furret";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:2");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
