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

export class MTyranitarEX_92 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tyranitar-EX";
  public hp: number = 240;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "θ Double", powerType: PowerType.ABILITY, text: "This Pokémon may have up to 2 Pokémon Tool cards attached to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Destroyer King", cost: [], damage: "110+", text: "This attack does 60 more damage for each damage counter on your opponent's Active Pokémon." }
  ];
  public set: string = "BKT";
  public name: string = "M Tyranitar-EX";
  public fullName: string = "M Tyranitar-EX BKT 92";
  public text: string = "M Tyranitar-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerDefendingDamageCounter(this, store, state, effect).use(effect, 60);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "toolSlots:2");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "toolSlots:2");
    }
    return state;
  }
}
