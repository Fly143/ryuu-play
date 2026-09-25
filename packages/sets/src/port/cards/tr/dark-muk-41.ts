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

export class DarkMuk_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grimer";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sticky Goo", powerType: PowerType.ABILITY, text: "As long as Dark Muk is your Active Pokémon, your opponent pays ColorlessColorless more to retreat his or her Active Pokémon. This power stops working while Dark Muk is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sludge Punch", cost: [], damage: "20", text: "The Defending Pokémon is now Poisoned." }
  ];
  public set: string = "TR";
  public name: string = "Dark Muk";
  public fullName: string = "Dark Muk TR 41";
  public text: string = "Dark Muk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "moreRetreatCostOpponent");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "moreRetreatCostOpponent");
    }
    return state;
  }
}
