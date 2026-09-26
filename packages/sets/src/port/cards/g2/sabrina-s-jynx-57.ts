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

export class SabrinaSJynx_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Helping Hand", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. Remove any number of damage counters from that Pokémon, then draw that many cards." },
      { name: "Hug", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon can't retreat during your opponent's next turn." }
  ];
  public set: string = "G2";
  public name: string = "Sabrina's Jynx";
  public fullName: string = "Sabrina's Jynx G2 57";
  public text: string = "Sabrina's Jynx";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
