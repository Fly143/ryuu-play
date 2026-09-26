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

export class MegaGardevoirEx_60 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kirlia";
  public hp: number = 360;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Overflowing Wishes", cost: [], damage: "", text: "For each of your Benched Pokémon, search your deck for a Basic Psychic Energy card and attach it to that Pokémon. Then, shuffle your deck." },
      { name: "Mega Symphonia", cost: [], damage: "50×", text: "This attack does 50 damage for each Psychic Energy attached to all of your Pokémon." }
  ];
  public set: string = "MEG";
  public name: string = "Mega Gardevoir ex";
  public fullName: string = "Mega Gardevoir ex MEG 60";
  public text: string = "Mega Gardevoir ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
