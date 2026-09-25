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

export class GalarianStunfiskV_184 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 200;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Metal Skin", powerType: PowerType.ABILITY, text: "This Pokémon gets +20 HP for each Metal Energy attached to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Trapping Bite", cost: [], damage: "60", text: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 12 damage counters on the Attacking Pokémon." }
  ];
  public set: string = "DAA";
  public name: string = "Galarian Stunfisk V";
  public fullName: string = "Galarian Stunfisk V DAA 184";
  public text: string = "Galarian Stunfisk V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "roughSkin");
    }
    return state;
  }
}
