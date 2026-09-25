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

export class AmbipomG_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tail Code", cost: [], damage: "", text: "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon." },
      { name: "Snap Attack", cost: [], damage: "60", text: "If the Defending Pokémon has any Energy cards attached to it, this attack's base damage is 20 instead of 60." }
  ];
  public set: string = "RR";
  public name: string = "Ambipom G";
  public fullName: string = "Ambipom G RR 56";
  public text: string = "Ambipom G";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect);
    }
    return state;
  }
}
