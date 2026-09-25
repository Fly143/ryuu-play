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

export class UnownF_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "[Find]", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if you have Unown [F], Unown [I], Unown [N], and Unown [D] on your Bench, you may search your deck for a Trainer card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "10", text: "" }
  ];
  public set: string = "N2";
  public name: string = "Unown [F]";
  public fullName: string = "Unown [F] N2 48";
  public text: string = "Unown [F]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
