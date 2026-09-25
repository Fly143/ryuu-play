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

export class Groudon_199 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Swelling Power", cost: [], damage: "", text: "Attach a Basic Fighting Energy card from your hand to 1 of your Pokémon." },
      { name: "Magma Purge", cost: [], damage: "60×", text: "Discard up to 4 Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way." }
  ];
  public set: string = "PAR";
  public name: string = "Groudon";
  public fullName: string = "Groudon PAR 199";
  public text: string = "Groudon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
