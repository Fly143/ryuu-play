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

export class Croconaw_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Totodile";
  public hp: number = 90;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Plunge", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may move all Energy from your Active Pokémon to this Pokémon. If you do, switch it with your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bite", cost: [], damage: "60", text: "" }
  ];
  public set: string = "SLG";
  public name: string = "Croconaw";
  public fullName: string = "Croconaw SLG 19";
  public text: string = "Croconaw";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
