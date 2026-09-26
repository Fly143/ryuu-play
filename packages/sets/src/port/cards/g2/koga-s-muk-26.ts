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

export class KogaSMuk_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Koga's Grimer";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Drain", powerType: PowerType.ABILITY, text: "If an opponent's attack does damage to Koga's Muk (even if Koga's Muk is Knocked Out), flip a coin. If heads and if it has any, choose 1 Energy card attached to the attacking Pokémon and discard it. This power can't be used if Koga's Muk is already Asleep, Confused, or Paralyzed when your opponent attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sludge Whirlpool", cost: [], damage: "40", text: "" }
  ];
  public set: string = "G2";
  public name: string = "Koga's Muk";
  public fullName: string = "Koga's Muk G2 26";
  public text: string = "Koga's Muk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
