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

export class Jolteon_262 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Electric Effect", powerType: PowerType.ABILITY, text: "Each of your Stage 1 Pokémon in play is now a Lightning Pokémon in addition to its existing types.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Thunder Blast", cost: [], damage: "80", text: "Discard an Energy attached to this Pokémon." }
  ];
  public set: string = "BKT";
  public name: string = "Jolteon";
  public fullName: string = "Jolteon BKT 26";
  public text: string = "Jolteon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
