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

export class Aggron_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lairon";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Terraforming", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may look at the top 5 cards from your deck and put them back on top of your deck in any order. This power can't be used if Aggron is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Metal Claw", cost: [], damage: "50", text: "" },
      { name: "Mix-Up", cost: [], damage: "70", text: "Your opponent discards the top card of his or her deck." }
  ];
  public set: string = "PK";
  public name: string = "Aggron";
  public fullName: string = "Aggron PK 1";
  public text: string = "Aggron";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
