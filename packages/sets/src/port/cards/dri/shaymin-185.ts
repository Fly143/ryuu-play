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

export class Shaymin_185 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flower Curtain", powerType: PowerType.ABILITY, text: "Prevent all damage done to your Benched Pokémon that don't have a Rule Box by attacks from your opponent's Pokémon. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Smash Kick", cost: [], damage: "30", text: "" }
  ];
  public set: string = "DRI";
  public name: string = "Shaymin";
  public fullName: string = "Shaymin DRI 185";
  public text: string = "Shaymin";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
