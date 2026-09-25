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

export class Weavile_61 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sneasel";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tear Away", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may put a Pokémon Tool card attached to 1 of your Pokémon into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slash", cost: [], damage: "40", text: "" }
  ];
  public set: string = "STS";
  public name: string = "Weavile";
  public fullName: string = "Weavile STS 61";
  public text: string = "Weavile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
