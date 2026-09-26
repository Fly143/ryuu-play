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

export class MegaChandelureEx_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lampent";
  public hp: number = 350;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Binding Flame", powerType: PowerType.ABILITY, text: "Your opponent's Active Pokémon's Retreat Cost is Colorless more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Phantom Maze", cost: [], damage: "130+", text: "This attack does 50 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." }
  ];
  public set: string = "PBL";
  public name: string = "Mega Chandelure ex";
  public fullName: string = "Mega Chandelure ex PBL 38";
  public text: string = "Mega Chandelure ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraNoRetreatCost");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraNoRetreatCost");
    }
    return state;
  }
}
