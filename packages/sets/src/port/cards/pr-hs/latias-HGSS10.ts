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

export class LatiasHGSS10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Assist", cost: [], damage: "10", text: "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon." },
      { name: "Infinite Wind", cost: [], damage: "40", text: "If Latios is on your Bench, remove 2 damage counters from each of your Benched Pokémon." }
  ];
  public set: string = "PR-HS";
  public name: string = "Latias";
  public fullName: string = "Latias PR-HS HGSS10";
  public text: string = "Latias";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
