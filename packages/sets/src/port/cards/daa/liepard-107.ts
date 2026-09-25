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

export class Liepard_107 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Purrloin";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Limber", powerType: PowerType.ABILITY, text: "This Pokémon can't be Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slashing Claw", cost: [], damage: "90", text: "" }
  ];
  public set: string = "DAA";
  public name: string = "Liepard";
  public fullName: string = "Liepard DAA 107";
  public text: string = "Liepard";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
