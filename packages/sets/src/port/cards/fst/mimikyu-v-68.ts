import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  BetweenTurnsEffect,
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

export class MimikyuV_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dummy Doll", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand onto your Bench during your turn, you may prevent all damage done to this Mimikyu V by attacks from your opponent's Pokémon until the end of your opponent's next turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Jealous Eyes", cost: [], damage: "", text: "Put 3 damage counters on your opponent's Active Pokémon for each Prize card your opponent has taken." }
  ];
  public set: string = "FST";
  public name: string = "Mimikyu V";
  public fullName: string = "Mimikyu V FST 68";
  public text: string = "Mimikyu V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraPreventEffects");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraPreventEffects");
    }
    return state;
  }
}
