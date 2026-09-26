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

export class RaichuLVX_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Raichu";
  public hp: number = 110;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Link Lightning", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Raichu LV.X onto Raichu and use Voltage Shoot, you may use another attack of Raichu afterward. This power can't be used if Raichu is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Voltage Shoot", cost: [], damage: "", text: "Discard 2 Lightning Energy cards from your hand and choose 1 of your opponent's Pokémon. This attack does 80 to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "PL";
  public name: string = "Raichu LV.X";
  public fullName: string = "Raichu LV.X PL 99";
  public text: string = "Raichu LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
