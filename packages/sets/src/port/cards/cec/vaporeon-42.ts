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

export class Vaporeon_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 110;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Vitality Cheer", powerType: PowerType.ABILITY, text: "Your Pokémon-GX in play that evolve from Eevee get +60 HP. You can't apply more than 1 Vitality Cheer Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Refreshing Rain", cost: [], damage: "60", text: "Heal 30 damage from each of your Pokémon." }
  ];
  public set: string = "CEC";
  public name: string = "Vaporeon";
  public fullName: string = "Vaporeon CEC 42";
  public text: string = "Vaporeon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
