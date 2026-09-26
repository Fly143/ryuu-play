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

export class RadiantAlakazam_59 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Painful Spoons", powerType: PowerType.ABILITY, text: "Once during your turn, you may move up to 2 damage counters from 1 of your opponent's Pokémon to another of their Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mind Ruler", cost: [], damage: "20×", text: "This attack does 20 damage for each card in your opponent's hand." }
  ];
  public set: string = "PGO";
  public name: string = "Radiant Alakazam";
  public fullName: string = "Radiant Alakazam PGO 59";
  public text: string = "Radiant Alakazam";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
