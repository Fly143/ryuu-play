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

export class EeveeEx_75 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 200;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rainbow DNA", powerType: PowerType.ABILITY, text: "This Pokémon can evolve into any Pokémon ex that evolves from Eevee if you play it from your hand onto this Pokémon. (This Pokémon can't evolve during your first turn or the turn you play it.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Coruscating Quartz", cost: [], damage: "200", text: "" }
  ];
  public set: string = "PRE";
  public name: string = "Eevee ex";
  public fullName: string = "Eevee ex PRE 75";
  public text: string = "Eevee ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
