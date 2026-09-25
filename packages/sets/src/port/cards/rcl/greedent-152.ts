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

export class Greedent_1522 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skwovet";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Greedy Tail", powerType: PowerType.ABILITY, text: "Once during your turn, you may search your deck for a Pokémon Tool card, reveal it, and put it into your hand. Then, shuffle your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tail Smack", cost: [], damage: "80", text: "" }
  ];
  public set: string = "RCL";
  public name: string = "Greedent";
  public fullName: string = "Greedent RCL 152";
  public text: string = "Greedent";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
