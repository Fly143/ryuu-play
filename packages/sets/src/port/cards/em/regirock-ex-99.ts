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

export class RegirockEx_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mend", cost: [], damage: "", text: "Search your discard pile for a Fighting Energy card and attach it to Regirock ex. If you do, remove 1 damage counter from Regirock ex." },
      { name: "Metal Crush", cost: [], damage: "40+", text: "If Registeel ex is in play, this attack does 40 damage plus 20 more damage." }
  ];
  public set: string = "EM";
  public name: string = "Regirock ex";
  public fullName: string = "Regirock ex EM 99";
  public text: string = "Regirock ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
