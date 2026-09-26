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

export class RoaringMoonEx_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Frenzied Gouging", cost: [], damage: "", text: "Knock Out your opponent's Active Pokémon. If your opponent's Active Pokémon is Knocked Out in this way, this Pokémon does 200 damage to itself." },
      { name: "Calamity Storm", cost: [], damage: "100+", text: "You may discard a Stadium in play. If you do, this attack does 120 more damage." }
  ];
  public set: string = "PR-SV";
  public name: string = "Roaring Moon ex";
  public fullName: string = "Roaring Moon ex PR-SV 67";
  public text: string = "Roaring Moon ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 200);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
