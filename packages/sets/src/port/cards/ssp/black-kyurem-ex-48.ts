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

export class BlackKyuremEx_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
    public height?: number = 3.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ice Age", cost: [], damage: "90", text: "If your opponent's Active Pokémon is a Dragon Pokémon, it is now Paralyzed." },
      { name: "Black Frost", cost: [], damage: "250", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "SSP";
  public name: string = "Black Kyurem ex";
  public fullName: string = "Black Kyurem ex SSP 48";
  public text: string = "Black Kyurem ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
