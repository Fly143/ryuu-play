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

export class FarfetchD_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Leek Slap", cost: [], damage: "30", text: "Flip a coin. If tails, this attack does nothing. Either way, you can't use this attack again as long as Farfetch'd stays in play (even putting Farfetch'd on the Bench won't let you use it again)." },
      { name: "Pot Smash", cost: [], damage: "30", text: "" }
  ];
  public set: string = "BS";
  public name: string = "Farfetch'd";
  public fullName: string = "Farfetch'd BS 27";
  public text: string = "Farfetch'd";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipTailsBaseDamage:0");
    }
    return state;
  }
}
