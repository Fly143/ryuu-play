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

export class LarrySKomala_175 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lethargic Charge", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is on your Bench, you may use this Ability. Attach an Energy card from your hand to your Active Larry's Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dozing Draw", cost: [], damage: "", text: "This Pokémon is now Asleep. Draw 2 cards." }
  ];
  public set: string = "ASC";
  public name: string = "Larry's Komala";
  public fullName: string = "Larry's Komala ASC 175";
  public text: string = "Larry's Komala";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
