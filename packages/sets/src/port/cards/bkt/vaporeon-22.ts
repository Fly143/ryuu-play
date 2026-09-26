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

export class Vaporeon_222 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Aqua Effect", powerType: PowerType.ABILITY, text: "Each of your Stage 1 Pokémon in play is now a Water Pokémon in addition to its existing types.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hydro Splash", cost: [], damage: "70", text: "" }
  ];
  public set: string = "BKT";
  public name: string = "Vaporeon";
  public fullName: string = "Vaporeon BKT 22";
  public text: string = "Vaporeon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
