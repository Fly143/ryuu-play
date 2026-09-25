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

export class Swampert_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Marshtomp";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Water Cyclone", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may move a Water Energy attached to 1 of your Active Pokémon to 1 of your Benched Pokémon. This power can't be used if Swampert is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spinning Tail", cost: [], damage: "", text: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Aqua Sonic", cost: [], damage: "60", text: "This attack's damage isn't affected by Resistance." }
  ];
  public set: string = "EM";
  public name: string = "Swampert";
  public fullName: string = "Swampert EM 11";
  public text: string = "Swampert";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
