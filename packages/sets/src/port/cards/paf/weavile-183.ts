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

export class Weavile_183 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sneasel";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Assaulting Hunt", powerType: PowerType.ABILITY, text: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may switch in 1 of your opponent's Benched Basic Pokémon to the Active Spot.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slashing Claw", cost: [], damage: "70", text: "" }
  ];
  public set: string = "PAF";
  public name: string = "Weavile";
  public fullName: string = "Weavile PAF 183";
  public text: string = "Weavile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
