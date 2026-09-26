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

export class Medicham_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Meditite";
  public hp: number = 120;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Chakra Awakening", powerType: PowerType.ABILITY, text: "If you have exactly 4 cards in your hand, this Pokémon's attacks cost ColorlessColorlessColorless less.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Vigorous Kick", cost: [], damage: "80+", text: "If your opponent has any Pokémon VMAX in play, this attack does 90 more damage." }
  ];
  public set: string = "PGO";
  public name: string = "Medicham";
  public fullName: string = "Medicham PGO 73";
  public text: string = "Medicham";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    return state;
  }
}
