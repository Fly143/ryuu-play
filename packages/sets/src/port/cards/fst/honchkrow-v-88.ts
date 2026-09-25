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
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HonchkrowV_88 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 200;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Boss Pockets", powerType: PowerType.ABILITY, text: "This Pokémon may have up to 4 Pokémon Tools attached to it. If it loses this Ability, discard Pokémon Tools from it until only 1 remains.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fearsome Shadow", cost: [], damage: "130", text: "Your opponent reveals their hand." }
  ];
  public set: string = "FST";
  public name: string = "Honchkrow V";
  public fullName: string = "Honchkrow V FST 88";
  public text: string = "Honchkrow V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "toolSlots:4");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "toolSlots:4");
    }
    return state;
  }
}
