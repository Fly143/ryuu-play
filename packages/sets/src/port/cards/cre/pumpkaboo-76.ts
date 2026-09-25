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

export class Pumpkaboo_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Pumpkin Pit", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Stadium in play.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Stampede", cost: [], damage: "20", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Pumpkaboo";
  public fullName: string = "Pumpkaboo CRE 76";
  public text: string = "Pumpkaboo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
