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

export class Milotic_23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Feebas";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Grace", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack) you may Knock Out this Pokémon. If you do, attach 3 basic Energy from your discard pile to 1 of your Pokémon (excluding Pokémon-EX).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Waterfall", cost: [], damage: "60", text: "" }
  ];
  public set: string = "FLF";
  public name: string = "Milotic";
  public fullName: string = "Milotic FLF 23";
  public text: string = "Milotic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attachBasicFromDiscard");
    }
    return state;
  }
}
