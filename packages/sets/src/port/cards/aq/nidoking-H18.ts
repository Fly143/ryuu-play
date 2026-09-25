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

export class NidokingH18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nidorino";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Earth Rage", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Nidoking is your Active Pokémon, you may flip a coin. If heads, put a damage counter on each of your opponent's Benched Pokémon. This power can't be used if Nidoking is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Giant Horn", cost: [], damage: "50+", text: "Flip a coin. If heads, this attack does 50 damage plus 30 more damage." }
  ];
  public set: string = "AQ";
  public name: string = "Nidoking";
  public fullName: string = "Nidoking AQ H18";
  public text: string = "Nidoking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
