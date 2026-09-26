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

export class LtSurgeSElectabuzz_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Charge", cost: [], damage: "", text: "Take up to 2 Lightning Energy cards from your discard pile and attach them to Lt. Surge's Electabuzz." },
      { name: "Electric Current", cost: [], damage: "20", text: "Take 1 Lightning Energy card attached to Lt. Surge's Electabuzz and attach it to 1 of your Benched Pokémon. If you have no Benched Pokémon, discard that Energy card." }
  ];
  public set: string = "G1";
  public name: string = "Lt. Surge's Electabuzz";
  public fullName: string = "Lt. Surge's Electabuzz G1 27";
  public text: string = "Lt. Surge's Electabuzz";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
