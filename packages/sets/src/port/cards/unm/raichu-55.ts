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

export class Raichu_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pikachu";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Never Give Up", cost: [], damage: "", text: "You can use this attack only if you have at least 3 more Prize cards remaining than your opponent. Attach all Lightning Energy cards from your discard pile to your Pokémon in any way you like." },
      { name: "Head Bolt", cost: [], damage: "110", text: "" }
  ];
  public set: string = "UNM";
  public name: string = "Raichu";
  public fullName: string = "Raichu UNM 55";
  public text: string = "Raichu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
