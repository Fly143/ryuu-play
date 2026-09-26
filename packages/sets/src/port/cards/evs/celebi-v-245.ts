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

export class CelebiV_245 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Leaflet Dance", cost: [], damage: "", text: "Attach any number of Grass Energy cards from your hand to your Pokémon in any way you like." },
      { name: "Slash Back", cost: [], damage: "60", text: "Switch this Pokémon with 1 of your Benched Pokémon." }
  ];
  public set: string = "EVS";
  public name: string = "Celebi V";
  public fullName: string = "Celebi V EVS 245";
  public text: string = "Celebi V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
