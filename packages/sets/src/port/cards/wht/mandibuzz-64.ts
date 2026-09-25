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

export class Mandibuzz_64 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vullaby";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Look for Prey", powerType: PowerType.ABILITY, text: "Once during your turn, you may use this Ability. Your opponent reveals their hand, and you put a Basic Pokémon with 70 HP or less that you find there onto your opponent's Bench.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cutting Wind", cost: [], damage: "90", text: "" }
  ];
  public set: string = "WHT";
  public name: string = "Mandibuzz";
  public fullName: string = "Mandibuzz WHT 64";
  public text: string = "Mandibuzz";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
