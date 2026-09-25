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

export class Houndoom_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Houndour";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Single Strike Roar", powerType: PowerType.ABILITY, text: "Once during your turn, you may search your deck for a Single Strike Energy card and attach it to 1 of your Single Strike Pokémon. Then, shuffle your deck. If you attached Energy to a Pokémon in this way, put 2 damage counters on that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Darkness Fang", cost: [], damage: "50", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Houndoom";
  public fullName: string = "Houndoom SHF 96";
  public text: string = "Houndoom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchEnergyToSelf");
    }
    return state;
  }
}
