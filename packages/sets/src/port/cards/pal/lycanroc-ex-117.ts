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

export class LycanrocEx_117 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rockruff";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rock Throw", cost: [], damage: "40", text: "" },
      { name: "Scary Fangs", cost: [], damage: "140", text: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 10 damage counters on the Attacking Pokémon." }
  ];
  public set: string = "PAL";
  public name: string = "Lycanroc ex";
  public fullName: string = "Lycanroc ex PAL 117";
  public text: string = "Lycanroc ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "roughSkin");
    }
    return state;
  }
}
