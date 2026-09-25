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

export class Cinderace_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Raboot";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Libero", powerType: PowerType.ABILITY, text: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may attach up to 2 Fire Energy cards from your discard pile to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flare Striker", cost: [], damage: "190", text: "Discard 2 Energy from this Pokémon." }
  ];
  public set: string = "SSH";
  public name: string = "Cinderace";
  public fullName: string = "Cinderace SSH 34";
  public text: string = "Cinderace";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
