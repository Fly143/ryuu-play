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

export class Lunatone_92 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "New Moon", powerType: PowerType.ABILITY, text: "If you have Solrock in play, prevent all effects of any Stadium done to your Pokémon in play.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Moon Press", cost: [], damage: "100", text: "" }
  ];
  public set: string = "OBF";
  public name: string = "Lunatone";
  public fullName: string = "Lunatone OBF 92";
  public text: string = "Lunatone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
