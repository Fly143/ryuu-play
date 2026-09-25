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

export class GuzzlordGX_116 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Eat Sloppily", cost: [], damage: "", text: "Discard the top 5 cards of your deck. If any of those cards are Energy cards, attach them to this Pokémon." },
      { name: "Tyrannical Hole", cost: [], damage: "180", text: "" },
      { name: "Glutton-GX", cost: [], damage: "100", text: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CRI";
  public name: string = "Guzzlord-GX";
  public fullName: string = "Guzzlord-GX CRI 116";
  public text: string = "Guzzlord-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 5);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
