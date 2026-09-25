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

export class Yanmega_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Yanma";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Speed Boost", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Yanmega is your Active Pokémon, you may search your discard pile for a Grass Energy card and attach it to Yanmega. This power can't be used if Yanmega is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wind Return", cost: [], damage: "20+", text: "You may return all Grass Energy attached to Yanmega to your hand. If you do, this attack does 20 damage plus 20 more damage for each Energy card you returned." },
      { name: "Speed Dive", cost: [], damage: "70", text: "" }
  ];
  public set: string = "SV";
  public name: string = "Yanmega";
  public fullName: string = "Yanmega SV 14";
  public text: string = "Yanmega";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.scoopUpSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
