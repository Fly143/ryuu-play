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

export class Pelipper_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wingull";
  public hp: number = 120;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hearsay", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may choose 1: put a Supporter card from your discard pile into your hand; or search your deck for a Supporter card, reveal it, put it into your hand, and then shuffle your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wing Attack", cost: [], damage: "90", text: "" }
  ];
  public set: string = "PR-SV";
  public name: string = "Pelipper";
  public fullName: string = "Pelipper PR-SV 22";
  public text: string = "Pelipper";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
