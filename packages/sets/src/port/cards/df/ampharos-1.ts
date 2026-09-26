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

export class Ampharos_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Flaaffy";
  public hp: number = 120;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Holon Veil", powerType: PowerType.ABILITY, text: "Treat each Basic Pokémon and Evolution card in your deck, in your discard pile, in your hand, and in play as a Pokémon that has δ on its card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Delta Circle", cost: [], damage: "20+", text: "Does 20 damage plus 10 more damage for each Pokémon you have in play that has δ on its card." }
  ];
  public set: string = "DF";
  public name: string = "Ampharos δ";
  public fullName: string = "Ampharos δ DF 1";
  public text: string = "Ampharos δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}
