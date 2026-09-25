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

export class Chandelure_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lampent";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cursed Shadow", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may put 3 damage counters on your opponent's Pokémon in any way you like.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Eerie Glow", cost: [], damage: "50", text: "The Defending Pokémon is now Burned and Confused." }
  ];
  public set: string = "DEX";
  public name: string = "Chandelure";
  public fullName: string = "Chandelure DEX 101";
  public text: string = "Chandelure";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
