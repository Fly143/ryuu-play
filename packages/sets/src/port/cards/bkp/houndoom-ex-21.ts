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

export class HoundoomEX_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Melting Horn", cost: [], damage: "", text: "Discard the top 2 cards of your opponent's deck." },
      { name: "Grand Flame", cost: [], damage: "50", text: "Attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon." }
  ];
  public set: string = "BKP";
  public name: string = "Houndoom-EX";
  public fullName: string = "Houndoom-EX BKP 21";
  public text: string = "Houndoom-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
