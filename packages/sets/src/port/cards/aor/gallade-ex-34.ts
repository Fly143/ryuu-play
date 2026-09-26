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

export class GalladeEX_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Swift Lunge", cost: [], damage: "30", text: "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon." },
      { name: "Piercing Prizes", cost: [], damage: "50+", text: "This attack does 20 more damage for each of your remaining Prize cards." }
  ];
  public set: string = "AOR";
  public name: string = "Gallade-EX";
  public fullName: string = "Gallade-EX AOR 34";
  public text: string = "Gallade-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    return state;
  }
}
