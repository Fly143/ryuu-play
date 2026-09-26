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

export class Indeedee_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Helping Hand", cost: [], damage: "", text: "Search your deck for a basic Energy card and attach it to 1 of your Benched Pokémon. Then, shuffle your deck." },
      { name: "Psychic", cost: [], damage: "20+", text: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "SHF";
  public name: string = "Indeedee";
  public fullName: string = "Indeedee SHF 56";
  public text: string = "Indeedee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    return state;
  }
}
