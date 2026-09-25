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

export class Illumise_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Scent Conduct", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a Grass Basic Pokémon and put it onto your Bench. Shuffle your deck afterward. This power can't be used if Illumise is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Firefly Scent", cost: [], damage: "30", text: "If the Defending Pokémon has any Poké-Bodies, that Pokémon is now Asleep." }
  ];
  public set: string = "GE";
  public name: string = "Illumise";
  public fullName: string = "Illumise GE 71";
  public text: string = "Illumise";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
