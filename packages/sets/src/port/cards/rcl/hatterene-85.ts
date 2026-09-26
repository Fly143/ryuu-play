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

export class Hatterene_85 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hattrem";
  public hp: number = 150;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mind Hat", powerType: PowerType.ABILITY, text: "Once during your turn, you may use this Ability. Each player discards a card from their hand. (Your opponent discards first.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dripping Grudge", cost: [], damage: "", text: "Put 1 damage counter on your opponent's Active Pokémon for each Pokémon in your discard pile." }
  ];
  public set: string = "RCL";
  public name: string = "Hatterene";
  public fullName: string = "Hatterene RCL 85";
  public text: string = "Hatterene";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
