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

export class RocketSHitmonchanEx_98 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Strikes Back", powerType: PowerType.ABILITY, text: "If Rocket's Hitmonchan ex is your Active Pokémon and is damaged by an opponent's attack (even if Rocket's Hitmonchan ex is Knocked Out), put 2 damage counters on the Attacking Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mach Punch", cost: [], damage: "10", text: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Magnum Punch", cost: [], damage: "60", text: "" }
  ];
  public set: string = "TRR";
  public name: string = "Rocket's Hitmonchan ex";
  public fullName: string = "Rocket's Hitmonchan ex TRR 98";
  public text: string = "Rocket's Hitmonchan ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.roughSkinPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "roughSkin");
    }
    return state;
  }
}
