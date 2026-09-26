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

export class Klefki_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Secret Key", powerType: PowerType.ABILITY, text: "Each of your Fairy Pokémon's Resistance is now -40.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fairy Lock", cost: [], damage: "30", text: "The Defending Pokémon can't retreat during your opponent's next turn." }
  ];
  public set: string = "FFI";
  public name: string = "Klefki";
  public fullName: string = "Klefki FFI 73";
  public text: string = "Klefki";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
