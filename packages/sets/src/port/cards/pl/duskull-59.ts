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

export class Duskull_59 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Silhouette", cost: [], damage: "", text: "Put 1 damage counter on the Defending Pokémon. If the Defending Pokémon already has any damage counters on it, put 2 damage counters on that Pokémon instead." },
      { name: "Will-o'-the-wisp", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PL";
  public name: string = "Duskull";
  public fullName: string = "Duskull PL 59";
  public text: string = "Duskull";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 1);
    }
    return state;
  }
}
