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

export class Amoonguss_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Foongus";
  public hp: number = 120;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dangerous Reaction", cost: [], damage: "30+", text: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 120 more damage." },
      { name: "Seed Bomb", cost: [], damage: "60", text: "" }
  ];
  public set: string = "BLK";
  public name: string = "Amoonguss";
  public fullName: string = "Amoonguss BLK 96";
  public text: string = "Amoonguss";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
