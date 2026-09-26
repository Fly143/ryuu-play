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

export class InteleonSWSH113 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drizzile";
  public hp: number = 150;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Quick Shooting", powerType: PowerType.ABILITY, text: "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Waterfall", cost: [], damage: "70", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Inteleon";
  public fullName: string = "Inteleon PR-SW SWSH113";
  public text: string = "Inteleon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
