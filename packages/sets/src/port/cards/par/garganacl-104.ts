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

export class Garganacl_104 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Naclstack";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energizing Rock Salt", powerType: PowerType.ABILITY, text: "Once during your turn, you may attach a Basic Fighting Energy card from your discard pile to 1 of your Pokémon. If you attached Energy to a Pokémon in this way, heal 30 damage from that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Land Crush", cost: [], damage: "140", text: "" }
  ];
  public set: string = "PAR";
  public name: string = "Garganacl";
  public fullName: string = "Garganacl PAR 104";
  public text: string = "Garganacl";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attachBasicFromDiscard");
    }
    return state;
  }
}
