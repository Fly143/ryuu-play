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

export class Houndoom_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Houndour";
  public hp: number = 70;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lonesome", powerType: PowerType.ABILITY, text: "As long as you have less Pokémon in play than your opponent, your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tight Jaw", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed." },
      { name: "Flamethrower", cost: [], damage: "70", text: "Discard a Fire Energy attached to Houndoom." }
  ];
  public set: string = "UF";
  public name: string = "Houndoom";
  public fullName: string = "Houndoom UF 7";
  public text: string = "Houndoom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noTrainers");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noTrainers");
    }
    return state;
  }
}
