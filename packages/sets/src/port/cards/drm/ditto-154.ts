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

export class Ditto_154 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Almighty Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put any Stage 1 card from your hand onto this Pokémon to evolve it. You can't use this Ability during your first turn or the turn this Pokémon was put into play.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "DRM";
  public name: string = "Ditto ◇";
  public fullName: string = "Ditto ◇ DRM 154";
  public text: string = "Ditto ◇";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
