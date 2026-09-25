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

export class HisuianBasculinSWSH273 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Submerge Silently", cost: [], damage: "", text: "You can use this attack only if you go second, and only during your first turn. During your opponent's next turn, prevent all damage done to this Pokémon by attacks." },
      { name: "Bite", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Hisuian Basculin";
  public fullName: string = "Hisuian Basculin PR-SW SWSH273";
  public text: string = "Hisuian Basculin";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
