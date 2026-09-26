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

export class Honchkrow_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Murkrow";
  public hp: number = 90;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Genes", powerType: PowerType.ABILITY, text: "As long as Honchkrow has the Energy necessary to use its attack, each of your Murkrow can use Honchkrow's attack as its own without the Energy necessary to use that attack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dark Wing Flaps", cost: [], damage: "50", text: "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck." }
  ];
  public set: string = "MT";
  public name: string = "Honchkrow";
  public fullName: string = "Honchkrow MT 10";
  public text: string = "Honchkrow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
