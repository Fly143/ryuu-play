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

export class Spiritomb_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ghostly Cries", cost: [], damage: "", text: "For each Pokémon in your opponent's discard pile, put 1 damage counter on your opponent's Pokémon in any way you like. If you placed any damage counters in this way, your opponent shuffles all Pokémon from their discard pile into their deck." },
      { name: "Will-O-Wisp", cost: [], damage: "20", text: "" }
  ];
  public set: string = "BST";
  public name: string = "Spiritomb";
  public fullName: string = "Spiritomb BST 103";
  public text: string = "Spiritomb";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersEachOpponent(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
