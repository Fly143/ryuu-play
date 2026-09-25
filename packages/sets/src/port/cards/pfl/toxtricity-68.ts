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

export class Toxtricity_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Toxel";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sinister Surge", powerType: PowerType.ABILITY, text: "Once during your turn, you may use this Ability. Search your deck for a Basic Darkness Energy card and attach it to 1 of your Benched Darkness Pokémon. Then, shuffle your deck. If you attached Energy to a Pokémon in this way, place 2 damage counters on that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gentle Slap", cost: [], damage: "100", text: "" }
  ];
  public set: string = "PFL";
  public name: string = "Toxtricity";
  public fullName: string = "Toxtricity PFL 68";
  public text: string = "Toxtricity";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* searchEnergyToSelf */ state;
    }
    return state;
  }
}
