import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class DarkGolbat_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zubat";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sneak Attack", powerType: PowerType.ABILITY, text: "When you play Dark Golbat from your hand, you may choose 1 of your opponent's Pokémon. If you do, Dark Golbat does 10 damage to that Pokémon. Apply Weakness and Resistance.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flitter", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)" }
  ];
  public set: string = "TR";
  public name: string = "Dark Golbat";
  public fullName: string = "Dark Golbat TR 7";
  public text: string = "Dark Golbat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* damageOneBench:10 */ state;
    }
    return state;
  }
}
