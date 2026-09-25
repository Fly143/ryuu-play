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

export class Kingdra_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Seadra";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dragon Curse", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Kingdra is your Active Pokémon, you may put 2 damage counters on 1 of your opponent's Pokémon with δ on its card. This power can't be used if Kingdra is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Extra Flame", cost: [], damage: "30+", text: "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 30 more damage." },
      { name: "Heat Blast", cost: [], damage: "80", text: "" }
  ];
  public set: string = "HP";
  public name: string = "Kingdra δ";
  public fullName: string = "Kingdra δ HP 10";
  public text: string = "Kingdra δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
