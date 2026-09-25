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

export class Kecleon_161 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Unit Color 1", powerType: PowerType.ABILITY, text: "As long as this Pokémon has Unit Energy GrassFireWater attached to it, it is a Grass, Fire, and Water Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tongue Smack", cost: [], damage: "10+", text: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 50 more damage." }
  ];
  public set: string = "DRM";
  public name: string = "Kecleon";
  public fullName: string = "Kecleon DRM 161";
  public text: string = "Kecleon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
