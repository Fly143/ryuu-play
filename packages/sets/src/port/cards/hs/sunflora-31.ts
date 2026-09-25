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

export class Sunflora_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sunkern";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sunshine Grace", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for a Grass Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Sunflora is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Blade Arms", cost: [], damage: "40", text: "" }
  ];
  public set: string = "HS";
  public name: string = "Sunflora";
  public fullName: string = "Sunflora HS 31";
  public text: string = "Sunflora";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* searchAnyToHand:1 */ state;
    }
    return state;
  }
}
