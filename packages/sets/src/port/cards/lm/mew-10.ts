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

export class Mew_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Type Change", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may choose 1 of the Defending Pokémon. Mew is the same type as that Pokémon (all if that Pokémon is more than 1 type) until the end of your turn. This power can't be used if Mew is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Link Blast", cost: [], damage: "50", text: "If Mew and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 20 instead of 50." }
  ];
  public set: string = "LM";
  public name: string = "Mew";
  public fullName: string = "Mew LM 10";
  public text: string = "Mew";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
