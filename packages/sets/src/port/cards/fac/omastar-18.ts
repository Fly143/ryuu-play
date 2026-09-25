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

export class Omastar_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Omanyte";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Restoring Beam", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for a Restored Pokémon and put it onto your Bench. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spinning Attack", cost: [], damage: "60", text: "" }
  ];
  public set: string = "FAC";
  public name: string = "Omastar";
  public fullName: string = "Omastar FAC 18";
  public text: string = "Omastar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
