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

export class BraixenTG01 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Fennekin";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Combustion", cost: [], damage: "30", text: "" },
      { name: "Flare Parade", cost: [], damage: "60×", text: "This attack does 60 damage for each Serena card in your discard pile." }
  ];
  public set: string = "SIT";
  public name: string = "Braixen";
  public fullName: string = "Braixen SIT TG01";
  public text: string = "Braixen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "damageTimesDiscardPokemon:60");
    }
    return state;
  }
}
