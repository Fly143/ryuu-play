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

export class LightFlareon_46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Warm Up", cost: [], damage: "", text: "If you have any benched Pokémon, search your deck for a Fire Energy card and attach it to 1 of them. Then shuffle your deck." },
      { name: "Burning Flame", cost: [], damage: "30+", text: "Flip 2 coins. For each heads, discard a Fire Energy card attached to Light Flareon or this attack does nothing. This attack does 30 damage plus 20 damage for each heads." }
  ];
  public set: string = "N4";
  public name: string = "Light Flareon";
  public fullName: string = "Light Flareon N4 46";
  public text: string = "Light Flareon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
