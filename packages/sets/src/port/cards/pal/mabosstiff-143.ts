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

export class Mabosstiff_143 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Maschiff";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Comeuppance", cost: [], damage: "20", text: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon." },
      { name: "Darkness Fang", cost: [], damage: "100", text: "" }
  ];
  public set: string = "PAL";
  public name: string = "Mabosstiff";
  public fullName: string = "Mabosstiff PAL 143";
  public text: string = "Mabosstiff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "roughSkin");
    }
    return state;
  }
}
