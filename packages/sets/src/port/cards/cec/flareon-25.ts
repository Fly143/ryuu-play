import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Flareon_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 110;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Power Cheer", powerType: PowerType.ABILITY, text: "The attacks of your Pokémon-GX in play that evolve from Eevee do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). You can't apply more than 1 Power Cheer Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flamethrower", cost: [], damage: "90", text: "Discard an Energy from this Pokémon." }
  ];
  public set: string = "CEC";
  public name: string = "Flareon";
  public fullName: string = "Flareon CEC 25";
  public text: string = "Flareon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
