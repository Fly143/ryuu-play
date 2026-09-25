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

export class TeamRocketSMewtwoEx_79 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 280;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Power Saver", powerType: PowerType.ABILITY, text: "This Pokémon can't attack unless you have 4 or more Team Rocket's Pokémon in play.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Erasure Ball", cost: [], damage: "160+", text: "You may discard up to 2 Energy from your Benched Pokémon. This attack does 60 more damage for each card you discarded in this way." }
  ];
  public set: string = "ASC";
  public name: string = "Team Rocket's Mewtwo ex";
  public fullName: string = "Team Rocket's Mewtwo ex ASC 79";
  public text: string = "Team Rocket's Mewtwo ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attackGate");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "attackGate");
    }
    return state;
  }
}
