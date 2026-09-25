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

export class ScovillainEx_216 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Capsakid";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Double Type", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in play, it is Grass and Fire type.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spicy Rage", cost: [], damage: "10+", text: "This attack does 70 more damage for each damage counter on this Pokémon." }
  ];
  public set: string = "SSP";
  public name: string = "Scovillain ex";
  public fullName: string = "Scovillain ex SSP 216";
  public text: string = "Scovillain ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 70, Math.floor(effect.player.active.damage / 10));
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
