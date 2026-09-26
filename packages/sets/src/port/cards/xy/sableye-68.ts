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

export class Sableye_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Filch", cost: [], damage: "", text: "Draw a card." },
      { name: "Rip Claw", cost: [], damage: "30", text: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "XY";
  public name: string = "Sableye";
  public fullName: string = "Sableye XY 68";
  public text: string = "Sableye";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.drawCardsAttack(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsDiscardEnergyOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
