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

export class GroudonEXXY42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rip Claw", cost: [], damage: "30", text: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon." },
      { name: "Massive Rend", cost: [], damage: "130", text: "" }
  ];
  public set: string = "PR-XY";
  public name: string = "Groudon-EX";
  public fullName: string = "Groudon-EX PR-XY XY42";
  public text: string = "Groudon-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsDiscardEnergyOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
