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

export class Lapras_36 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 2.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mermaid's Call", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put a Misty's Favor card from your discard pile into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Surf", cost: [], damage: "90", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Lapras";
  public fullName: string = "Lapras CEC 36";
  public text: string = "Lapras";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
