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

export class SquawkabillyEx_247 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Squawk and Seize", powerType: PowerType.ABILITY, text: "Once during your first turn, you may discard your hand and draw 6 cards. You can't use more than 1 Squawk and Seize Ability during your turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Motivate", cost: [], damage: "20", text: "Attach up to 2 Basic Energy cards from your discard pile to 1 of your Benched Pokémon." }
  ];
  public set: string = "PAL";
  public name: string = "Squawkabilly ex";
  public fullName: string = "Squawkabilly ex PAL 247";
  public text: string = "Squawkabilly ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
