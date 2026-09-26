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

export class DarkEspeon_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 60;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gouge", cost: [], damage: "10+", text: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage." },
      { name: "Psysplash", cost: [], damage: "", text: "Does 10 damage to each of your opponent's Pokémon for each Energy card attached to that Pokémon. Don't apply Weakness and Resistance." }
  ];
  public set: string = "N4";
  public name: string = "Dark Espeon";
  public fullName: string = "Dark Espeon N4 4";
  public text: string = "Dark Espeon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
