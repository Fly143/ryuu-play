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

export class Mawile_91 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mining", cost: [], damage: "", text: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck. If that card is a Pokémon Tool card, instead of putting it into your hand, you may attach it to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it." },
      { name: "Bite Off", cost: [], damage: "20+", text: "If your opponent's Active Pokémon is a Pokémon-GX or a Pokémon-EX, this attack does 30 more damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "CES";
  public name: string = "Mawile";
  public fullName: string = "Mawile CES 91";
  public text: string = "Mawile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 1);
    }
    return state;
  }
}
