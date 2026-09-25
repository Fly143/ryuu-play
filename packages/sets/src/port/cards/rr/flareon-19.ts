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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Flareon_193 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Undevelop", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may devolve Flareon and put Flareon into your hand. This power can't be used if Flareon is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tail Slap", cost: [], damage: "30", text: "" },
      { name: "Evolving Flare", cost: [], damage: "40+", text: "If Flareon evolved from Eevee during this turn, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Burned." }
  ];
  public set: string = "RR";
  public name: string = "Flareon";
  public fullName: string = "Flareon RR 19";
  public text: string = "Flareon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
