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

export class FlabB_83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Evolutionary Advantage", powerType: PowerType.ABILITY, text: "If you go second, this Pokémon can evolve during your first turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tackle", cost: [], damage: "10", text: "" }
  ];
  public set: string = "FLI";
  public name: string = "Flabébé";
  public fullName: string = "Flabébé FLI 83";
  public text: string = "Flabébé";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
