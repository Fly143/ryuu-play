import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Lunatone_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sol Shade", powerType: PowerType.ABILITY, text: "As long as you have Solrock in play, each player's Fire Pokémon (excluding Pokémon-ex) can't use any Poké-Powers.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Moon Guidance", cost: [], damage: "", text: "Search your deck for a Trainer card (excluding Supporter cards), show it to your opponent, and put it into your hand. Shuffle your deck afterward." },
      { name: "Psyshock", cost: [], damage: "10", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed." }
  ];
  public set: string = "LM";
  public name: string = "Lunatone";
  public fullName: string = "Lunatone LM 20";
  public text: string = "Lunatone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchTrainerToHand:1");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noPowers");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noPowers");
    }
    return state;
  }
}
