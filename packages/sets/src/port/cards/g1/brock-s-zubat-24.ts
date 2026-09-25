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

export class BrockSZubat_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Alert", cost: [], damage: "", text: "Draw a card. Then, switch Brock's Zubat with 1 of your Benched Pokémon. You can't use this attack if your Bench is empty." },
      { name: "Wing Attack", cost: [], damage: "20", text: "" }
  ];
  public set: string = "G1";
  public name: string = "Brock's Zubat";
  public fullName: string = "Brock's Zubat G1 24";
  public text: string = "Brock's Zubat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
