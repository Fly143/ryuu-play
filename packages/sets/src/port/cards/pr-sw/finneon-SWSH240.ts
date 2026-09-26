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

export class FinneonSWSH240 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Oceanic Accompaniment", powerType: PowerType.ABILITY, text: "As often as you like during your turn, you may attach a Water Energy card from your hand to 1 of your Pokémon that has the Swim Freely attack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Water Gun", cost: [], damage: "10", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Finneon";
  public fullName: string = "Finneon PR-SW SWSH240";
  public text: string = "Finneon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
