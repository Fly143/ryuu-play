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

export class BlisseyEx_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chansey ex";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Blissful Support", powerType: PowerType.ABILITY, text: "Once during your turn, when you play Blissey ex from your hand to evolve 1 of your Pokémon, you may discard all Energy cards attached to any number of your Pokémon and remove all damage counters from those Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Absorption", cost: [], damage: "", text: "Attach up to 3 Energy cards from your discard pile to Blissey ex." },
      { name: "Rollout", cost: [], damage: "60", text: "" }
  ];
  public set: string = "UF";
  public name: string = "Blissey ex";
  public fullName: string = "Blissey ex UF 101";
  public text: string = "Blissey ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
