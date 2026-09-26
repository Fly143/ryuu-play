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

export class Drifblim_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drifloon";
  public hp: number = 100;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shadow Steal", cost: [], damage: "50×", text: "Does 50 damage times the number of Special Energy cards in your opponent's discard pile." },
      { name: "Plentiful Placement", cost: [], damage: "", text: "Put 4 damage counters on 1 of your opponent's Pokémon." }
  ];
  public set: string = "BCR";
  public name: string = "Drifblim";
  public fullName: string = "Drifblim BCR 51";
  public text: string = "Drifblim";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
