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

export class Castform_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Temperamental Weather", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for Sunny Castform, Rain Castform, or Snow-cloud Castform and switch it with Castform. (Any cards attached to Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Forecast", cost: [], damage: "", text: "Search your deck for a Stadium card and play it. Shuffle your deck afterward." },
      { name: "Extra Ball", cost: [], damage: "20+", text: "If the Defending Pokémon is Pokémon-ex, this attack does 20 damage plus 20 more damage." }
  ];
  public set: string = "HL";
  public name: string = "Castform";
  public fullName: string = "Castform HL 30";
  public text: string = "Castform";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
