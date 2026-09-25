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

export class LightPiloswine_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swinub";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fluffy Wool", powerType: PowerType.ABILITY, text: "During your opponent's turn, if Light Piloswine is your Active Pokémon and is damaged by your opponent's attack (even if it's Knocked Out), flip a coin. If heads, the attacking Pokémon is now Asleep. This power stops working if Light Piloswine is already Asleep, Confused, or Paralyzed when your opponent attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Knock Over", cost: [], damage: "30", text: "If there is a Stadium card in play, you may discard it." }
  ];
  public set: string = "N4";
  public name: string = "Light Piloswine";
  public fullName: string = "Light Piloswine N4 26";
  public text: string = "Light Piloswine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
