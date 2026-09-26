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

export class GogoatXY16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skiddo";
  public hp: number = 110;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Push Down", cost: [], damage: "30", text: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon." },
      { name: "Forest Press", cost: [], damage: "60+", text: "Flip a coin for each Grass Energy attached to this Pokémon. This attack does 30 more damage for each heads." }
  ];
  public set: string = "PR-XY";
  public name: string = "Gogoat";
  public fullName: string = "Gogoat PR-XY XY16";
  public text: string = "Gogoat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    return state;
  }
}
