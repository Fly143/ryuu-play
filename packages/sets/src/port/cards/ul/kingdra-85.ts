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

export class Kingdra_85 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Seadra";
  public hp: number = 130;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Spray Splash", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put 1 damage counter on 1 of your opponent's Pokémon. This power can't be used if Kingdra is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dragon Steam", cost: [], damage: "60", text: "If your opponent has any Fire Pokémon in play, this attack's base damage is 20 instead of 60." }
  ];
  public set: string = "UL";
  public name: string = "Kingdra";
  public fullName: string = "Kingdra UL 85";
  public text: string = "Kingdra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
