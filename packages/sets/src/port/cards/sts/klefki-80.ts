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

export class Klefki_80 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wonder Lock", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may discard all cards attached to this Pokémon and attach it to 1 of your Pokémon as a Pokémon Tool card. Prevent any damage done to the Pokémon this card is attached to by attacks from your opponent's Mega Evolution Pokémon. If this card is attached to a Pokémon, discard this card at the end of your opponent's turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fairy Wind", cost: [], damage: "30", text: "" }
  ];
  public set: string = "STS";
  public name: string = "Klefki";
  public fullName: string = "Klefki STS 80";
  public text: string = "Klefki";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
