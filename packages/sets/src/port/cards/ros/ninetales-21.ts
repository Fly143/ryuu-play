import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  BetweenTurnsEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Ninetales_213 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vulpix";
  public hp: number = 90;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Barrier Shrine", powerType: PowerType.ABILITY, text: "Each player can't play any Stadium cards from his or her hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flickering Flames", cost: [], damage: "70", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "ROS";
  public name: string = "Ninetales";
  public fullName: string = "Ninetales ROS 21";
  public text: string = "Ninetales";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noStadium");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noStadium");
    }
    return state;
  }
}
