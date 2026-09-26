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

export class Ludicolo_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lombre";
  public hp: number = 100;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Overzealous", powerType: PowerType.ABILITY, text: "If your opponent has any Pokémon-ex in play, each of Ludicolo's attacks does 30 more damage to the Defending Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Knock Off", cost: [], damage: "30", text: "Choose 1 card from your opponent's hand without looking and discard it." },
      { name: "Fire Punch", cost: [], damage: "60", text: "" }
  ];
  public set: string = "CG";
  public name: string = "Ludicolo δ";
  public fullName: string = "Ludicolo δ CG 6";
  public text: string = "Ludicolo δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
