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

export class Toxapex_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mareanie";
  public hp: number = 110;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Toxic Spikes", powerType: PowerType.ABILITY, text: "Whenever your opponent's Active Pokémon retreats, their new Active Pokémon is Poisoned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Venoshock", cost: [], damage: "50+", text: "If your opponent's Active Pokémon is Poisoned, this attack does 50 more damage." }
  ];
  public set: string = "SUM";
  public name: string = "Toxapex";
  public fullName: string = "Toxapex SUM 63";
  public text: string = "Toxapex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 1);
    }
    return state;
  }
}
