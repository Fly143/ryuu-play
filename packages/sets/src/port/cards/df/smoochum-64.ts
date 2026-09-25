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

export class Smoochum_64 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Jynx from your hand onto Smoochum (this counts as evolving Smoochum) and remove all damage counters from Smoochum.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Alluring Kiss", cost: [], damage: "", text: "Search your deck for a Basic Pokémon and basic Energy card, show them to your opponent, and put them into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "DF";
  public name: string = "Smoochum δ";
  public fullName: string = "Smoochum δ DF 64";
  public text: string = "Smoochum δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
