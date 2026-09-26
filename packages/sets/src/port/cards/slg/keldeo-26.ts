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

export class Keldeo_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bail Out", cost: [], damage: "", text: "Put a Water Pokémon from your discard pile into your hand." },
      { name: "Resolute Blade", cost: [], damage: "20+", text: "This attack does 20 more damage for each of your opponent's Benched Pokémon." }
  ];
  public set: string = "SLG";
  public name: string = "Keldeo";
  public fullName: string = "Keldeo SLG 26";
  public text: string = "Keldeo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverFromDiscard");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerOpponentBench(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
