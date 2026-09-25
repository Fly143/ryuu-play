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

export class ZeraoraVSTARGG43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zeraora V";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Crushing Beat", cost: [], damage: "190", text: "You may discard a Stadium in play." },
      { name: "Lightning Storm Star", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon 4 times. (You can choose the same Pokémon more than once.) For each time you chose a Pokémon, do 60 damage to it. This damage isn't affected by Weakness or Resistance. (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "CRZ";
  public name: string = "Zeraora VSTAR";
  public fullName: string = "Zeraora VSTAR CRZ GG43";
  public text: string = "Zeraora VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
