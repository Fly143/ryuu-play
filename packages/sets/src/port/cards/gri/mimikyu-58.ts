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

export class Mimikyu_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Filch", cost: [], damage: "", text: "Draw 2 cards." },
      { name: "Copycat", cost: [], damage: "", text: "If your opponent's Pokémon used an attack that isn't a GX attack during their last turn, use it as this attack." }
  ];
  public set: string = "GRI";
  public name: string = "Mimikyu";
  public fullName: string = "Mimikyu GRI 58";
  public text: string = "Mimikyu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.drawCardsAttack(this, store, state, effect).use(effect, 2);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* copyAttack */ state;
    }
    return state;
  }
}
