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

export class Haunter_93 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gastly";
  public hp: number = 80;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Spirit Return", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put a Supporter card from your opponent's discard pile into their hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mumble", cost: [], damage: "30", text: "" }
  ];
  public set: string = "MEW";
  public name: string = "Haunter";
  public fullName: string = "Haunter MEW 93";
  public text: string = "Haunter";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
