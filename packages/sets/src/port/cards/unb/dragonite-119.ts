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

export class Dragonite_119 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dragonair";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fast Call", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dragon Claw", cost: [], damage: "120", text: "" }
  ];
  public set: string = "UNB";
  public name: string = "Dragonite";
  public fullName: string = "Dragonite UNB 119";
  public text: string = "Dragonite";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
