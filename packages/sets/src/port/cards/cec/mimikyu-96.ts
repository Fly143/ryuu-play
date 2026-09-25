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

export class Mimikyu_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Impersonation", cost: [], damage: "", text: "Discard a Supporter card from your hand. If you do, use the effect of that card as the effect of this attack." },
      { name: "Mischievous Hands", cost: [], damage: "", text: "Choose 2 of your opponent's Pokémon and put 2 damage counters on each of them." }
  ];
  public set: string = "CEC";
  public name: string = "Mimikyu";
  public fullName: string = "Mimikyu CEC 96";
  public text: string = "Mimikyu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
