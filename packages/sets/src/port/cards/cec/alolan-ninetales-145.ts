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

export class AlolanNinetales_145 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alolan Vulpix";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rubbish Blizzard", cost: [], damage: "10×", text: "This attack does 10 damage for each Pokémon Tool card in your discard pile." }
  ];
  public set: string = "CEC";
  public name: string = "Alolan Ninetales";
  public fullName: string = "Alolan Ninetales CEC 145";
  public text: string = "Alolan Ninetales";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* damageTimesDiscardPokemon:10 */ state;
    }
    return state;
  }
}
