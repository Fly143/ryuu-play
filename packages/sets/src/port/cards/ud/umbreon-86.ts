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

export class Umbreon_86 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cloud-Covered Moon", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Umbreon is your Active Pokémon, you may flip a coin. If heads, return Umbreon and all cards attached to it to your hand. This power can't be used if Umbreon is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Evoblast", cost: [], damage: "50+", text: "Does 50 damage plus 10 more damage for each of your Pokémon in play that evolves from Eevee." }
  ];
  public set: string = "UD";
  public name: string = "Umbreon";
  public fullName: string = "Umbreon UD 86";
  public text: string = "Umbreon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
