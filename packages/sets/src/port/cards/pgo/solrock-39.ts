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

export class Solrock_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sun Energy", powerType: PowerType.ABILITY, text: "Once during your turn, you may attach a Psychic Energy card from your discard pile to 1 of your Lunatone.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spinning Attack", cost: [], damage: "50", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Solrock";
  public fullName: string = "Solrock PGO 39";
  public text: string = "Solrock";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attachBasicFromDiscard");
    }
    return state;
  }
}
