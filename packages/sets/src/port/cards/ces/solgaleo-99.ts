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

export class Solgaleo_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cosmoem";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Full Metal Body", powerType: PowerType.ABILITY, text: "If this Pokémon has any Metal Energy attached to it, it has no Weakness.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rising Dash", cost: [], damage: "130", text: "This attack's damage isn't affected by Resistance." }
  ];
  public set: string = "CES";
  public name: string = "Solgaleo";
  public fullName: string = "Solgaleo CES 99";
  public text: string = "Solgaleo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
