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

export class MowRotomRT4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mow Shift", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may use this power. Mow Rotom's type is Grass until the end of your turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slash", cost: [], damage: "20", text: "" },
      { name: "Mow Down", cost: [], damage: "50", text: "Flip a coin. If heads, discard an Energy card attached to each of your opponent's Pokémon." }
  ];
  public set: string = "RR";
  public name: string = "Mow Rotom";
  public fullName: string = "Mow Rotom RR RT4";
  public text: string = "Mow Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
