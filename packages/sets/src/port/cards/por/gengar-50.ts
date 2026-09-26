import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Gengar_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Haunter";
  public hp: number = 130;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Infinite Shadow", powerType: PowerType.ABILITY, text: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, put it into your hand instead of the discard pile. (Discard all attached cards.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mind Jack", cost: [], damage: "10+", text: "This attack does 30 more damage for each of your opponent's Benched Pokémon." }
  ];
  public set: string = "POR";
  public name: string = "Gengar";
  public fullName: string = "Gengar POR 50";
  public text: string = "Gengar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerOpponentBench(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
