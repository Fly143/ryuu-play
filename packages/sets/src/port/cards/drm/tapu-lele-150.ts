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

export class TapuLele_150 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Charmed Charm", powerType: PowerType.ABILITY, text: "Whenever you attach a Pokémon Tool card that has \"Fairy Charm\" in its name from your hand to this Pokémon during your turn, you may leave your opponent's Active Pokémon Confused.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Magical Shot", cost: [], damage: "70", text: "" }
  ];
  public set: string = "DRM";
  public name: string = "Tapu Lele";
  public fullName: string = "Tapu Lele DRM 150";
  public text: string = "Tapu Lele";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
