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

export class Charjabug_652 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grubbin";
  public hp: number = 90;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Charge", cost: [], damage: "", text: "Search your deck for up to 2 Lightning Energy cards and attach them to this Pokémon. Then, shuffle your deck." },
      { name: "Lightning Ball", cost: [], damage: "70", text: "" }
  ];
  public set: string = "RCL";
  public name: string = "Charjabug";
  public fullName: string = "Charjabug RCL 65";
  public text: string = "Charjabug";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
