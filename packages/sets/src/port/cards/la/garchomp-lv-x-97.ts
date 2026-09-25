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

export class GarchompLVX_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Garchomp";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dragon Pulse", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), when you put Garchomp LV.X from your hand onto your Active Garchomp, you may flip 3 coins. For each heads, put 1 damage counter on each of your opponent's Benched Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Restore", cost: [], damage: "", text: "Search your discard pile for a Pokémon (excluding Pokémon LV.X) and put it onto your Bench as a Basic Pokémon. Then, you may search your discard pile for up to 3 basic Energy cards and attach them to that Pokémon." }
  ];
  public set: string = "LA";
  public name: string = "Garchomp LV.X";
  public fullName: string = "Garchomp LV.X LA 97";
  public text: string = "Garchomp LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
