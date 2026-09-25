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

export class Clawitzer_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clauncher";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mega Boost", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may attach a Special Energy card from your hand to 1 of your Mega Evolution Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crabhammer", cost: [], damage: "60", text: "" }
  ];
  public set: string = "STS";
  public name: string = "Clawitzer";
  public fullName: string = "Clawitzer STS 34";
  public text: string = "Clawitzer";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
