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

export class Rhyperior_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rhydon";
  public hp: number = 160;
    public height?: number = 2.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Toppling Wind", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard the top 3 cards of your opponent's deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rock Wrecker", cost: [], damage: "170", text: "This attack's damage isn't affected by Weakness or Resistance. This Pokémon can't attack during your next turn." }
  ];
  public set: string = "BUS";
  public name: string = "Rhyperior";
  public fullName: string = "Rhyperior BUS 67";
  public text: string = "Rhyperior";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
