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

export class Magneton_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magnemite";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Electromagnetic Power", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may take 1 Energy card attached to 1 of your Magnemites, Magnetons, or Dark Magnetons and attach it to a different 1 of your Magnemites, Magnetons, and Dark Magnetons. This power can't be used if Magneton is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Plasma", cost: [], damage: "30", text: "If there are any Lightning Energy cards in your discard pile, attach 1 of them to Magneton." }
  ];
  public set: string = "N3";
  public name: string = "Magneton";
  public fullName: string = "Magneton N3 10";
  public text: string = "Magneton";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
