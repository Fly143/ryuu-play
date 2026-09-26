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

export class Barbaracle_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Binacle";
  public hp: number = 130;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stone Arms", powerType: PowerType.ABILITY, text: "Once during your turn, you may use this Ability. Attach a Basic Fighting Energy card from your hand to 1 of your Fighting Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hammer In", cost: [], damage: "80", text: "" }
  ];
  public set: string = "POR";
  public name: string = "Barbaracle";
  public fullName: string = "Barbaracle POR 43";
  public text: string = "Barbaracle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
