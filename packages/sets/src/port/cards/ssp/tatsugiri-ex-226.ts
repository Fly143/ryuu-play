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

export class TatsugiriEx_226 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Surprise Pump", cost: [], damage: "100", text: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon." },
      { name: "Cinnabar Lure", cost: [], damage: "", text: "Look at the top 10 cards of your deck. You may put any number of Pokémon you find there onto your Bench. Shuffle the other cards back into your deck." }
  ];
  public set: string = "SSP";
  public name: string = "Tatsugiri ex";
  public fullName: string = "Tatsugiri ex SSP 226";
  public text: string = "Tatsugiri ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
