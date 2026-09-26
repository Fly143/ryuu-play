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

export class Zangoose_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Poison Resistance", powerType: PowerType.ABILITY, text: "Zangoose can't be Poisoned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Target Slash", cost: [], damage: "10+", text: "If the Defending Pokémon is Seviper, this attack does 10 damage plus 30 more damage." },
      { name: "Super Slash", cost: [], damage: "30+", text: "If the Defending Pokémon is an Evolved Pokémon, this attack does 30 damage plus 30 more damage." }
  ];
  public set: string = "SS";
  public name: string = "Zangoose";
  public fullName: string = "Zangoose SS 14";
  public text: string = "Zangoose";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "immuneToSpecial");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "immuneToSpecial");
    }
    return state;
  }
}
