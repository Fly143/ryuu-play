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

export class HopSDubwool_136 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hop's Wooloo";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Defiant Horn", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch in 1 of your opponent's Benched Pokémon to the Active Spot.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Headbutt", cost: [], damage: "80", text: "" }
  ];
  public set: string = "JTG";
  public name: string = "Hop's Dubwool";
  public fullName: string = "Hop's Dubwool JTG 136";
  public text: string = "Hop's Dubwool";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
