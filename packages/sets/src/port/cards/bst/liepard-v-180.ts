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

export class LiepardV_180 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hidden Claw", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Pokémon Tool from a Pokémon (yours or your opponent's).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shadow Ripper", cost: [], damage: "110", text: "You may put this Pokémon and all attached cards into your hand." }
  ];
  public set: string = "BST";
  public name: string = "Liepard V";
  public fullName: string = "Liepard V BST 180";
  public text: string = "Liepard V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
