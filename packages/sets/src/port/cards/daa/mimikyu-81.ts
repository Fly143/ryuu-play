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

export class Mimikyu_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Heal Jamming", powerType: PowerType.ABILITY, text: "Your opponent's Benched Pokémon can't be healed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Claw Slash", cost: [], damage: "30", text: "" }
  ];
  public set: string = "DAA";
  public name: string = "Mimikyu";
  public fullName: string = "Mimikyu DAA 81";
  public text: string = "Mimikyu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
