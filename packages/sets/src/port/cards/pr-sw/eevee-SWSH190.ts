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

export class EeveeSWSH190 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Be Prepared", cost: [], damage: "", text: "Attach a basic Energy card from your hand to this Pokémon." },
      { name: "Bite", cost: [], damage: "30", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Eevee";
  public fullName: string = "Eevee PR-SW SWSH190";
  public text: string = "Eevee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
