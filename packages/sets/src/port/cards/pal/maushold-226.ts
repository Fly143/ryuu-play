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

export class Maushold_226 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tandemaus";
  public hp: number = 60;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gentle Slap", cost: [], damage: "50", text: "" },
      { name: "Gnaw Relentlessly", cost: [], damage: "", text: "Put 1 damage counter on each of your opponent's Pokémon for each of your Maushold in play." }
  ];
  public set: string = "PAL";
  public name: string = "Maushold";
  public fullName: string = "Maushold PAL 226";
  public text: string = "Maushold";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersEachOpponent(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
