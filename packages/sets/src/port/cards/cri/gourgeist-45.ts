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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Gourgeist_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pumpkaboo";
  public hp: number = 120;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Confuse Ray", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Confused." },
      { name: "Pumpkin Bomb", cost: [], damage: "10+", text: "Before doing damage, you may discard any number of Pokémon Tool cards from your Pokémon. This attack does 40 more damage for each card you discarded in this way." }
  ];
  public set: string = "CRI";
  public name: string = "Gourgeist";
  public fullName: string = "Gourgeist CRI 45";
  public text: string = "Gourgeist";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 0);
    }
    return state;
  }
}
