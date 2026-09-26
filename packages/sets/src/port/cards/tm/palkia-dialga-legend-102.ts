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

export class PalkiaDialgaLEGEND_102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
    public height?: number = 5.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sudden Delete", cost: [], damage: "", text: "Choose 1 of your opponent's Benched Pokémon. Put that Pokémon and all cards attached to it back to your opponent's hand." },
      { name: "Time Control", cost: [], damage: "", text: "Discard all Metal Energy attached to Palkia & Dialga LEGEND. Add the top 2 cards of your opponent's deck to his or her Prize cards." }
  ];
  public set: string = "TM";
  public name: string = "Palkia & Dialga LEGEND";
  public fullName: string = "Palkia & Dialga LEGEND TM 102";
  public text: string = "Palkia & Dialga LEGEND";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
