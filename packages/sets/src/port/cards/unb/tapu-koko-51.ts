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

export class TapuKoko_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dance of the Ancients", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may choose 2 of your Benched Pokémon and attach a Lightning Energy card from your discard pile to each of them. If you do, discard all cards from this Pokémon and put it in the Lost Zone.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mach Bolt", cost: [], damage: "120", text: "" }
  ];
  public set: string = "UNB";
  public name: string = "Tapu Koko ◇";
  public fullName: string = "Tapu Koko ◇ UNB 51";
  public text: string = "Tapu Koko ◇";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
