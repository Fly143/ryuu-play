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

export class UnownI_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "[Increase]", powerType: PowerType.ABILITY, text: "When you play Unown [I] from your hand, you may search your deck for a card with Unown in its name and put it onto your Bench. Shuffle your deck afterward. You can't use this power if your Bench is full.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "10", text: "" }
  ];
  public set: string = "N2";
  public name: string = "Unown [I]";
  public fullName: string = "Unown [I] N2 68";
  public text: string = "Unown [I]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
