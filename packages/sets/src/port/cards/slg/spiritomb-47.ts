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

export class Spiritomb_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cursed Whirlpool", powerType: PowerType.ABILITY, text: "As long as this Pokémon is your Active Pokémon, your opponent's Active Pokémon can't retreat.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cursed Drop", cost: [], damage: "", text: "Put 3 damage counters on your opponent's Pokémon in any way you like." }
  ];
  public set: string = "SLG";
  public name: string = "Spiritomb";
  public fullName: string = "Spiritomb SLG 47";
  public text: string = "Spiritomb";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraCantRetreatOpponent");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraCantRetreatOpponent");
    }
    return state;
  }
}
