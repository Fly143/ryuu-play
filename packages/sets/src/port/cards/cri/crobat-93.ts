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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Crobat_93 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Golbat";
  public hp: number = 130;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Nighttime Maneuvers", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Search your deck for a card. Shuffle your deck, then put that card on top of it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Sound Wave", cost: [], damage: "80", text: "Your opponent's Active Pokémon is now Confused and Poisoned." }
  ];
  public set: string = "CRI";
  public name: string = "Crobat";
  public fullName: string = "Crobat CRI 93";
  public text: string = "Crobat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
