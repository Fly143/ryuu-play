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

export class Feraligatr_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Croconaw";
  public hp: number = 150;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hyper Whirlpool", cost: [], damage: "60", text: "Flip a coin until you get tails. For each heads, discard an Energy attached to your opponent's Active Pokémon." },
      { name: "Second Strike", cost: [], damage: "80+", text: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage." }
  ];
  public set: string = "PHF";
  public name: string = "Feraligatr";
  public fullName: string = "Feraligatr PHF 17";
  public text: string = "Feraligatr";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    return state;
  }
}
