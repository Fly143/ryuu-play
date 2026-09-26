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

export class EmpoleonLVX_120 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Empoleon";
  public hp: number = 140;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Supreme Command", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may choose up to 2 cards from your opponent's hand without looking and put them face down next to the Defending Pokémon. (These cards are not in play or in your opponent's hand.) At the end of your opponent's next turn, return those cards to your opponent's hand. This power can't be used if Empoleon is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hydro Impact", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon (Don't apply Weakness and Resistance for Benched Pokémon.) Empoleon can't attack during your next turn." }
  ];
  public set: string = "DP";
  public name: string = "Empoleon LV.X";
  public fullName: string = "Empoleon LV.X DP 120";
  public text: string = "Empoleon LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 80);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "discardRandomOpponentHand:2");
    }
    return state;
  }
}
