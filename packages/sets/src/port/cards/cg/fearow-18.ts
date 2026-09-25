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

export class Fearow_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Spearow";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Delta Sign", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for a Pokémon that has δ on its card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. You can't use more than 1 Delta Sign Poké-Power each turn. This power can't be used if Fearow is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Pierce", cost: [], damage: "30", text: "" }
  ];
  public set: string = "CG";
  public name: string = "Fearow δ";
  public fullName: string = "Fearow δ CG 18";
  public text: string = "Fearow δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
