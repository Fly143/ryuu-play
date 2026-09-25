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

export class FroslassRC8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snorunt";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Drag Along", powerType: PowerType.ABILITY, text: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, flip a coin. If heads, the Attacking Pokémon is Knocked Out.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Snowy Drop", cost: [], damage: "", text: "Put 4 damage counters on your opponent's Pokémon in any way you like." }
  ];
  public set: string = "GEN";
  public name: string = "Froslass";
  public fullName: string = "Froslass GEN RC8";
  public text: string = "Froslass";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
