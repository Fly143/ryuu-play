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

export class Eelektross_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eelektrik";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Connect", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may move a basic Energy attached to 1 of your Benched Pokémon to your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Electricannon", cost: [], damage: "80+", text: "You may discard all Lightning Energy attached to this Pokémon. If you do, this attack does 50 more damage." }
  ];
  public set: string = "ROS";
  public name: string = "Eelektross";
  public fullName: string = "Eelektross ROS 65";
  public text: string = "Eelektross";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
