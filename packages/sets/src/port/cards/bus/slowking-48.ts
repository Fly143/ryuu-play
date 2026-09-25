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

export class Slowking_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slowpoke";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Drift Ashore", cost: [], damage: "", text: "Search your deck for a card and put it into your hand. Then, shuffle your deck." },
      { name: "Unarmed", cost: [], damage: "110", text: "If you have no cards in your hand, ignore all Energy in this attack's cost." }
  ];
  public set: string = "BUS";
  public name: string = "Slowking";
  public fullName: string = "Slowking BUS 48";
  public text: string = "Slowking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchTrainerToHand:1");
    }
    return state;
  }
}
