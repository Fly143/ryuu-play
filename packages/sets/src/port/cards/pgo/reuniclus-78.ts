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

export class Reuniclus_78 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Duosion";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Persistent Cells", powerType: PowerType.ABILITY, text: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, put it into your hand instead of the discard pile. (Discard all attached cards.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cell Fork", cost: [], damage: "60", text: "Choose 2 of your opponent's Benched Pokémon and put 3 damage counters on each of them." }
  ];
  public set: string = "PGO";
  public name: string = "Reuniclus";
  public fullName: string = "Reuniclus PGO 78";
  public text: string = "Reuniclus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
