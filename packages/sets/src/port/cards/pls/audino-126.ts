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

export class Audino_126 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Busybody", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon is in your hand, you may reveal it. If you do, heal 10 damage and remove a Special Condition from your Active Pokémon. Then, discard this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hip Bump", cost: [], damage: "30", text: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing." }
  ];
  public set: string = "PLS";
  public name: string = "Audino";
  public fullName: string = "Audino PLS 126";
  public text: string = "Audino";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackOpponentNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
