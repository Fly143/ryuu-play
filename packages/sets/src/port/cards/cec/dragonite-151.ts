import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Dragonite_151 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dragonair";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hurricane Charge", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may attach a Water Energy card, a Lightning Energy card, or 1 of each from your hand to your Pokémon in any way you like.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dragon Impact", cost: [], damage: "170", text: "Discard 3 Energy from this Pokémon." }
  ];
  public set: string = "CEC";
  public name: string = "Dragonite";
  public fullName: string = "Dragonite CEC 151";
  public text: string = "Dragonite";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 3);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
