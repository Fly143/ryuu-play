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

export class Sharpedo_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Carvanha";
  public hp: number = 70;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Brush Aside", cost: [], damage: "30", text: "If Sharpedo has any Holon Energy cards attached to it, choose 1 card from your opponent's hand without looking and discard it." },
      { name: "Swift Turn", cost: [], damage: "50+", text: "If the Defending Pokémon has Fighting Resistance, this attack does 50 damage plus 30 more damage." }
  ];
  public set: string = "HP";
  public name: string = "Sharpedo δ";
  public fullName: string = "Sharpedo δ HP 53";
  public text: string = "Sharpedo δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
