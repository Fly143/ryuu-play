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

export class Flareon_132 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flare Effect", powerType: PowerType.ABILITY, text: "Each of your Stage 1 Pokémon in play is now a Fire Pokémon in addition to its existing types.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Heat Breath", cost: [], damage: "60+", text: "Flip a coin. If heads, this attack does 20 more damage." }
  ];
  public set: string = "BKT";
  public name: string = "Flareon";
  public fullName: string = "Flareon BKT 13";
  public text: string = "Flareon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 1);
    }
    return state;
  }
}
