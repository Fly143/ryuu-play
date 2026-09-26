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

export class Avalugg_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bergmite";
  public hp: number = 140;
    public height?: number = 2.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Frozen Ground", cost: [], damage: "80", text: "Your opponent can't play any Stadium cards from their hand during their next turn." },
      { name: "Skull Bash", cost: [], damage: "100", text: "" }
  ];
  public set: string = "FLI";
  public name: string = "Avalugg";
  public fullName: string = "Avalugg FLI 30";
  public text: string = "Avalugg";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
