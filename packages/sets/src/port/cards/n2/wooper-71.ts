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

export class Wooper_712 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Slime", cost: [], damage: "", text: "If an attack would do damage to Wooper during your opponent's next turn, your opponent flips a coin. If tails, prevent all damage to Wooper from that attack. (Any other effects of that attack happen.)" },
      { name: "Tail Slap", cost: [], damage: "20", text: "" }
  ];
  public set: string = "N2";
  public name: string = "Wooper";
  public fullName: string = "Wooper N2 71";
  public text: string = "Wooper";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    return state;
  }
}
