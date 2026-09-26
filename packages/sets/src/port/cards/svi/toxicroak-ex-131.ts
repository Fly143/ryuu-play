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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ToxicroakEx_131 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Croagunk";
  public hp: number = 250;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Nasty Plot", cost: [], damage: "", text: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck." },
      { name: "Toxic Ripper", cost: [], damage: "120", text: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 6 damage counters on that Pokémon instead of 1." }
  ];
  public set: string = "SVI";
  public name: string = "Toxicroak ex";
  public fullName: string = "Toxicroak ex SVI 131";
  public text: string = "Toxicroak ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:2");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
