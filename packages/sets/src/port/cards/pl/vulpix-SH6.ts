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

export class VulpixSH6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Find Wildfire", cost: [], damage: "", text: "Search your deck for up to 2 Fire Energy cards, show them to your opponent, and put them in your hand. Shuffle your deck afterward." },
      { name: "Brushfire", cost: [], damage: "10", text: "Does 10 damage to each of your opponent's Benched Grass Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Inflame", cost: [], damage: "30", text: "Discard a Fire Energy card from your hand. (If you can't discard a card from your hand, this attack does nothing.)" }
  ];
  public set: string = "PL";
  public name: string = "Vulpix";
  public fullName: string = "Vulpix PL SH6";
  public text: string = "Vulpix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
