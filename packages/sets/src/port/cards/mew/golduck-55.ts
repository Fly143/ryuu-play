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

export class Golduck_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Psyduck";
  public hp: number = 110;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Aquatic Rescue", cost: [], damage: "", text: "Put up to 4 Pokémon from your discard pile into your hand." },
      { name: "Super Splash", cost: [], damage: "120", text: "" }
  ];
  public set: string = "MEW";
  public name: string = "Golduck";
  public fullName: string = "Golduck MEW 55";
  public text: string = "Golduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverFromDiscard");
    }
    return state;
  }
}
