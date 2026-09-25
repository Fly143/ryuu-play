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

export class LightNinetales_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vulpix";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Guiding Flame", cost: [], damage: "", text: "Put a Baby Pokémon or a Basic Pokémon card from your discard pile onto your Bench. (You can't use this attack if your Bench is full.)" },
      { name: "Fire Blast", cost: [], damage: "50", text: "Discard a Fire Energy card attached to Light Ninetales in order to use this attack." }
  ];
  public set: string = "N4";
  public name: string = "Light Ninetales";
  public fullName: string = "Light Ninetales N4 50";
  public text: string = "Light Ninetales";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverFromDiscardToBench");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
