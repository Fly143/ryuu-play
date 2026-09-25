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

export class ToxicroakGDP41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Leap Away", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Toxicroak G is your Active Pokémon, you may flip a coin. If heads, return Toxicroak G and all cards attached to it to your hand. This power can't be used if Toxicroak G is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Revenge", cost: [], damage: "20+", text: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 20 damage plus 40 more damage and the Defending Pokémon is now Poisoned." }
  ];
  public set: string = "PR-DPP";
  public name: string = "Toxicroak G";
  public fullName: string = "Toxicroak G PR-DPP DP41";
  public text: string = "Toxicroak G";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
