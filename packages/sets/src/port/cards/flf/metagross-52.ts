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

export class Metagross_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Metang";
  public hp: number = 140;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Plasma Search", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for a Team Plasma card, reveal it, and put it in your hand. Shuffle your deck afterward. You may not use an Ability with the same name during your turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mind Bend", cost: [], damage: "60", text: "The Defending Pokémon is now Confused." }
  ];
  public set: string = "FLF";
  public name: string = "Metagross";
  public fullName: string = "Metagross FLF 52";
  public text: string = "Metagross";

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
