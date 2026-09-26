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

export class Spiritomb_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Curse Breath", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Spiritomb from your hand onto your Bench, you may put 1 damage counter on all Pokémon that already have any damage counters on them (both yours and your opponent's). You can't use more than 1 Curse Breath Poké-Power each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Transfer Pain", cost: [], damage: "", text: "Move 1 damage counter from 1 of your Pokémon to 1 of your opponent's Pokémon." }
  ];
  public set: string = "SF";
  public name: string = "Spiritomb";
  public fullName: string = "Spiritomb SF 16";
  public text: string = "Spiritomb";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "moveDamageCounters");
    }
    return state;
  }
}
