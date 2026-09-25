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

export class KrookodileEXXY25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Second Bite", cost: [], damage: "40+", text: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon." },
      { name: "Megaton Fang", cost: [], damage: "130", text: "Discard a card from your hand. If you can't discard a card, this attack does nothing." }
  ];
  public set: string = "PR-XY";
  public name: string = "Krookodile-EX";
  public fullName: string = "Krookodile-EX PR-XY XY25";
  public text: string = "Krookodile-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerDefendingDamageCounter(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
