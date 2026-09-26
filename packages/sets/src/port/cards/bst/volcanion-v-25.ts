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

export class VolcanionV_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Heat Blast", cost: [], damage: "50", text: "" },
      { name: "Dynamite Tackle", cost: [], damage: "100+", text: "If this Pokémon has 10 or more damage counters on it, this attack does 150 more damage." }
  ];
  public set: string = "BST";
  public name: string = "Volcanion V";
  public fullName: string = "Volcanion V BST 25";
  public text: string = "Volcanion V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 150, 1);
    }
    return state;
  }
}
