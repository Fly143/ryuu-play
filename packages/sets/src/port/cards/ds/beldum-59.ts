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

export class Beldum_59 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Conductive Body", powerType: PowerType.ABILITY, text: "As long as Beldum is your Active Pokémon, you pay Colorless less to retreat Beldum for each Beldum on your Bench.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Take Down", cost: [], damage: "30", text: "Beldum does 10 damage to itself." }
  ];
  public set: string = "DS";
  public name: string = "Beldum δ";
  public fullName: string = "Beldum δ DS 59";
  public text: string = "Beldum δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -10, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
