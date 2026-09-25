import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Swampert_36 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Marshtomp";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Diving Search", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for a card. Shuffle your deck, then put that card on top of it.", useWhenInPlay: true },
      { name: "α Growth", powerType: PowerType.ABILITY, text: "When you attach an Energy card from your hand to this Pokémon (except with an attack, Ability, or Trainer card), you may attach 2 Energy cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hydro Pump", cost: [], damage: "40+", text: "This attack does 30 more damage for each Water Energy attached to this Pokémon." }
  ];
  public set: string = "ROS";
  public name: string = "Swampert";
  public fullName: string = "Swampert ROS 36";
  public text: string = "Swampert";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[1]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attachBasicFromHandToBench:2");
    }
    return state;
  }
}
