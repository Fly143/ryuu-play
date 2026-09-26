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

export class Guzzlord_136 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 150;
    public height?: number = 5.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mountain Munch", cost: [], damage: "", text: "Discard the top card of your opponent's deck." },
      { name: "Red Banquet", cost: [], damage: "120", text: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card." }
  ];
  public set: string = "CEC";
  public name: string = "Guzzlord";
  public fullName: string = "Guzzlord CEC 136";
  public text: string = "Guzzlord";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "plusPrize:1");
    }
    return state;
  }
}
