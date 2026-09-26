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

export class Shiinotic_80 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Morelull";
  public hp: number = 110;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flickering Light", cost: [], damage: "30", text: "Flip a coin. If heads, during your opponent's next turn, the Defending Pokémon can't attack." },
      { name: "Fear the Forest", cost: [], damage: "60+", text: "If Glimwood Tangle is in play, this attack does 60 more damage." }
  ];
  public set: string = "DAA";
  public name: string = "Shiinotic";
  public fullName: string = "Shiinotic DAA 80";
  public text: string = "Shiinotic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackOpponentNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 1);
    }
    return state;
  }
}
