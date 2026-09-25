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

export class Eelektrik_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tynamo";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dynamotor", powerType: PowerType.ABILITY, text: "Once during your turn, you may attach a Basic Lightning Energy card from your discard pile to 1 of your Benched Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Electric Ball", cost: [], damage: "50", text: "" }
  ];
  public set: string = "BLK";
  public name: string = "Eelektrik";
  public fullName: string = "Eelektrik BLK 31";
  public text: string = "Eelektrik";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attachBasicFromDiscard");
    }
    return state;
  }
}
