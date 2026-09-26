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

export class Magearna_1282 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Overhaul", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw 6 cards." },
      { name: "Windup Cannon", cost: [], damage: "10+", text: "This attack does 20 more damage for each of your opponent's Benched Pokémon." }
  ];
  public set: string = "VIV";
  public name: string = "Magearna";
  public fullName: string = "Magearna VIV 128";
  public text: string = "Magearna";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerOpponentBench(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
