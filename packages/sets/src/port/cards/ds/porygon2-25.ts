import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Porygon2_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Porygon";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Backup", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if you have less than 6 cards in your hand, you may draw cards until you have 6 cards in your hand. This power can't be used if Porygon2 is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Machine Burst", cost: [], damage: "30", text: "If Porygon2 has a Technical Machine card attached to it, the Defending Pokémon is now Asleep and Burned." }
  ];
  public set: string = "DS";
  public name: string = "Porygon2";
  public fullName: string = "Porygon2 DS 25";
  public text: string = "Porygon2";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* searchAnyToHand:1 */ state;
    }
    return state;
  }
}
