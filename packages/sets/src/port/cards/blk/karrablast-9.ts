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

export class Karrablast_93 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stimulated Evolution", powerType: PowerType.ABILITY, text: "If you have Shelmet in play, this Pokémon can evolve during your first turn or the turn you play it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Horn Attack", cost: [], damage: "10", text: "" }
  ];
  public set: string = "BLK";
  public name: string = "Karrablast";
  public fullName: string = "Karrablast BLK 9";
  public text: string = "Karrablast";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
