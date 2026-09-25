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

export class Moltres_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Top Burner", cost: [], damage: "", text: "Discard all Fire Energy from this Pokémon. Then, discard a card from the top of your opponent's deck for each Energy you discarded in this way." },
      { name: "Fire Spin", cost: [], damage: "180", text: "Discard 3 Energy from this Pokémon." }
  ];
  public set: string = "UNB";
  public name: string = "Moltres";
  public fullName: string = "Moltres UNB 19";
  public text: string = "Moltres";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
