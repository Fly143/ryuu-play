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

export class Mightyena_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poochyena";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Delta Fang", cost: [], damage: "20", text: "If the Defending Pokémon is Pokémon-ex, that Pokémon can't attack during your opponent's next turn." },
      { name: "Gang Up", cost: [], damage: "10×", text: "Does 10 damage times the number of Darkness Pokémon and Metal Pokémon you have in play." }
  ];
  public set: string = "DS";
  public name: string = "Mightyena δ";
  public fullName: string = "Mightyena δ DS 24";
  public text: string = "Mightyena δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTimesPokemonInPlay(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
