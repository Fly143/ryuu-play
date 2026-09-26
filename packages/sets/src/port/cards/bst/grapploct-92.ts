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

export class Grapploct_92 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clobbopus";
  public hp: number = 140;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stranglehold Master", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, your opponent's Active Pokémon's Retreat Cost is ColorlessColorless more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Synchro Buster", cost: [], damage: "80+", text: "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage." }
  ];
  public set: string = "BST";
  public name: string = "Grapploct";
  public fullName: string = "Grapploct BST 92";
  public text: string = "Grapploct";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
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
