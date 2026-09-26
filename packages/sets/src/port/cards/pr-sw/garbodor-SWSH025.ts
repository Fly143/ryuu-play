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

export class GarbodorSWSH025 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Trubbish";
  public hp: number = 120;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Poisonous Puddle", powerType: PowerType.ABILITY, text: "Once during your turn, if a Stadium is in play, you may make your opponent's Active Pokémon Poisoned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sludge Bomb", cost: [], damage: "80", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Garbodor";
  public fullName: string = "Garbodor PR-SW SWSH025";
  public text: string = "Garbodor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
