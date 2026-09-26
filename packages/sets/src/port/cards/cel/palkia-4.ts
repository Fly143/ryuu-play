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
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Palkia_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 5.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Absolute Space", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, your opponent can't play any Stadium cards from their hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Overdrive Smash", cost: [], damage: "80+", text: "During your next turn, this Pokémon's Overdrive Smash attack does 80 more damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "CEL";
  public name: string = "Palkia";
  public fullName: string = "Palkia CEL 4";
  public text: string = "Palkia";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noStadium");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noStadium");
    }
    return state;
  }
}
