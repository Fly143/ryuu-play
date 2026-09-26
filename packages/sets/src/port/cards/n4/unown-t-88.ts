import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
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

export class UnownT_88 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "[Tell]", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, look at your opponent's hand and show your hand to your opponent. This power can be used even if Unown [T] is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "20", text: "" }
  ];
  public set: string = "N4";
  public name: string = "Unown [T]";
  public fullName: string = "Unown [T] N4 88";
  public text: string = "Unown [T]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "peekOpponentHand");
    }
    return state;
  }
}
