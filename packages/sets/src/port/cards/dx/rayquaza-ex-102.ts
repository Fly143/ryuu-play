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

export class RayquazaEx_102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dragon Boost", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Rayquaza ex from your hand onto your Bench, you may move any number of basic Energy cards attached to your Pokémon to Rayquaza ex.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spiral Blast", cost: [], damage: "20×", text: "Does 20 damage for each basic Energy card attached to Rayquaza ex." }
  ];
  public set: string = "DX";
  public name: string = "Rayquaza ex";
  public fullName: string = "Rayquaza ex DX 102";
  public text: string = "Rayquaza ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
