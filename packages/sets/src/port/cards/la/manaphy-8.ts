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

export class Manaphy_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Aqua Skin", powerType: PowerType.ABILITY, text: "When you attach a Water Energy card from your hand to Manaphy, remove 2 damage counters from Manaphy.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Chase Up", cost: [], damage: "", text: "Flip a coin. If heads, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward." },
      { name: "Fountain", cost: [], damage: "30", text: "You may attach up to 2 basic Water Energy cards from your hand to your Benched Pokémon in any way you like." }
  ];
  public set: string = "LA";
  public name: string = "Manaphy";
  public fullName: string = "Manaphy LA 8";
  public text: string = "Manaphy";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
