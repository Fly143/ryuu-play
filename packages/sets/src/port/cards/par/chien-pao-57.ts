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

export class ChienPao_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Snow Bringer", cost: [], damage: "", text: "Attach up to 2 Basic Water Energy cards from your discard pile to 1 of your Pokémon." },
      { name: "Wrathful Blade", cost: [], damage: "130", text: "Discard 2 Energy from this Pokémon." }
  ];
  public set: string = "PAR";
  public name: string = "Chien-Pao";
  public fullName: string = "Chien-Pao PAR 57";
  public text: string = "Chien-Pao";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
