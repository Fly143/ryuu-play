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

export class Glalie_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snorunt";
  public hp: number = 120;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Damage Beat", cost: [], damage: "20×", text: "This attack does 20 damage for each damage counter on your opponent's Active Pokémon." },
      { name: "Crazy Headbutt", cost: [], damage: "140", text: "Discard an Energy from this Pokémon." }
  ];
  public set: string = "TWM";
  public name: string = "Glalie";
  public fullName: string = "Glalie TWM 52";
  public text: string = "Glalie";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
