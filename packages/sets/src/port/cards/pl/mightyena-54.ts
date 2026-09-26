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

export class Mightyena_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poochyena";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cold Feet", powerType: PowerType.ABILITY, text: "If Mightyena is affected by a Special Condition, ignore all Energy necessary to use Mightyena's attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Collude", cost: [], damage: "20+", text: "If you played any Supporter card from your hand during this turn, this attack does 20 damage plus 20 more damage." },
      { name: "Desperate Attack", cost: [], damage: "50+", text: "If Mightyena has less Energy attached to it than the Defending Pokémon, this attack does 50 damage plus 30 more damage." }
  ];
  public set: string = "PL";
  public name: string = "Mightyena";
  public fullName: string = "Mightyena PL 54";
  public text: string = "Mightyena";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
