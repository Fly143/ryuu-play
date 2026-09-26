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

export class Incineroar_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Torracat";
  public hp: number = 160;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Strong Cheer", powerType: PowerType.ABILITY, text: "Your Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). You can't apply more than 1 Strong Cheer Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flamethrower", cost: [], damage: "90", text: "Discard an Energy from this Pokémon." }
  ];
  public set: string = "UNM";
  public name: string = "Incineroar";
  public fullName: string = "Incineroar UNM 29";
  public text: string = "Incineroar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "plusPowerMarker:30");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "plusPowerMarker:30");
    }
    return state;
  }
}
