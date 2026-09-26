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

export class Shedinja_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nincada";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Vessel of Life", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard all cards attached to this Pokémon and attach it to 1 of your Pokémon as a Pokémon Tool card. When the Pokémon this card is attached to is Knocked Out, your opponent takes 1 fewer Prize card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Haunt", cost: [], damage: "", text: "Put 3 damage counters on your opponent's Active Pokémon." }
  ];
  public set: string = "DRM";
  public name: string = "Shedinja";
  public fullName: string = "Shedinja DRM 95";
  public text: string = "Shedinja";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "minusPrize:1");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "minusPrize:1");
    }
    return state;
  }
}
