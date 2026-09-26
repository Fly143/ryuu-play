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

export class Skuntank_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Stunky";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sticky Smokescreen", cost: [], damage: "50", text: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips 2 coins. If either of them is tails, that attack does nothing." },
      { name: "Hammer In", cost: [], damage: "100", text: "" }
  ];
  public set: string = "UPR";
  public name: string = "Skuntank";
  public fullName: string = "Skuntank UPR 76";
  public text: string = "Skuntank";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackOpponentNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
