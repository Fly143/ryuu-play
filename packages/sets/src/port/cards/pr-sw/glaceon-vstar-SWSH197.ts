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

export class GlaceonVSTARSWSH197 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Glaceon V";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Icicle Shot", cost: [], damage: "180", text: "During your opponent's next turn, the Defending Pokémon can't retreat." },
      { name: "Crystal Star", cost: [], damage: "220", text: "During your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon. (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "PR-SW";
  public name: string = "Glaceon VSTAR";
  public fullName: string = "Glaceon VSTAR PR-SW SWSH197";
  public text: string = "Glaceon VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* preventEffectsMarker */ state;
    }
    return state;
  }
}
