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

export class Mightyena_66 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poochyena";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bite On", cost: [], damage: "30", text: "If the Defending Pokémon isn't an Evolved Pokémon, that Pokémon can't attack, retreat, or use any Poké-Powers during your opponent's next turn." },
      { name: "Harass", cost: [], damage: "10×", text: "Does 10 damage times the number of Pokémon you have in play." }
  ];
  public set: string = "SF";
  public name: string = "Mightyena";
  public fullName: string = "Mightyena SF 66";
  public text: string = "Mightyena";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTimesPokemonInPlay(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
