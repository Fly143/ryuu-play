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

export class GiratinaVSWSH259 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 4.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Abyss Seeking", cost: [], damage: "", text: "Look at the top 4 cards of your deck and put 2 of them into your hand. Put the other cards in the Lost Zone." },
      { name: "Shred", cost: [], damage: "160", text: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon." }
  ];
  public set: string = "PR-SW";
  public name: string = "Giratina V";
  public fullName: string = "Giratina V PR-SW SWSH259";
  public text: string = "Giratina V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
