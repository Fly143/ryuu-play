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

export class Starmie_121 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Staryu";
  public hp: number = 90;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mysterious Comet", powerType: PowerType.ABILITY, text: "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon. If you placed any damage counters in this way, discard this Pokémon and all attached cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Speed Attack", cost: [], damage: "50", text: "" }
  ];
  public set: string = "MEW";
  public name: string = "Starmie";
  public fullName: string = "Starmie MEW 121";
  public text: string = "Starmie";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
