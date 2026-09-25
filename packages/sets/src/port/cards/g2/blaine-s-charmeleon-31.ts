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

export class BlaineSCharmeleon_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Blaine's Charmander";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fire Claws", cost: [], damage: "30", text: "" },
      { name: "Bonfire", cost: [], damage: "", text: "Flip 3 coins. For each heads, discard 1 Fire Energy card attached to Blaine's Charmeleon. If you can't discard Energy cards, this attack does nothing. This attack does 10 damage times the number of heads to each of your opponent's Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)" }
  ];
  public set: string = "G2";
  public name: string = "Blaine's Charmeleon";
  public fullName: string = "Blaine's Charmeleon G2 31";
  public text: string = "Blaine's Charmeleon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
