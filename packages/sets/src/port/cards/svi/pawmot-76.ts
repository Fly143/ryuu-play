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

export class Pawmot_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pawmo";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Electrogenesis", powerType: PowerType.ABILITY, text: "Once during your turn, you may search your deck for a Basic Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Electro Paws", cost: [], damage: "230", text: "Discard all Energy from this Pokémon." }
  ];
  public set: string = "SVI";
  public name: string = "Pawmot";
  public fullName: string = "Pawmot SVI 76";
  public text: string = "Pawmot";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchEnergyToSelf");
    }
    return state;
  }
}
