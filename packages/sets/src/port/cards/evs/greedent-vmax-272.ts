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

export class GreedentVMAX_272 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Greedent V";
  public hp: number = 320;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Turn a Profit", cost: [], damage: "30", text: "If your opponent's Basic Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards." },
      { name: "Max Gimme Gimme", cost: [], damage: "160", text: "Draw 3 cards." }
  ];
  public set: string = "EVS";
  public name: string = "Greedent VMAX";
  public fullName: string = "Greedent VMAX EVS 272";
  public text: string = "Greedent VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.drawCardsAttack(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
