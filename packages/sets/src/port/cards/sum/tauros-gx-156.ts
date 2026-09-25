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

export class TaurosGX_156 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rage", cost: [], damage: "20+", text: "This attack does 10 more damage for each damage counter on this Pokémon." },
      { name: "Horn Attack", cost: [], damage: "60", text: "" },
      { name: "Mad Bull-GX", cost: [], damage: "30×", text: "This attack does 30 damage for each damage counter on this Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "SUM";
  public name: string = "Tauros-GX";
  public fullName: string = "Tauros-GX SUM 156";
  public text: string = "Tauros-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, Math.floor(effect.player.active.damage / 10));
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
