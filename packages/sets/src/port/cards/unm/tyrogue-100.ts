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

export class Tyrogue_100 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bratty Kick", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, put 3 damage counters on 1 of your opponent's Pokémon. If you use this Ability, your turn ends.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "UNM";
  public name: string = "Tyrogue";
  public fullName: string = "Tyrogue UNM 100";
  public text: string = "Tyrogue";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
