import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Shiftry_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nuzleaf";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Evolutionary Fan", powerType: PowerType.ABILITY, text: "Once during your turn, when you play Shiftry from your hand to evolve 1 of your Pokémon, you may choose 1 of your Evolved Pokémon in play (excluding any Shiftry). Return that Pokémon and all cards attached to it to your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Reactive Beating", cost: [], damage: "30", text: "If Shiftry has any React Energy cards attached to it, the Defending Pokémon is now Confused." },
      { name: "Cross-Cut", cost: [], damage: "40+", text: "If the Defending Pokémon is an Evolved Pokémon, this attack does 40 damage plus 30 more damage." }
  ];
  public set: string = "LM";
  public name: string = "Shiftry";
  public fullName: string = "Shiftry LM 12";
  public text: string = "Shiftry";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
