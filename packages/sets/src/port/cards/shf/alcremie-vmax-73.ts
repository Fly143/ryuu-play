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

export class AlcremieVMAX_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alcremie V";
  public hp: number = 310;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Adornment", cost: [], damage: "", text: "For each of your Benched Pokémon, search your deck for a Psychic Energy card and attach it to that Pokémon. Then, shuffle your deck." },
      { name: "G-Max Whisk", cost: [], damage: "60×", text: "Discard any amount of Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way." }
  ];
  public set: string = "SHF";
  public name: string = "Alcremie VMAX";
  public fullName: string = "Alcremie VMAX SHF 73";
  public text: string = "Alcremie VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
