import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class MegaMawileEx_162 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gobble Down", cost: [], damage: "80×", text: "This attack does 80 damage for each Prize card you have taken." },
      { name: "Huge Bite", cost: [], damage: "260", text: "If your opponent's Active Pokémon already has any damage counters on it, this attack's base damage is 30." }
  ];
  public set: string = "MEG";
  public name: string = "Mega Mawile ex";
  public fullName: string = "Mega Mawile ex MEG 162";
  public text: string = "Mega Mawile ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
