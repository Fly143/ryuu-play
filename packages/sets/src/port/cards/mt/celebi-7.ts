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

export class Celebi_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sprouting", cost: [], damage: "", text: "Search your deck for a Grass Energy card and attach it to Celebi. Shuffle your deck afterward." },
      { name: "Leaf Tornado", cost: [], damage: "30", text: "You may move any number of basic Grass Energy cards attached to your Pokémon to your other Pokémon in any way you like." }
  ];
  public set: string = "MT";
  public name: string = "Celebi";
  public fullName: string = "Celebi MT 7";
  public text: string = "Celebi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
