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

export class Zorua_902 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Whiny Voice", cost: [], damage: "", text: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck." },
      { name: "Dark Edge", cost: [], damage: "30", text: "Discard an Energy attached to this Pokémon." }
  ];
  public set: string = "BKP";
  public name: string = "Zorua";
  public fullName: string = "Zorua BKP 90";
  public text: string = "Zorua";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
