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

export class MegaChandelureEx_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lampent";
  public hp: number = 350;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Binding Flame", powerType: PowerType.ABILITY, text: "Your opponent's Active Pokémon's Retreat Cost is Colorless more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Phantom Maze", cost: [], damage: "130+", text: "This attack does 50 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." }
  ];
  public set: string = "PBL";
  public name: string = "Mega Chandelure ex";
  public fullName: string = "Mega Chandelure ex PBL 99";
  public text: string = "Mega Chandelure ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 0);
    }
    return state;
  }
}
