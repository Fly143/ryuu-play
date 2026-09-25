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

export class UmbreonH29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Moon", powerType: PowerType.ABILITY, text: "As long as Umbreon is your Active Pokémon and has a Darkness Energy attached to it, once during your turn (before your attack), you may look at your opponent's hand. Choose from it a number of cards up to the number of Darkness Energy attached to Umbreon and shuffle them into your opponent's deck. Your opponent then draws the same number of cards from his or her deck. This power can't be used if Umbreon is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shadow Bind", cost: [], damage: "30", text: "The Defending Pokémon can't retreat during your opponent's next turn." }
  ];
  public set: string = "AQ";
  public name: string = "Umbreon";
  public fullName: string = "Umbreon AQ H29";
  public text: string = "Umbreon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
